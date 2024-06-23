import { Prisma, Vote, VotingUser } from "@prisma/client";
import { prisma } from "./prisma";

export type GroupWithVotes = Prisma.VoteGroupGetPayload<{
  include: { votes: true };
}>;

interface VoteResult {
  id: string;
  name: string;
  totalRank: number;
}

export type GroupResults = GroupWithVotes & {
  rankings: VoteResult[];
  numFinishedVotes: number;
};

export async function getGroup(groupId: string): Promise<GroupResults | null> {
  let group: GroupWithVotes | null = null;

  group = await prisma.voteGroup.findFirst({
    where: { id: groupId },
    include: { votes: true },
  });

  if (!group) {
    return null;
  }

  let numFinishedVotes = 0;
  let rankingList: VoteResult[] = [];

  if (group.votes.length > 0) {
    // tally up the votes per place
    const summaryMap: { [id: string]: { name: string; total: number } } = {};
    const votesByUsername: { [username: string]: Vote[] } = {};
    group.votes.forEach((obj) => {
      if (!summaryMap[obj.place.id]) {
        summaryMap[obj.place.id] = { total: 0, name: obj.place.name };
      }
      summaryMap[obj.place.id].total += obj.rank;
      if (!votesByUsername[obj.username]) {
        votesByUsername[obj.username] = [obj];
      } else {
        votesByUsername[obj.username].push(obj);
      }
    });
    rankingList = Object.keys(summaryMap).map((id) => ({
      id,
      name: summaryMap[id].name,
      totalRank: summaryMap[id].total,
    }));
    rankingList.sort((a, b) => b.totalRank - a.totalRank);
    // count how many users have finished voting

    /* commented out bc groupBy is new JS feature
      const votesByUsername = Object.groupBy(
      group.votes,
      ({ username }) => username,
    ); */
    if (votesByUsername) {
      numFinishedVotes = Object.values(votesByUsername).reduce(
        (acc, votes) => (votes.length === group.places.length ? acc + 1 : acc),
        0,
      );
    }
  }

  return {
    ...group,
    rankings: rankingList,
    numFinishedVotes,
  };
}

export async function getGroupUsers(
  groupId: string,
): Promise<VotingUser[] | null> {
  const group = await prisma.voteGroup.findUnique({
    where: {
      id: groupId,
    },
  });
  return group?.activeUsers ?? null;
}

export async function getGroupCode(groupId: string): Promise<string | null> {
  const group = await prisma.voteGroup.findUnique({
    where: {
      id: groupId,
    },
  });
  return group?.groupCode ?? null;
}

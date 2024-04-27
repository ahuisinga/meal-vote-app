import { Prisma } from "@prisma/client";
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

  const summaryMap: { [id: string]: { name: string; total: number } } = {};
  group.votes.forEach((obj) => {
    if (!summaryMap[obj.place.id]) {
      summaryMap[obj.place.id] = { total: 0, name: obj.place.name };
    }
    summaryMap[obj.place.id].total += obj.rank;
  });

  const rankingList: VoteResult[] = Object.keys(summaryMap).map((id) => ({
    id,
    name: summaryMap[id].name,
    totalRank: summaryMap[id].total,
  }));
  rankingList.sort((a, b) => b.totalRank - a.totalRank);

  return {
    ...group,
    rankings: rankingList,
  };
}

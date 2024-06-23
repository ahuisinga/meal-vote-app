"use server";

import { prisma } from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function createVoteSubmission(
  placeId: string,
  placeName: string,
  groupId: string,
  rank: number,
) {
  const username = cookies().get("localUsername")?.value;
  if (!username) {
    console.log("no username set, which would they shouldn't be here");
    redirect("/group/join");
  }
  await prisma.vote.create({
    data: {
      place: { id: placeId, name: placeName },
      groupId,
      rank,
      username,
    },
  });
  revalidatePath("/group/" + groupId + "/vote");
}

export async function voteYes(
  placeId: string,
  placeName: string,
  groupId: string,
) {
  await createVoteSubmission(placeId, placeName, groupId, 1);
}

export async function voteNo(
  placeId: string,
  placeName: string,
  groupId: string,
) {
  await createVoteSubmission(placeId, placeName, groupId, 0);
}

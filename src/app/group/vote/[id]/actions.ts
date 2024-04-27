"use server";

import { prisma } from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";

async function createVoteSubmission(
  placeId: string,
  placeName: string,
  groupId: string,
  rank: number,
  userId?: string,
) {
  await prisma.vote.create({
    data: {
      place: { id: placeId, name: placeName },
      groupId,
      rank,
      userId,
    },
  });
  revalidatePath("/group/vote/" + groupId);
}

export async function voteYes(
  placeId: string,
  placeName: string,
  groupId: string,
  userId?: string,
) {
  await createVoteSubmission(placeId, placeName, groupId, 1, userId);
}

export async function voteNo(
  placeId: string,
  placeName: string,
  groupId: string,
  userId?: string,
) {
  await createVoteSubmission(placeId, placeName, groupId, 0, userId);
}

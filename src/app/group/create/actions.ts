"use server";

import { prisma } from "@/lib/db/prisma";
import generateGroupCode from "@/lib/generateGroupCode";
import { redirect } from "next/navigation";

export async function createNewGroup() {
  "use server";
  const group = await prisma.voteGroup.create({
    data: {
      groupCode: generateGroupCode(),
    },
  });
  redirect("/group/start/" + group.id);
}

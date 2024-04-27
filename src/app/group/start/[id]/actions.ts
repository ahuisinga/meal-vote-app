"use server";

import { prisma } from "@/lib/db/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function addUserToGroup(groupId: string, formData: FormData) {
  const username = formData.get("username")?.toString() || "user" + Date.now();
  // add user to group
  await prisma.voteGroup.update({
    where: { id: groupId },
    data: {
      activeUsers: {
        push: [
          {
            name: username,
            userId: username,
          },
        ],
      },
    },
  });
  cookies().set("localUsername", username);
  redirect("/group/vote/" + groupId);
}

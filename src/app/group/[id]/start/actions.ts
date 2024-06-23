"use server";

import { getGroupUsers } from "@/lib/db/group";
import { prisma } from "@/lib/db/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function addUserToGroup(groupId: string, formData: FormData) {
  let username = formData.get("username")?.toString() || "user" + Date.now();

  // need to make sure this is unique within the group
  const existingUsers = await getGroupUsers(groupId);
  while (
    existingUsers &&
    existingUsers.find((user) => user.name === username)
  ) {
    username = username + "_1";
  }

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
  redirect("/group/" + groupId + "/vote");
}

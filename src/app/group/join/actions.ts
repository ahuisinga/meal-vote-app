"use server";

import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";
import zod from "zod";

const formSchema = zod.object({
  groupCode: zod.coerce.string().regex(/^[A-Za-z0-9]+$/, {
    message: "Please enter a valid code.",
  }),
});

export async function joinGroup(prevState: any, formData: FormData) {
  const validatedFields = formSchema.safeParse({
    groupCode: formData.get("groupCode"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const groupCode = validatedFields.data.groupCode;

  const group = await prisma.voteGroup.findFirst({
    where: { groupCode },
  });

  if (!group) {
    // not a valid code
    return {
      errors: {
        groupCode: ["Please enter a valid code."],
      },
    };
  } else {
    redirect("/group/vote/" + group.id);
  }
}

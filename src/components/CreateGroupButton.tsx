"use client";

import { ComponentProps, useTransition } from "react";

interface CreateGroupButtonProps {
  createGroup: () => Promise<void>;
}

export default function CreateGroupButton({
  createGroup,
}: CreateGroupButtonProps) {
  const [isPending, startTransition] = useTransition();
  return (
    <button
      className={`btn btn-secondary`}
      onClick={() => {
        startTransition(async () => {
          console.log("do something please");
          await createGroup();
        });
      }}
    >
      Create Group
    </button>
  );
}

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
          await createGroup();
        });
      }}
    >
      {isPending && <span className="loading loading-spinner" />}Create Group
    </button>
  );
}

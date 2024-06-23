import CopyIcon from "@/components/CopyIcon";
import { getGroupCode } from "@/lib/db/group";
import React from "react";

interface GroupLayoutProps {
  params: {
    id: string;
  };
  children: React.ReactNode;
}

export default async function GroupLayout({
  params: { id },
  children,
}: GroupLayoutProps) {
  const groupCode = await getGroupCode(id);
  return (
    <div className="flex flex-col">
      <div className="flex w-full flex-row justify-end space-x-2">
        <p>
          Group Code: <span className="font-bold">{groupCode}</span>
        </p>
        <CopyIcon textToCopy={groupCode} />
      </div>
      <div className="pt-10">{children}</div>
    </div>
  );
}

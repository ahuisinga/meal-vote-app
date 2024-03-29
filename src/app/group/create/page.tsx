import CreateGroupButton from "@/components/CreateGroupButton";
import { createNewGroup } from "./actions";

export default function CreateGroupPage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <CreateGroupButton createGroup={createNewGroup} />
    </div>
  );
}

import { cookies } from "next/headers";
import { addUserToGroup } from "./actions";

interface StartPageProps {
  params: {
    id: string;
  };
}

export default function StartPage({ params: { id } }: StartPageProps) {
  const addUserToGroupWithId = addUserToGroup.bind(null, id);
  const username = cookies().get("localUsername")?.value;
  return (
    <div className="flex flex-col">
      <form
        className="flex h-full w-full flex-col items-center justify-center md:flex-row"
        action={addUserToGroupWithId}
      >
        <input
          type="text"
          name="username"
          placeholder="Enter name"
          className="input input-bordered"
          defaultValue={username}
        />
        <button className="btn btn-primary m-3" type="submit">
          Start
        </button>
      </form>
    </div>
  );
}

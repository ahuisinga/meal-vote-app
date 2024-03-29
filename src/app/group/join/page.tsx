"use client";

import { useFormState, useFormStatus } from "react-dom";
import { joinGroup } from "./actions";

const initialState = null;

export default function JoinGroupPage() {
  const [state, formAction] = useFormState(joinGroup, initialState);
  const { pending } = useFormStatus();

  return (
    <div className="flex flex-col">
      <form
        className="flex h-full w-full flex-col items-center justify-center md:flex-row"
        action={formAction}
      >
        <input
          type="text"
          required
          name="groupCode"
          placeholder="Enter Code"
          className="input input-bordered m-3"
        />
        {state?.errors && (
          <p className="text-error">Please enter a valid code.</p>
        )}
        <button type="submit" className="btn btn-primary">
          Join!
          {pending && <span className="loading loading-spinner" />}
        </button>
      </form>
    </div>
  );
}

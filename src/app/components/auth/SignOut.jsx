"use server";
import { auth, signOut } from "../../../../auth";

export async function SignOut() {
  return (
    <form
      action={async () => {
        await signOut();
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
  );
}

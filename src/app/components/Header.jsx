import React from "react";
import "../globals.css";
import { trapBold } from "./fonts";
import { auth, signOut } from "../../../auth";
import { SignOut } from "./auth/signOut";

export default async function Header() {
  const session = await auth();
  return (
    <>
      {session && session.user.name}

      <div className="flex justify-center items-center py-5 px-5 space-x-56 md:max-xl:space-x-20 mt-56">
        <div
          className={`${trapBold.className} flex items-center justify-center gap-1 md:max-xl:ml-10 cursor-pointer`}
        >
          <h1 className={`text-slate-100 text-7xl font-bold`}>mystory</h1>
        </div>
      </div>
      <div
        className={`flex justify-center items-center py-5 px-5 space-x-56 md:max-xl:space-x-20 lg:mb-80`}
      >
        <h3
          className={`bg-gray-100 rounded-3xl font-bold inline p-2 px-4 text-gray-800 text-sm md:lg:text-base`}
        >
          A way to share stories anonymously.
        </h3>
      </div>
    </>
  );
}

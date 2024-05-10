import React from "react";
import { FaGithub } from "react-icons/fa6";
import { signIn } from "../../../auth.js";
const page = () => {
  return (
    <div className="h-screen flex items-center justify-cener">
      <div className="max-w-4xl w-[90vw] md:w-[70vw] p-3 hover:shadow-white hover:shadow-lg ransition-all duration-500 mx-auto h-[70vh] border flex flex-col rounded-lg items-center justify-center gap-4 border-white">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-4xl text-white font-semibold">
            Login to mystory
          </h2>
          <p className="text-xs md:text-sm text-white">
            Dive into world of stories
          </p>
        </div>
        <form
          action={async () => {
            "use server";
            await signIn("github", { redirectTo: "/" });
          }}
        >
          <button
            className="border border-white rounded-xl px-2 py-1 md:px-3 md:py-2 text-white font-semibold hover:bg-slate-100 hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-1"
            type="submit"
          >
            GitHub
            <FaGithub className="text-lg" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;

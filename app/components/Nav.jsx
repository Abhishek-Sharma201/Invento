import React from "react";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const Nav = () => {
  return (
    <div
      id="nav"
      className="w-full h-[10dvh] flex items-center justify-between px-28 fixed top-0 left-0 z-50 backdrop-blur-md "
    >
      <h3
        id="game_name"
        className=" flex flex-row items-end justify-center gap-1 text-[2rem] "
      >
        Avatar
        <sub className={`${inter.className} text-[.7rem] font-[200]`}>BETA</sub>
      </h3>
      <ul className=" w-[max-content] flex items-center justify-center gap-8 text-[.8rem] ">
        <Link
          href={"#"}
          className=" hover:border-b border-b-white transition-all "
        >
          Resources
        </Link>
        <Link
          href={"#"}
          className=" hover:border-b border-b-white transition-all "
        >
          Sponcers
        </Link>
        <Link
          href={"/feedback"}
          className=" transition-all bg-zinc-900 border border-zinc-700 rounded-md px-4 py-2 "
        >
          Feedback
        </Link>
      </ul>
    </div>
  );
};

export default Nav;

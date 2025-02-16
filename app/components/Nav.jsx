"use client";

import { useState } from "react";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full h-[10dvh] fixed top-0 left-0 z-50 px-3 md:px-16 lg:px-20 ">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex flex-row items-center justify-center gap-1 text-2xl sm:text-3xl">
          <Image src={"/assets/logo.png"} alt="logo" height={50} width={50} />
          <h3 id="team_name" className="text-[1rem]">
            Studio
          </h3>
        </div>

        <div className="hidden md:flex items-center justify-center gap-8 text-sm">
          <Link
            href="/avatar"
            className=" py-2 px-4 text-white rounded-md bg-blue-700 "
          >
            Avatar
          </Link>
          <Link
            href="/feedback"
            className=" py-2 px-4 text-white rounded-md bg-zinc-800 "
          >
            Feedback
          </Link>
        </div>

        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-[10dvh] left-0 w-full bg-zinc-900 border-t border-zinc-700">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/avatar" className="hover:text-gray-300 transition-all">
              Avatar
            </Link>
            <Link
              href="/feedback"
              className="hover:text-gray-300 transition-all"
            >
              Feedback
            </Link>
            <Link
              href="/feedback"
              className="transition-all bg-zinc-800 border border-zinc-700 rounded-md px-4 py-2 text-center"
            >
              Feedback
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;

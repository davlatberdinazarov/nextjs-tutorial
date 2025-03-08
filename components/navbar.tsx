import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
  return (
    <header className=" body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <Link href="/" className="ml-3 text-xl">
            Tailblocks
          </Link>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/crud" className="mr-5">
            CRUD
          </Link>
          <a className="mr-5">Second Link</a>
          <a className="mr-5">Third Link</a>
          <a className="mr-5">Fourth Link</a>
        </nav>
          <ModeToggle/>
        </div>
    </header>
  );
}

import Link from "next/link";
import React from "react";
import { SignInButton, SignOutButton } from "./ui/auth-button";
import { getServerSession } from "next-auth";
import authOptions from "@/app/api/auth/[...nextauth]/options";
import HamburgerButton from "./ui/hamburger";

const NavBar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <header className="p-8 md:px-16 md:py-8">
      <nav className=" relative flex items-center justify-between">
        <Link href={"/"} className="font-bold text-3xl">
          TuDu
        </Link>
        {session ? (
          <>
            <div className="hidden md:inline-flex justify-center items-center space-x-4">
              <h1>
                Welcome back,{" "}
                <span className="font-bold">{session.user?.name}</span>
              </h1>
              <SignOutButton />
            </div>
          </>
        ) : (
          <ul className="hidden md:flex items-center space-x-4">
            <li>
              <SignInButton />
            </li>
            <li>
              <Link
                href={"/signup"}
                className="p-2 border-2 border-black rounded-md"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        )}
        <HamburgerButton />
      </nav>
    </header>
  );
};

export default NavBar;

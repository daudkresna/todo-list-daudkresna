"use client";
import React from "react";
import { SignInButton, SignOutButton } from "./ui/auth-button";
import Link from "next/link";
import { useSession } from "next-auth/react";

const ResponsiveNavigation = ({
  hamburgerOpen,
}: {
  hamburgerOpen: boolean;
}) => {
  const { data: session } = useSession();
  return (
    <nav
      id="nav-menu"
      className={`${
        !hamburgerOpen ? "scale-y-0" : "scale-y-100"
      } p-2 md:hidden ease-in-out duration-300 origin-top absolute max-w-[250px] w-full font-semibold right-4 top-full bg-white border-2 border-black shadow-md z-50`}
    >
      {session ? (
        <>
          <div className="flex-col items-center justify-center space-y-4">
            <h1>
              Welcome back,{" "}
              <span className="font-bold">{session.user?.name}</span>
            </h1>
            <SignOutButton />
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center gap-4">
          <SignInButton />
          <Link
            href={"/signup"}
            className="p-2 border-2 border-black rounded-md"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default ResponsiveNavigation;

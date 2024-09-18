"use client";
import React from "react";
import { signIn, signOut } from "next-auth/react";

export const SignInButton = () => (
  <button
    onClick={() => signIn()}
    className="p-2 border-2 border-black rounded-md"
  >
    Sign in
  </button>
);

export const SignOutButton = () => (
  <button
    className="p-2 border-2 border-black rounded-md"
    onClick={() => signOut()}
  >
    Sign Out
  </button>
);

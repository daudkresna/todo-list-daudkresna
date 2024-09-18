"use client";
import React, { useState } from "react";
import ResponsiveNavigation from "../responsive-nav";

const HamburgerButton = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  return (
    <div className="flex md:hidden items-center">
      <button
        className="block absolute right-4"
        id="hamburger"
        name="hamburger"
        type="button"
        onClick={() => setHamburgerOpen(!hamburgerOpen)}
      >
        <span
          className={`${
            hamburgerOpen ? "rotate-45" : null
          } transition duration-300 ease-in-out origin-top-left my-2 block w-[30px] h-[2px] bg-black`}
        ></span>
        <span
          className={`${
            hamburgerOpen ? "scale-0" : null
          } transition duration-300 ease-in-out my-2 block w-[30px] h-[2px] bg-black`}
        ></span>
        <span
          className={`${
            hamburgerOpen ? "-rotate-45" : null
          } transition duration-300 ease-in-out origin-bottom-left my-2 block w-[30px] h-[2px] bg-black`}
        ></span>
      </button>
      <ResponsiveNavigation hamburgerOpen={hamburgerOpen} />
    </div>
  );
};

export default HamburgerButton;

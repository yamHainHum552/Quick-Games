"use client";
import React, { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/tictactoe", label: "Tic-Tac-Toe" },
  { href: "/rockpaperscissors", label: "Rock-Paper-Scissors" },
  { href: "/flipacoin", label: "Flip-A-Coin" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navbar bg-base-100  sm:flex-row" data-theme="dark">
      <div className="dropdown md:hidden" onClick={handleMenu}>
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          {isOpen &&
            links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className=" m-2 font-bold "
              >
                {link.label}
              </Link>
            ))}
        </ul>
      </div>
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" href="/">
          Yam Guragain
        </Link>
      </div>
      <div className="flex-none hidden md:block">
        <ul className="menu menu-horizontal px-1">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="btn m-1 font-bold border-transparent   hover:border-primary"
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

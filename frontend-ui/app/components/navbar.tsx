"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-6 shadow">
      <div className="flex justify-between items-center">
        {/* Brand / Logo */}

        <Link href={"/"}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
          />
        </Link>

        {/*  Mobile Hamburger menu (only visible on small screens) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none text-2xl"
        >
          ☰
        </button>

        {/* Desktop Navigation (hidden on small screens) */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/contacts"}>Contacts</Link>
          </li>
          <li>
            <Link href={"/reminders"}>Reminders</Link>
          </li>
        </ul>
      </div>

      {/*  Mobile Navigation (visible only when hamburger is open) */}
      {isOpen && (
        <div className="md:hidden fixed top-0 right-0 w-36 h-full bg-black text-white shadow-lg z-50 p-6 transition-transform transform">
          <ul className="space-y-4">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/contacts" onClick={() => setIsOpen(false)}>
                Contacts
              </Link>
            </li>
            <li>
              <Link href="/reminders" onClick={() => setIsOpen(false)}>
                Reminders
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-end mr-20 mt-20 space-x-6">
      <Link href="/">HOME</Link>
      <Link href="/cv">CV</Link>
      <Link href="/about">ABOUT</Link>
    </nav>
  );
}

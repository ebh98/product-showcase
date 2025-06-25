"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `px-6 py-3 hover:bg-blue-800 ${
      pathname === path ? "bg-blue-800" : ""
    }`;

  return (
    <nav className="bg-blue-800 text-white flex gap-8 justify-center items-center px-8 py-6 mb-8 shadow">
      <Link href="/" className={linkClass("/")}>
        Home
      </Link>
      <span>|</span>
      <Link href="/contact" className={linkClass("/contact")}>
        Contact
      </Link>
    </nav>
  );
}
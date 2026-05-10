"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const path = usePathname();

  return (
    <header
      style={{
        background: "var(--paper)",
        borderBottom: "1px solid var(--rule)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        className="max-w-6xl mx-auto px-8 md:px-16 flex items-center justify-between"
        style={{ height: "64px" }}
      >
        <Link
          href="/"
          className="font-mono font-medium tracking-tight"
          style={{ color: "var(--ink)", fontSize: "0.9em", letterSpacing: "-0.01em" }}
        >
          IL2
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/about"
            className="font-sans"
            style={{
              color: path === "/about" ? "var(--ink)" : "var(--gray-2)",
              fontSize: "0.9em",
            }}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="font-mono font-medium px-4 py-2 rounded"
            style={{
              background: "var(--ink)",
              color: "var(--paper)",
              fontSize: "0.8em",
            }}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

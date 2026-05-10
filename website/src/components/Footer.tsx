import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--ink)", borderTop: "1px solid var(--ink-soft)" }}>
      <div
        className="max-w-6xl mx-auto px-8 md:px-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        style={{ paddingTop: "40px", paddingBottom: "40px" }}
      >
        <span
          className="font-mono font-medium"
          style={{ color: "var(--gray-3)", fontSize: "0.85em" }}
        >
          © 2026 Infinite Leverage 2
        </span>
        <nav className="flex items-center gap-6">
          <Link
            href="/about"
            className="font-sans"
            style={{ color: "var(--gray-2)", fontSize: "0.85em" }}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="font-sans"
            style={{ color: "var(--gray-2)", fontSize: "0.85em" }}
          >
            Contact
          </Link>
          <a
            href="mailto:tracy@infiniteleverage-2.com"
            className="font-mono"
            style={{ color: "var(--blue)", fontSize: "0.8em" }}
          >
            tracy@infiniteleverage-2.com
          </a>
        </nav>
      </div>
    </footer>
  );
}

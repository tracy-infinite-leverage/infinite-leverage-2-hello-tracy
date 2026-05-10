const channels = [
  {
    label: "Email",
    value: "tracy@infiniteleverage-2.com",
    href: "mailto:tracy@infiniteleverage-2.com",
    desc: "Best for project enquiries and longer conversations.",
  },
];

export default function Contact() {
  return (
    <main>
      <section style={{ background: "var(--ink)" }} className="py-20">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <p
            className="font-mono uppercase tracking-widest mb-4"
            style={{ color: "var(--gray-2)", fontSize: "0.75em" }}
          >
            Contact
          </p>
          <h1
            className="font-sans font-extrabold text-white leading-tight"
            style={{ fontSize: "clamp(40px, 7vw, 96px)", letterSpacing: "-0.03em" }}
          >
            Get in touch
          </h1>
          <p
            className="mt-6 font-sans max-w-xl"
            style={{ color: "var(--gray-3)", fontSize: "1.1em", lineHeight: 1.7 }}
          >
            Whether you&apos;re exploring Infinite Leverage 2 for your business or
            ready to start — reach out directly.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--paper)" }} className="py-20">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          {channels.map((c) => (
            <div
              key={c.label}
              className="flex flex-col sm:flex-row sm:items-start gap-4 py-8 border-t"
              style={{ borderColor: "var(--rule)" }}
            >
              <span
                className="font-mono uppercase tracking-widest shrink-0 pt-0.5"
                style={{ color: "var(--gray-1)", fontSize: "0.75em", width: "80px" }}
              >
                {c.label}
              </span>
              <div>
                <a
                  href={c.href}
                  className="font-mono font-medium underline underline-offset-4"
                  style={{ color: "var(--blue)", fontSize: "1em" }}
                >
                  {c.value}
                </a>
                <p className="font-sans mt-2" style={{ color: "var(--gray-2)", fontSize: "0.9em", lineHeight: 1.6 }}>
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
          <div
            className="flex flex-col sm:flex-row sm:items-start gap-4 py-8 border-t"
            style={{ borderColor: "var(--rule)" }}
          >
            <span
              className="font-mono uppercase tracking-widest shrink-0 pt-0.5"
              style={{ color: "var(--gray-1)", fontSize: "0.75em", width: "80px" }}
            >
              Direct
            </span>
            <div>
              <a
                href="mailto:tracy@infiniteleverage-2.com"
                className="font-mono font-medium px-6 py-3 rounded inline-block"
                style={{ background: "var(--blue)", color: "#fff", fontSize: "0.85em" }}
              >
                Send a message
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

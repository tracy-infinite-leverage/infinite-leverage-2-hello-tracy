const pillars = [
  {
    n: "01",
    title: "AI as infrastructure",
    body: "We treat AI the way great engineering teams treat cloud infrastructure — provisioned, observable, and composable. Not magic. Not a chatbot. A system.",
  },
  {
    n: "02",
    title: "Humans as orchestrators",
    body: "Every agent on the team has a defined role, a context folder, and a set of rules it never breaks. The human sets the strategy. The agents execute it.",
  },
  {
    n: "03",
    title: "The three-tool stack",
    body: "GitHub for code and context. Vercel for deployment. Supabase for data. Master three tools and you can ship anything — without a $500/month SaaS stack.",
  },
  {
    n: "04",
    title: "Work that outlives the operator",
    body: "Every workflow is documented. Every handoff is explicit. If you step away for a month, the system picks up exactly where you left it.",
  },
];

export default function About() {
  return (
    <main>
      <section style={{ background: "var(--ink)" }} className="py-20">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <p
            className="font-mono uppercase tracking-widest mb-4"
            style={{ color: "var(--gray-2)", fontSize: "0.75em" }}
          >
            About
          </p>
          <h1
            className="font-sans font-extrabold text-white leading-tight"
            style={{ fontSize: "clamp(40px, 7vw, 96px)", letterSpacing: "-0.03em" }}
          >
            Infinite Leverage 2
          </h1>
          <p
            className="mt-6 font-sans max-w-2xl"
            style={{ color: "var(--gray-3)", fontSize: "1.15em", lineHeight: 1.7 }}
          >
            A hands-on programme for founders and operators who want to run a
            business with AI as a core team member — not a bolt-on tool. We
            build the systems, agents, and workflows that turn one person into
            a full operating company.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--paper)" }} className="py-20">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <p
            className="font-mono uppercase tracking-widest mb-4"
            style={{ color: "var(--blue)", fontSize: "0.75em" }}
          >
            Principles
          </p>
          <h2
            className="font-sans font-extrabold mb-12"
            style={{ color: "var(--ink)", fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.02em" }}
          >
            How we think about
            <br />
            AI-assisted operations
          </h2>
          <div className="flex flex-col">
            {pillars.map((p) => (
              <div
                key={p.n}
                className="flex gap-6 md:gap-10 py-8 border-t"
                style={{ borderColor: "var(--rule)" }}
              >
                <span
                  className="font-mono font-medium shrink-0 pt-0.5"
                  style={{ color: "var(--blue)", fontSize: "0.85em" }}
                >
                  {p.n}
                </span>
                <div>
                  <p className="font-sans font-bold mb-2" style={{ color: "var(--ink)" }}>
                    {p.title}
                  </p>
                  <p className="font-sans" style={{ color: "var(--gray-2)", lineHeight: 1.7 }}>
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--cream)" }} className="py-20">
        <div className="max-w-6xl mx-auto px-8 md:px-16 flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1">
            <p
              className="font-mono uppercase tracking-widest mb-4"
              style={{ color: "var(--blue)", fontSize: "0.75em" }}
            >
              Who this is for
            </p>
            <h2
              className="font-sans font-extrabold mb-4"
              style={{ color: "var(--ink)", fontSize: "clamp(24px, 3vw, 40px)", letterSpacing: "-0.02em" }}
            >
              Operators who want leverage
            </h2>
            <p className="font-sans" style={{ color: "var(--gray-2)", lineHeight: 1.7, maxWidth: "480px" }}>
              You don&apos;t need a team of twenty to run at enterprise quality. You
              need the right systems, the right agents, and a clear picture of
              who does what. Infinite Leverage 2 is the blueprint.
            </p>
          </div>
          <div className="flex-1">
            <a
              href="/contact"
              className="font-mono font-medium px-6 py-3 rounded inline-block mt-8 md:mt-12"
              style={{ background: "var(--ink)", color: "var(--paper)", fontSize: "0.85em" }}
            >
              Work with us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

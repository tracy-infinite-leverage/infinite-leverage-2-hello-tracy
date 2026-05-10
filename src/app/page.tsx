const tracks = [
  { n: "01", name: "Mindset", desc: "Humans are the orchestrator. AI is the CMS. Structure beats novelty." },
  { n: "02", name: "Infrastructure", desc: "GitHub · Vercel · Supabase. Master three tools, ship anything." },
  { n: "03", name: "Building", desc: "Design systems, automated workflows, admin tools your team uses without escalating." },
  { n: "04", name: "Team and Ops", desc: "The right roles, epic planning, a PM agent that knows what you shipped yesterday." },
  { n: "05", name: "Continuity", desc: "What AI can test on its own. How to hand off context. The work outlives the operator." },
];

const protocols = [
  { n: "01", text: "Humans are the orchestrator." },
  { n: "02", text: "The CMS is dead — AI is the CMS." },
  { n: "03", text: "The stack: Claude, GitHub, Vercel, Supabase." },
  { n: "04", text: "Agents are folders, not magic." },
  { n: "05", text: "GitHub — version control for all code and agent context." },
  { n: "06", text: "Vercel — deployment; CI/CD via git push only." },
  { n: "07", text: "Supabase — data layer; contact forms, subscribers, CRM." },
  { n: "08", text: "Design systems Claude can read." },
  { n: "09", text: "Workflows that turn intent into output." },
  { n: "10", text: "Communications that go out automatically." },
  { n: "11", text: "Admin tools your team uses without escalating." },
  { n: "12", text: "When to bring in a human engineer." },
  { n: "13", text: "The roles every Infinite Leverage team has." },
  { n: "14", text: "How to plan an epic." },
  { n: "15", text: "A PM agent that already knows what you shipped." },
  { n: "16", text: "What AI can test on its own, and what it cannot." },
  { n: "17", text: "How to hand off context, memory, and project state." },
  { n: "18", text: "The work outlives the operator." },
];

export default function Home() {
  return (
    <main>
      {/* Section 1 — Hero */}
      <section style={{ background: "var(--ink)" }} className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-8 md:px-16 flex flex-col justify-between min-h-[60vh]">
          <div className="flex-1 flex flex-col justify-center">
            <p
              className="font-mono uppercase tracking-widest mb-6"
              style={{ color: "var(--gray-2)", fontSize: "0.75em" }}
            >
              Infinite Leverage 2
            </p>
            <h1
              className="font-sans font-extrabold text-white leading-none"
              style={{
                fontSize: "clamp(56px, 9vw, 144px)",
                letterSpacing: "-0.035em",
              }}
            >
              Hello,
              <br />
              Tracy.
            </h1>
            <p
              className="mt-6 font-sans max-w-lg"
              style={{ color: "var(--gray-3)", fontSize: "1.15em", lineHeight: 1.6 }}
            >
              Your AI team is assembled. The operating system is live.
              Build faster than you thought possible.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-12">
            <a
              href="/contact"
              className="font-mono font-medium px-6 py-3 rounded"
              style={{ background: "var(--blue)", color: "#fff", fontSize: "0.85em" }}
            >
              Get started
            </a>
            <a
              href="#agenda"
              className="font-mono font-medium px-6 py-3 rounded"
              style={{
                border: "1px solid var(--ink-soft)",
                color: "var(--gray-3)",
                fontSize: "0.85em",
              }}
            >
              See the agenda
            </a>
            <div className="flex items-center gap-2 sm:ml-4">
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ background: "var(--positive)" }}
              />
              <span
                className="font-mono uppercase tracking-widest"
                style={{ color: "var(--gray-2)", fontSize: "0.72em" }}
              >
                AI team online
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Agenda */}
      <section id="agenda" style={{ background: "var(--cream)" }} className="py-20">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <p
            className="font-mono uppercase tracking-widest mb-4"
            style={{ color: "var(--blue)", fontSize: "0.75em" }}
          >
            Programme
          </p>
          <h2
            className="font-sans font-extrabold mb-12"
            style={{ color: "var(--ink)", fontSize: "clamp(32px, 5vw, 64px)", letterSpacing: "-0.025em" }}
          >
            The Infinite Leverage Agenda
          </h2>
          <div className="flex flex-col">
            {tracks.map((t) => (
              <div
                key={t.n}
                className="flex gap-6 md:gap-10 py-6 border-t"
                style={{ borderColor: "var(--rule)" }}
              >
                <span
                  className="font-mono font-medium shrink-0 pt-0.5"
                  style={{ color: "var(--blue)", fontSize: "0.85em" }}
                >
                  {t.n}
                </span>
                <div>
                  <p className="font-sans font-bold" style={{ color: "var(--ink)" }}>
                    {t.name}
                  </p>
                  <p className="font-sans mt-1" style={{ color: "var(--gray-2)", lineHeight: 1.6 }}>
                    {t.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Protocols */}
      <section style={{ background: "var(--paper)" }} className="py-20">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <p
            className="font-mono uppercase tracking-widest mb-4"
            style={{ color: "var(--blue)", fontSize: "0.75em" }}
          >
            System
          </p>
          <h2
            className="font-sans font-extrabold mb-12"
            style={{ color: "var(--ink)", fontSize: "clamp(28px, 4vw, 56px)", letterSpacing: "-0.02em" }}
          >
            18 Protocols.
            <br />
            One operating system.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
            {protocols.map((p) => (
              <div
                key={p.n}
                className="flex gap-5 py-4 border-t"
                style={{ borderColor: "var(--rule)" }}
              >
                <span
                  className="font-mono font-medium shrink-0 pt-0.5"
                  style={{ color: "var(--blue)", fontSize: "0.8em" }}
                >
                  {p.n}
                </span>
                <p className="font-sans" style={{ color: "var(--ink)", lineHeight: 1.6 }}>
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — CTA */}
      <section style={{ background: "var(--ink)" }} className="py-24">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <blockquote
            className="font-sans font-bold text-white mb-10"
            style={{ fontSize: "clamp(22px, 3vw, 44px)", lineHeight: 1.25, letterSpacing: "-0.02em" }}
          >
            &ldquo;You + an AI engineer + this team
            <br />= the new minimum viable founder.&rdquo;
          </blockquote>
          <p className="font-sans mb-6" style={{ color: "var(--gray-3)", fontSize: "1.05em" }}>
            Ready to build?
          </p>
          <a
            href="/contact"
            className="font-mono font-medium px-6 py-3 rounded inline-block"
            style={{ background: "var(--blue)", color: "#fff", fontSize: "0.85em" }}
          >
            Start the conversation
          </a>
        </div>
      </section>
    </main>
  );
}

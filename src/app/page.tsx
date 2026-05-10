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
      <section
        style={{ background: "#0B1426" }}
        className="min-h-screen flex flex-col justify-between px-8 py-16 md:px-16"
      >
        <div className="flex-1 flex flex-col justify-center">
          <h1
            className="font-sans font-extrabold text-white leading-none"
            style={{
              fontSize: "clamp(72px, 10vw, 160px)",
              letterSpacing: "-0.035em",
            }}
          >
            Hello, Tracy.
          </h1>
          <p
            className="mt-4 font-sans"
            style={{ color: "#CBD5E1", fontSize: "1.4em" }}
          >
            Infinite Leverage 2
          </p>
        </div>
        <div className="flex items-center gap-2 mt-8">
          <span
            className="inline-block w-2 h-2 rounded-full"
            style={{ background: "#22C55E" }}
          />
          <span
            className="font-mono uppercase tracking-widest"
            style={{ color: "#CBD5E1", fontSize: "0.8em" }}
          >
            AI team is online
          </span>
        </div>
      </section>

      {/* Section 2 — Infinite Leverage Agenda */}
      <section
        style={{ background: "#F2EDE3" }}
        className="px-8 py-20 md:px-16"
      >
        <h2
          className="font-sans font-extrabold mb-12"
          style={{ color: "#0B1426", fontSize: "clamp(36px, 5vw, 72px)" }}
        >
          The Infinite Leverage Agenda
        </h2>
        <div className="flex flex-col">
          {tracks.map((t) => (
            <div
              key={t.n}
              className="flex gap-6 md:gap-10 py-6 border-t"
              style={{ borderColor: "#E2E8F0" }}
            >
              <span
                className="font-mono font-medium shrink-0 pt-0.5"
                style={{ color: "#2563EB", fontSize: "0.9em" }}
              >
                {t.n}
              </span>
              <div>
                <p className="font-sans font-bold" style={{ color: "#0B1426" }}>
                  {t.name}
                </p>
                <p className="font-sans mt-1" style={{ color: "#64748B" }}>
                  {t.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 — 18 Protocols */}
      <section className="px-8 py-20 md:px-16" style={{ background: "#FFFFFF" }}>
        <h2
          className="font-sans font-extrabold mb-12"
          style={{ color: "#0B1426", fontSize: "clamp(32px, 4vw, 60px)" }}
        >
          18 Protocols. One operating system.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          {protocols.map((p) => (
            <div
              key={p.n}
              className="flex gap-5 py-4 border-t"
              style={{ borderColor: "#E2E8F0" }}
            >
              <span
                className="font-mono font-medium shrink-0 pt-0.5"
                style={{ color: "#2563EB", fontSize: "0.85em" }}
              >
                {p.n}
              </span>
              <p className="font-sans" style={{ color: "#0B1426" }}>
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 — CTA */}
      <section
        style={{ background: "#0B1426" }}
        className="px-8 py-24 md:px-16 flex flex-col items-start"
      >
        <blockquote
          className="font-sans font-bold text-white mb-10"
          style={{ fontSize: "clamp(24px, 3vw, 48px)", lineHeight: 1.25 }}
        >
          &ldquo;You + an AI engineer + this team
          <br />= the new minimum viable founder.&rdquo;
        </blockquote>
        <p className="font-sans mb-4" style={{ color: "#CBD5E1", fontSize: "1.1em" }}>
          Ready to build?
        </p>
        <a
          href="mailto:tracy@infiniteleverage-2.com"
          className="font-mono font-medium underline underline-offset-4"
          style={{ color: "#2563EB", fontSize: "1em" }}
        >
          tracy@infiniteleverage-2.com
        </a>
      </section>
    </main>
  );
}

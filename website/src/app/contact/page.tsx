import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <main>
      {/* Hero */}
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

      {/* Form + sidebar */}
      <section style={{ background: "var(--paper)" }} className="py-20">
        <div className="max-w-6xl mx-auto px-8 md:px-16 flex flex-col lg:flex-row gap-16">

          {/* Form */}
          <div className="flex-1 min-w-0">
            <p
              className="font-mono uppercase tracking-widest mb-2"
              style={{ color: "var(--blue)", fontSize: "0.75em" }}
            >
              Send a message
            </p>
            <h2
              className="font-sans font-extrabold mb-2"
              style={{ color: "var(--ink)", fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}
            >
              Start a conversation
            </h2>
            <ContactForm />
          </div>

          {/* Sidebar */}
          <aside style={{ width: "260px", flexShrink: 0 }} className="lg:pt-14">
            <div className="flex flex-col gap-8">
              <div>
                <p
                  className="font-mono uppercase tracking-widest mb-2"
                  style={{ color: "var(--gray-1)", fontSize: "0.7em" }}
                >
                  Email
                </p>
                <a
                  href="mailto:tracy@infiniteleverage-2.com"
                  className="font-mono"
                  style={{ color: "var(--blue)", fontSize: "0.85em" }}
                >
                  tracy@infiniteleverage-2.com
                </a>
              </div>
              <div>
                <p
                  className="font-mono uppercase tracking-widest mb-2"
                  style={{ color: "var(--gray-1)", fontSize: "0.7em" }}
                >
                  Response time
                </p>
                <p className="font-sans" style={{ color: "var(--gray-2)", fontSize: "0.9em", lineHeight: 1.6 }}>
                  Within one business day.
                </p>
              </div>
              <div>
                <p
                  className="font-mono uppercase tracking-widest mb-2"
                  style={{ color: "var(--gray-1)", fontSize: "0.7em" }}
                >
                  Based in
                </p>
                <p className="font-sans" style={{ color: "var(--gray-2)", fontSize: "0.9em", lineHeight: 1.6 }}>
                  Sydney, Australia
                </p>
              </div>
            </div>
          </aside>

        </div>
      </section>
    </main>
  );
}

export default function Contact() {
  return (
    <main className="px-8 py-24 md:px-16">
      <h1
        className="font-sans font-extrabold mb-6"
        style={{ color: "#0B1426", fontSize: "clamp(36px, 5vw, 64px)" }}
      >
        Get in touch
      </h1>
      <a
        href="mailto:tracy@infiniteleverage-2.com"
        className="font-mono font-medium underline underline-offset-4"
        style={{ color: "#2563EB", fontSize: "1.1em" }}
      >
        tracy@infiniteleverage-2.com
      </a>
    </main>
  );
}

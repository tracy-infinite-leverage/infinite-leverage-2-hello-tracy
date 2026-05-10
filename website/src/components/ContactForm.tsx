"use client";

import { useState } from "react";

type Field = { name: string; email: string; topic: string; message: string };
const empty: Field = { name: "", email: "", topic: "", message: "" };

const topics = [
  "Exploring Infinite Leverage 2",
  "Ready to start a project",
  "Pricing and availability",
  "Something else",
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#fff",
  border: "1px solid var(--rule)",
  borderRadius: "6px",
  padding: "12px 14px",
  fontFamily: "inherit",
  fontSize: "0.95em",
  color: "var(--ink)",
  outline: "none",
  transition: "border-color 0.15s",
};

export default function ContactForm() {
  const [fields, setFields] = useState<Field>(empty);
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  function set(k: keyof Field, v: string) {
    setFields((f) => ({ ...f, [k]: v }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function focusStyle(name: string): React.CSSProperties {
    return focused === name
      ? { ...inputStyle, borderColor: "var(--blue)", boxShadow: "0 0 0 3px var(--blue-soft)" }
      : inputStyle;
  }

  if (submitted) {
    return (
      <div
        className="flex flex-col items-start gap-4 py-12"
        style={{ borderTop: "1px solid var(--rule)" }}
      >
        <div className="flex items-center gap-3">
          <span
            className="inline-flex items-center justify-center w-8 h-8 rounded-full"
            style={{ background: "var(--positive)", color: "#fff", fontSize: "1em" }}
          >
            ✓
          </span>
          <p className="font-sans font-bold" style={{ color: "var(--ink)", fontSize: "1.1em" }}>
            Message received
          </p>
        </div>
        <p className="font-sans" style={{ color: "var(--gray-2)", lineHeight: 1.7, maxWidth: "480px" }}>
          Thanks, {fields.name.split(" ")[0] || "there"}. We&apos;ll be in touch at{" "}
          <span style={{ color: "var(--ink)" }}>{fields.email}</span> within one business day.
        </p>
        <button
          onClick={() => { setFields(empty); setSubmitted(false); }}
          className="font-mono"
          style={{ color: "var(--blue)", fontSize: "0.85em", background: "none", border: "none", cursor: "pointer", padding: 0, marginTop: "8px" }}
        >
          Send another message →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-10"
        style={{ borderTop: "1px solid var(--rule)" }}
      >
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="cf-name"
            className="font-mono uppercase tracking-widest"
            style={{ color: "var(--gray-1)", fontSize: "0.7em" }}
          >
            Name
          </label>
          <input
            id="cf-name"
            type="text"
            required
            placeholder="Your full name"
            value={fields.name}
            onChange={(e) => set("name", e.target.value)}
            onFocus={() => setFocused("name")}
            onBlur={() => setFocused(null)}
            style={focusStyle("name")}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="cf-email"
            className="font-mono uppercase tracking-widest"
            style={{ color: "var(--gray-1)", fontSize: "0.7em" }}
          >
            Email
          </label>
          <input
            id="cf-email"
            type="email"
            required
            placeholder="you@company.com"
            value={fields.email}
            onChange={(e) => set("email", e.target.value)}
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused(null)}
            style={focusStyle("email")}
          />
        </div>

        {/* Topic */}
        <div className="flex flex-col gap-2 md:col-span-2">
          <label
            htmlFor="cf-topic"
            className="font-mono uppercase tracking-widest"
            style={{ color: "var(--gray-1)", fontSize: "0.7em" }}
          >
            Topic
          </label>
          <select
            id="cf-topic"
            required
            value={fields.topic}
            onChange={(e) => set("topic", e.target.value)}
            onFocus={() => setFocused("topic")}
            onBlur={() => setFocused(null)}
            style={{
              ...focusStyle("topic"),
              color: fields.topic ? "var(--ink)" : "var(--gray-1)",
              appearance: "none",
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2394A3B8' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 14px center",
              paddingRight: "40px",
            }}
          >
            <option value="" disabled>Select a topic…</option>
            {topics.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2 md:col-span-2">
          <label
            htmlFor="cf-message"
            className="font-mono uppercase tracking-widest"
            style={{ color: "var(--gray-1)", fontSize: "0.7em" }}
          >
            Message
          </label>
          <textarea
            id="cf-message"
            required
            rows={5}
            placeholder="Tell us what you're working on…"
            value={fields.message}
            onChange={(e) => set("message", e.target.value)}
            onFocus={() => setFocused("message")}
            onBlur={() => setFocused(null)}
            style={{ ...focusStyle("message"), resize: "vertical" }}
          />
        </div>

        {/* Submit */}
        <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
          <button
            type="submit"
            className="font-mono font-medium px-6 py-3 rounded"
            style={{ background: "var(--ink)", color: "var(--paper)", fontSize: "0.85em", cursor: "pointer", border: "none" }}
          >
            Send message
          </button>
          <p className="font-sans" style={{ color: "var(--gray-1)", fontSize: "0.8em" }}>
            We reply within one business day.
          </p>
        </div>
      </div>
    </form>
  );
}

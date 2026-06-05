import { useState, type ReactNode } from "react";

// Copyable command chip. Command is always LTR + bidi-isolated.
export function CodeChip({ children }: { children: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`העתקת הפקודה ${children}`}
      className="group inline-flex items-center gap-2 rounded-md border border-cloud-light bg-white/95 px-3 py-1.5 text-sm shadow-sm transition hover:border-bookcloth hover:bg-ivory-light"
    >
      <code className="code text-slate-dark">{children}</code>
      <span className="text-[11px] font-semibold text-muted-2 opacity-70 group-hover:text-bookcloth group-hover:opacity-100">
        {copied ? "הועתק" : "העתק"}
      </span>
    </button>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-bookcloth">
      {children}
    </span>
  );
}

export function Section({
  id,
  children,
  className = "",
  dark = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-20 px-5 py-24 md:py-32 ${
        dark ? "bg-slate-dark text-ivory-light" : ""
      } ${className}`}
    >
      <div className="mx-auto w-full max-w-layout">{children}</div>
    </section>
  );
}

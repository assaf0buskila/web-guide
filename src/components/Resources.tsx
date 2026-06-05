import { Section, Eyebrow } from "./ui";
import Reveal from "./Reveal";
import { RESOURCES } from "../data/content";

export default function Resources() {
  return (
    <Section id="resources">
      <Reveal>
        <Eyebrow>משאבים</Eyebrow>
        <h2 className="text-3xl text-slate-dark md:text-5xl">קחו את זה הלאה</h2>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {RESOURCES.map((r) => (
          <a
            key={r.href}
            href={r.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center justify-between rounded-2xl border p-6 transition ${
              r.primary
                ? "border-slate-dark bg-slate-dark text-ivory-light hover:bg-slate-medium"
                : "border-cloud-light bg-white text-slate-dark hover:border-bookcloth"
            }`}
          >
            <span className="text-lg font-semibold">{r.label}</span>
            <span className="ltr text-xl transition group-hover:-translate-x-1">←</span>
          </a>
        ))}
      </div>
    </Section>
  );
}

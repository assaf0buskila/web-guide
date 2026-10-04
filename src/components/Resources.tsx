import { Section, Eyebrow } from "./ui";
import Reveal from "./Reveal";
import { LEARN_CTA, RESOURCES } from "../data/content";

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

      <Reveal>
        <div className="mt-12 flex flex-col items-start gap-5 rounded-3xl border border-bookcloth bg-white p-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-reading">
            <h3 className="text-2xl font-bold text-slate-dark md:text-3xl">{LEARN_CTA.title}</h3>
            <p className="mt-3 text-lg text-text-soft">{LEARN_CTA.body}</p>
          </div>
          <a
            href={LEARN_CTA.href}
            target="_blank"
            rel="noopener"
            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-bookcloth px-6 py-3 text-lg font-semibold text-ivory-light transition hover:bg-slate-dark"
          >
            {LEARN_CTA.label}
            <span className="ltr transition group-hover:-translate-x-1">←</span>
          </a>
        </div>
      </Reveal>
    </Section>
  );
}

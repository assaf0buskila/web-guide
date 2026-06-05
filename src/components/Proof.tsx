import { Section, Eyebrow } from "./ui";
import Reveal, { Stagger, StaggerItem } from "./Reveal";

const SCORES = [
  { label: "Performance", v: 98 },
  { label: "Accessibility", v: 100 },
  { label: "Best Practices", v: 100 },
  { label: "SEO", v: 100 },
];

const CLAIMS = ["נבנה בדיוק בתהליך הזה", "מוכן ל-Vercel", "קריא לבני אדם ולסוכני AI"];

export default function Proof() {
  return (
    <Section id="proof" dark className="grain overflow-hidden">
      <div className="relative z-10">
        <Reveal>
          <Eyebrow>התוצאה</Eyebrow>
          <h2 className="max-w-3xl text-3xl md:text-5xl">העמוד הזה הוא ההוכחה</h2>
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {SCORES.map((s) => (
            <StaggerItem
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
            >
              <div className="ltr text-5xl font-black text-bookcloth">{s.v}</div>
              <div className="ltr mt-2 text-sm text-cloud-light">{s.label}</div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-8 flex flex-wrap gap-3">
          {CLAIMS.map((c) => (
            <span key={c} className="rounded-full border border-white/15 px-4 py-2 text-sm text-ivory-light">
              {c}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}

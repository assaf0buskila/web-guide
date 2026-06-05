import { Section, Eyebrow } from "./ui";
import Reveal, { Stagger, StaggerItem } from "./Reveal";
import { SKILLS } from "../data/content";

export default function LoadSkills() {
  return (
    <Section id="skills">
      <div className="grid items-start gap-10 md:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <Eyebrow>המהלך הנסתר</Eyebrow>
          <h2 className="text-3xl text-slate-dark md:text-5xl">קודם טוענים חשיבה. אחר כך מייצרים.</h2>
          <p className="mt-5 text-lg text-text-soft">
            לפני שמבקשים מ-<span className="ltr">AI</span> לבנות אתר, מלמדים אותו לחשוב כמו מעצב
            מוצר: <span className="ltr">UI/UX</span>, נגישות, ביצועים ו-
            <span className="ltr">SEO</span>. רק כשהמסגרת המקצועית קיימת - הפלט הופך לאיכותי באמת.
          </p>
        </Reveal>

        <Stagger className="grid gap-3 sm:grid-cols-2">
          {SKILLS.map((s) => (
            <StaggerItem
              key={s.tag}
              className="rounded-xl border border-cloud-light bg-white p-4 shadow-sm transition hover:border-bookcloth/60 hover:bg-ivory-light"
            >
              <div className="flex items-center gap-4">
                <span className="ltr rounded-md bg-slate-dark px-2.5 py-1 text-xs font-bold text-ivory-light">
                  {s.tag}
                </span>
                <span className="text-text-soft">{s.label}</span>
              </div>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex text-sm font-semibold text-bookcloth hover:text-slate-dark"
              >
                לפתוח את הסקיל בריפו
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}

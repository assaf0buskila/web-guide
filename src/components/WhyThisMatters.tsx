import { Section, Eyebrow } from "./ui";
import Reveal, { Stagger, StaggerItem } from "./Reveal";
import { WHY_POINTS } from "../data/content";

export default function WhyThisMatters() {
  return (
    <Section id="why" className="bg-bg-soft">
      <Reveal>
        <Eyebrow>למה זה חשוב</Eyebrow>
        <h2 className="max-w-3xl text-3xl text-slate-dark md:text-5xl">
          כל אחד יכול לבקש מ-<span className="ltr">AI</span> אתר. מעטים מקבלים עמוד שבאמת עובד.
        </h2>
        <p className="mt-5 max-w-reading text-lg text-text-soft">
          עמוד שנראה טוב, נטען מהר, מסביר ברור, נגיש, מדורג בגוגל ומוכן לעלות ל-
          <span className="ltr">Vercel</span>. ההבדל הוא לא הכלי, אלא התהליך.
        </p>
      </Reveal>

      <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
        {WHY_POINTS.map((p, i) => (
          <StaggerItem
            key={p.title}
            className="rounded-2xl border border-cloud-light bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-bookcloth/50 hover:shadow-xl hover:shadow-slate-dark/5"
          >
            <div className="mb-4 text-2xl font-bold text-bookcloth">0{i + 1}</div>
            <h3 className="mb-2 text-xl text-slate-dark">{p.title}</h3>
            <p className="text-text-soft">{p.body}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

import { Section, Eyebrow } from "./ui";
import Reveal, { Stagger, StaggerItem } from "./Reveal";

const PRINCIPLES = [
  "קצב פריסה ומרווחים - איך הדף נושם",
  "סדר הסקשנים ומיקום ה-CTA",
  "טיפוגרפיה והיררכיה ויזואלית",
  "פרטי אמון: הוכחה, מספרים, לוגואים",
];

const REFERENCES = [
  "פלטת צבע מותאמת מתוך ref/color palette.png",
  "אפקט בועות תלת-ממד מתוך ref/Ball affect",
  "kevingoyal.vercel.app",
  "www.assafweb.com",
];

export default function ReferenceBoard() {
  return (
    <Section id="references" className="bg-bg-soft">
      <Reveal>
        <Eyebrow>רפרנס תחילה</Eyebrow>
        <h2 className="max-w-3xl text-3xl text-slate-dark md:text-5xl">
          לא מתחילים מדף ריק. מתחילים מרפרנסים.
        </h2>
        <p className="mt-5 max-w-reading text-lg text-text-soft">
          אוספים עמודים שכבר פותרים בעיה דומה, מפרקים אותם לעקרונות ולא מעתיקים פיקסלים.
          כך נותנים ל-<span className="ltr">Claude</span> ול-<span className="ltr">GPT</span> אוצר
          מילים ויזואלי לעבוד מולו.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Stagger className="grid gap-3">
          {PRINCIPLES.map((p) => (
            <StaggerItem
              key={p}
              className="rounded-xl border border-cloud-light bg-white p-4 text-text-soft shadow-sm"
            >
              <span className="me-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-bookcloth text-xs font-bold text-slate-dark">
                +
              </span>
              {p}
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="rounded-2xl border border-cloud-light bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg text-slate-dark">הרפרנסים של הפרויקט הזה</h3>
          <ul className="space-y-3 text-sm text-text-soft">
            {REFERENCES.map((item) => (
              <li key={item} className={item.includes(".") ? "ltr text-start" : ""}>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}

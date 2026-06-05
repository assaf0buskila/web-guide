import type { ReactNode } from "react";
import { Section, Eyebrow, CodeChip } from "./ui";
import Reveal from "./Reveal";

function Success({ children }: { children: ReactNode }) {
  return (
    <p className="mt-3 text-sm text-cloud-dark">
      <span className="font-bold text-bookcloth">מה אמור לקרות עכשיו:</span> {children}
    </p>
  );
}

function DeployPanel({
  label,
  title,
  children,
  featured = false,
}: {
  label: string;
  title: string;
  children: ReactNode;
  featured?: boolean;
}) {
  return (
    <Reveal
      className={`rounded-[1.5rem] border p-6 shadow-sm ${
        featured
          ? "border-bookcloth/45 bg-[#F7EFE9]"
          : "border-cloud-light/80 bg-[#F7EFE9]"
      }`}
    >
      <span
        className={`inline-flex rounded-full px-3 py-1 text-sm font-bold ${
          featured ? "bg-bookcloth text-slate-dark" : "bg-slate-dark text-ivory-light"
        }`}
      >
        {label}
      </span>
      <h3 className="mt-5 text-2xl text-slate-dark">{title}</h3>
      <div className="mt-5 text-text-soft">{children}</div>
    </Reveal>
  );
}

function DashboardCue({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-[1.25rem] border border-cloud-light/80 bg-[#F7EFE9] p-5 shadow-sm">
      <div className="flex items-center justify-between border-b border-cloud-light pb-3">
        <span className="ltr text-xs font-bold text-slate-dark">Vercel</span>
        <span className="h-2 w-24 rounded-full bg-slate-dark" />
      </div>
      <div className="pt-5">
        <div className="ltr text-lg font-black text-slate-dark">{title}</div>
        <p className="mt-2 text-sm text-text-soft">{body}</p>
      </div>
    </div>
  );
}

export default function VercelDeployGuide() {
  return (
    <Section id="deploy" className="bg-[#F4EFE8]">
      <div className="rounded-[2rem] border border-cloud-light/80 bg-[#F4EFE8] p-5 md:p-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <Eyebrow>פרסום</Eyebrow>
            <h2 className="max-w-3xl text-3xl text-slate-dark md:text-5xl">
              איך מעלים את האתר שלך ל-<span className="ltr">Vercel</span>
            </h2>
            <p className="mt-5 max-w-reading text-lg text-text-soft">
              זה החלק שמוריד את הרעיון לקרקע: בונים, בודקים, מחברים ל-
              <span className="ltr">GitHub</span>, ואז נותנים ל-<span className="ltr">Vercel</span>
              לפרסם גרסה חיה בכל push.
            </p>
          </Reveal>

          <Reveal className="overflow-hidden rounded-[1.75rem] border border-cloud-light/80 bg-[#F7EFE9] p-2 shadow-2xl shadow-slate-dark/10">
            <img
              src="/images/deploy-flow.png"
              alt="תרשים ויזואלי של מעבר מפרויקט מקומי דרך GitHub ו-Vercel אל אתר חי"
              className="aspect-video w-full rounded-[1.35rem] object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>

        <Reveal className="mt-10 rounded-[1.5rem] border border-cloud-light/80 bg-[#F7EFE9] p-6 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <span className="rounded-full bg-slate-dark px-3 py-1 text-sm font-bold text-ivory-light">
                שלב 0
              </span>
              <h3 className="mt-4 text-2xl text-slate-dark">לפני שמתחילים</h3>
            </div>
            <div>
              <ul className="grid gap-3 text-text-soft md:grid-cols-3">
                <li>חשבון <span className="ltr">GitHub</span> חינמי.</li>
                <li>חשבון <span className="ltr">Vercel</span> חינמי דרך GitHub.</li>
                <li><span className="ltr">Node.js</span> ו-<span className="ltr">Git</span> מותקנים.</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <CodeChip>node -v</CodeChip>
                <CodeChip>git -v</CodeChip>
              </div>
              <Success>שתי הפקודות מדפיסות מספרי גרסה.</Success>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <DeployPanel label="מסלול A: הכי קל" title="בלי ידע עמוק ב-Git" featured>
            <ol className="space-y-5">
              <li>
                <div className="mb-2 font-semibold text-slate-dark">בונים גרסת production:</div>
                <div className="flex flex-wrap gap-2">
                  <CodeChip>npm install</CodeChip>
                  <CodeChip>npm run build</CodeChip>
                </div>
                <Success>נוצרת תיקיית <span className="ltr">dist/</span>.</Success>
              </li>
              <li>
                גוררים את תיקיית <span className="ltr">dist</span> ל-Vercel, או משתמשים ב-CLI:
                <div className="mt-2 flex flex-wrap gap-2">
                  <CodeChip>npm i -g vercel</CodeChip>
                  <CodeChip>vercel</CodeChip>
                </div>
                <Success>מקבלים כתובת חיה בסיומת <span className="ltr">*.vercel.app</span>.</Success>
              </li>
            </ol>
          </DeployPanel>

          <DeployPanel label="מסלול B: מומלץ לפרויקט אמיתי" title="GitHub ואז פריסה אוטומטית">
            <ol className="space-y-4">
              <li>מוודאים ש-<CodeChip>npm run build</CodeChip> עובר מקומית.</li>
              <li>
                דוחפים את הקוד לריפו:
                <div className="mt-2 flex flex-wrap gap-2">
                  <CodeChip>git init</CodeChip>
                  <CodeChip>git add .</CodeChip>
                  <CodeChip>git commit -m "Initial landing page"</CodeChip>
                  <CodeChip>git push -u origin main</CodeChip>
                </div>
              </li>
              <li>ב-Vercel בוחרים <span className="ltr">Add New - Project</span> ומייבאים את ה-repo.</li>
              <li>מאשרים: <span className="ltr">Framework = Vite</span>, build = <span className="ltr">npm run build</span>, output = <span className="ltr">dist</span>.</li>
              <li>לוחצים <span className="ltr">Deploy</span>. מכאן כל push מפרסם מחדש.</li>
            </ol>
          </DeployPanel>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <DashboardCue title="Import" body="בחרו את הריפו הנכון מתוך GitHub." />
          <DashboardCue title="Build Settings" body="Vite, npm run build, dist." />
          <DashboardCue title="Deploy" body="אחרי שה-build ירוק, פותחים את הכתובת החיה." />
        </div>

        <Reveal className="mt-8 rounded-[1.5rem] border-2 border-error/35 bg-[#F7EFE9] p-6">
          <h3 className="text-2xl text-error">תקלות נפוצות</h3>
          <ul className="mt-4 grid gap-3 text-text-soft sm:grid-cols-2">
            <li>פקודת build או תיקיית output שגויות. בפרויקט הזה output צריך להיות <span className="ltr">dist</span>.</li>
            <li>שכחתם להריץ <span className="ltr">npm install</span> לפני build.</li>
            <li>משתנה הסביבה <span className="ltr">VITE_GA_ID</span> לא הוגדר. זה בסדר אם אין Analytics.</li>
            <li>גרסת <span className="ltr">Node</span> ישנה מדי.</li>
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}

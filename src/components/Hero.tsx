import { motion } from "framer-motion";
import { GridMesh, Sunburst, Triangle, WarmGlow } from "./Motifs";

const EASE = [0.22, 1, 0.36, 1] as const;

function HeroStage() {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0, scale: 0.96, rotateX: 8 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      transition={{ duration: 0.8, ease: EASE, delay: 0.18 }}
      className="relative min-h-[420px] [perspective:1200px]"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-cloud-light/70 bg-white shadow-2xl shadow-slate-dark/10 [transform:rotateY(-10deg)_rotateX(6deg)]">
        <img
          src="/images/hero-build-stage.png"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-dark/10 via-transparent to-white/5" />
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute start-2 top-10 rounded-2xl border border-cloud-light bg-slate-dark px-5 py-4 text-ivory-light shadow-2xl shadow-slate-dark/20"
      >
        <div className="ltr text-xs text-cloud-light">prompt.md</div>
        <div className="mt-2 text-sm font-semibold">טוענים חשיבה לפני קוד</div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="absolute bottom-8 start-12 rounded-2xl border border-bookcloth/30 bg-white px-5 py-4 shadow-xl shadow-slate-dark/10"
      >
        <div className="flex items-center gap-3">
          <img src="/logos/claude.svg" alt="" className="h-7 w-7" />
          <span className="font-semibold text-slate-dark">Claude</span>
        </div>
        <div className="mt-1 text-sm text-muted">מבנה, קומפוננטות, תנועה</div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute bottom-16 end-6 rounded-2xl border border-cloud-light bg-white px-5 py-4 shadow-xl shadow-slate-dark/10"
      >
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-white ring-1 ring-cloud-light">
            <img src="/images/gpt.jpg" alt="" className="h-5 w-5 object-contain" />
          </span>
          <span className="font-semibold text-slate-dark">GPT</span>
        </div>
        <div className="mt-1 text-sm text-muted">ניסוח, ביקורת, חדות</div>
      </motion.div>

      <Triangle className="bottom-2 end-28 h-16 w-16 text-slate-dark/10" />
    </motion.div>
  );
}

export default function Hero() {
  return (
    <header className="grain relative flex min-h-[92vh] items-center overflow-hidden px-5 pt-24">
      <div className="absolute inset-0 text-cloud-light/40" aria-hidden>
        <GridMesh className="text-cloud-light/30" />
      </div>
      <Sunburst className="-left-24 top-10 h-[420px] w-[420px] text-manilla/60" />
      <WarmGlow className="-right-32 bottom-0 h-[480px] w-[480px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-layout items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-5 inline-block rounded-full border border-cloud-light bg-white/75 px-4 py-1.5 text-sm font-semibold text-slate-light shadow-sm backdrop-blur"
          >
            מדריך ויזואלי בעברית
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.05 }}
            className="max-w-4xl text-5xl leading-[1.08] text-slate-dark md:text-7xl"
          >
            מ-<span className="ltr text-bookcloth">Prompt</span> ראשון
            <br /> ועד <span className="ltr text-bookcloth">Landing Page</span> חי ב-
            <span className="ltr">Vercel</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.12 }}
            className="mt-6 max-w-reading text-lg text-text-soft md:text-xl"
          >
            לא עוד עמוד שנראה כאילו יצא מתבנית של AI. זה מדריך שמראה איך בונים עמוד נחיתה
            עם טעם, רפרנסים, ביקורת, קוד אמיתי ופריסה נקייה ל-<span className="ltr">Vercel</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#path"
              className="rounded-lg bg-slate-dark px-6 py-3 font-semibold text-ivory-light shadow-lg shadow-slate-dark/10 transition hover:bg-slate-medium"
            >
              להתחיל את המסלול
            </a>
            <a
              href="#deploy"
              className="rounded-lg border border-slate-dark bg-white/60 px-6 py-3 font-semibold text-slate-dark transition hover:bg-slate-dark hover:text-ivory-light"
            >
              איך מעלים ל-Vercel
            </a>
          </motion.div>

          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 flex items-center gap-2 text-sm text-muted-2"
          >
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              v
            </motion.span>
            גללו למטה
          </motion.div>
        </div>

        <div className="hidden lg:block">
          <HeroStage />
        </div>
      </div>
    </header>
  );
}

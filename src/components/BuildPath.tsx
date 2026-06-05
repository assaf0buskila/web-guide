import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section, Eyebrow } from "./ui";
import Reveal from "./Reveal";
import { BUILD_STEPS } from "../data/content";

const EASE = [0.22, 1, 0.36, 1] as const;

function Step({ step, index }: { step: (typeof BUILD_STEPS)[number]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: EASE }}
      className="grid gap-4 border-t border-cloud-light py-10 md:grid-cols-[auto_1fr]"
    >
      <div className="flex items-baseline gap-4">
        <span className="text-2xl font-black text-bookcloth">0{index + 1}</span>
        <span className="ltr text-sm font-semibold uppercase tracking-widest text-muted-2">
          {step.k}
        </span>
      </div>
      <div>
        <h3 className="text-2xl text-slate-dark">{step.title}</h3>
        <p className="mt-2 max-w-reading text-text-soft">{step.body}</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-cloud-light bg-white p-4 shadow-sm">
            <div className="mb-1 text-xs font-bold text-bookcloth">מה מבקשים מה-AI</div>
            <p className="text-sm text-text-soft">{step.ask}</p>
          </div>
          <div className="rounded-xl border border-cloud-light bg-white p-4 shadow-sm">
            <div className="mb-1 text-xs font-bold text-focus">מה בודקים כבני אדם</div>
            <p className="text-sm text-text-soft">{step.check}</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function BuildPath() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const railHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Section id="path" className="bg-bg-soft">
      <Reveal>
        <Eyebrow>המסלול</Eyebrow>
        <h2 className="max-w-3xl text-3xl text-slate-dark md:text-5xl">
          שבעה צעדים מ-<span className="ltr">Plan</span> ועד <span className="ltr">Ship</span>
        </h2>
        <p className="mt-5 max-w-reading text-lg text-text-soft">
          כל צעד מלמד רעיון אחד חד - מה מבקשים מה-<span className="ltr">AI</span>, ומה בודקים בעצמנו.
        </p>
      </Reveal>

      <div ref={ref} className="relative mt-12">
        <div className="absolute inset-y-0 end-0 w-1 bg-cloud-light/60" aria-hidden>
          <motion.div style={{ height: railHeight }} className="w-full bg-bookcloth" />
        </div>
        <div className="pe-6">
          {BUILD_STEPS.map((s, i) => (
            <Step key={s.k} step={s} index={i} />
          ))}
        </div>
      </div>
    </Section>
  );
}

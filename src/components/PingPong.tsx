import { motion } from "framer-motion";
import { Section, Eyebrow } from "./ui";
import Reveal from "./Reveal";
import { PINGPONG } from "../data/content";

const EASE = [0.22, 1, 0.36, 1] as const;

function Avatar({ side }: { side: "claude" | "gpt" }) {
  const src = side === "claude" ? "/logos/claude.svg" : "/images/gpt.jpg";
  return (
    <span
      className={`grid h-11 w-11 shrink-0 place-items-center rounded-full ring-1 ${
        side === "claude" ? "bg-bookcloth/15 ring-bookcloth/30" : "bg-white ring-cloud-light"
      }`}
    >
      <img
        src={src}
        alt={side === "claude" ? "Claude" : "GPT"}
        className={side === "claude" ? "h-7 w-7 object-contain" : "h-5 w-5 rounded-full object-contain"}
      />
    </span>
  );
}

function ChatMessage({ item, index }: { item: (typeof PINGPONG)[number]; index: number }) {
  const isClaude = item.side === "claude";

  return (
    <motion.li
      initial={{ opacity: 0, y: 26, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: EASE, delay: Math.min(index * 0.025, 0.12) }}
      className={`flex ${isClaude ? "justify-start" : "justify-end"}`}
    >
      <div className={`flex max-w-[88%] items-start gap-3 md:max-w-[74%] ${isClaude ? "flex-row" : "flex-row-reverse"}`}>
        <Avatar side={item.side} />
        <div>
          <div className={`mb-2 flex items-center gap-2 ${isClaude ? "justify-start" : "justify-end"}`}>
            <span className="ltr text-xs font-bold text-muted">{item.name}</span>
            <span className="rounded-full border border-cloud-light bg-white px-2 py-0.5 text-xs text-muted">
              {item.phase}
            </span>
          </div>

          <div
            className={`rounded-2xl border p-5 shadow-sm ${
              isClaude
                ? "rounded-tr-sm border-bookcloth/30 bg-bookcloth/10 shadow-bookcloth/5"
                : "rounded-tl-sm border-cloud-light bg-white shadow-slate-dark/5"
            }`}
          >
            <p className="text-text-soft">{item.text}</p>
            <div className="mt-4 rounded-xl border border-cloud-light/70 bg-ivory-light p-3">
              <div className="ltr mb-1 text-xs font-bold uppercase tracking-widest text-bookcloth">
                {item.chip}
              </div>
              <p className="text-sm text-muted">{item.result}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.li>
  );
}

export default function PingPong() {
  return (
    <Section id="pingpong" className="overflow-hidden">
      <div className="grid items-start gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <Reveal className="lg:sticky lg:top-24">
          <Eyebrow>פינג-פונג</Eyebrow>
          <h2 className="max-w-3xl text-3xl text-slate-dark md:text-5xl">
            השיחה מתגלגלת, והעמוד נבנה תוך כדי
          </h2>
          <p className="mt-5 max-w-reading text-lg text-text-soft">
            זה לא Prompt אחד שנורה לאוויר. זה תהליך עבודה: Claude מייצר כיוון, GPT מקשה,
            אנחנו בוחרים מה נכון, ואז חוזרים לקוד עם החלטה חדה יותר.
          </p>
          <div className="mt-6 rounded-2xl border border-cloud-light bg-bg-soft p-5">
            <div className="text-sm font-bold text-slate-dark">איך לקרוא את השיחה</div>
            <p className="mt-2 text-sm text-text-soft">
              כל הודעה מציגה רעיון, וכל כרטיס קטן מתחתיה מציג את השינוי שנולד ממנו בעמוד.
              ככה רואים את המחשבה הופכת לממשק.
            </p>
          </div>
        </Reveal>

        <Reveal className="rounded-[1.75rem] border border-cloud-light bg-bg-soft p-3 shadow-2xl shadow-slate-dark/10">
          <div className="rounded-[1.35rem] border border-cloud-light bg-ivory-light">
            <div className="flex items-center justify-between border-b border-cloud-light px-5 py-4">
              <div>
                <div className="text-sm font-bold text-slate-dark">Claude x GPT</div>
                <div className="text-xs text-muted">שיחה חיה על מבנה, טעם, קוד ופריסה</div>
              </div>
              <div className="flex -space-x-2 space-x-reverse">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-bookcloth/15 ring-1 ring-bookcloth/30">
                  <img src="/logos/claude.svg" alt="" className="h-5 w-5" />
                </span>
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white ring-1 ring-cloud-light">
                  <img src="/images/gpt.jpg" alt="" className="h-4 w-4 rounded-full object-contain" />
                </span>
              </div>
            </div>

            <ol className="space-y-7 p-4 md:p-6">
              {PINGPONG.map((item, index) => (
                <ChatMessage key={`${item.name}-${item.chip}`} item={item} index={index} />
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

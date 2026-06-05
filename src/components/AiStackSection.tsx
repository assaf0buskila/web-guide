import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { Eyebrow } from "./ui";
import { WarmGlow, GridMesh, Triangle } from "./Motifs";
import { useReducedMotion, useIsMobile } from "../lib/useReducedMotion";

const AiStack3D = lazy(() => import("./AiStack3D"));

const STACK_HEADING = "MY TECH STACK";

function hasWebGL(): boolean {
  try {
    const c = document.createElement("canvas");
    return !!(window.WebGLRenderingContext && (c.getContext("webgl") || c.getContext("experimental-webgl")));
  } catch {
    return false;
  }
}

function StaticCluster() {
  const marks = [
    { src: "/images/gpt-dark.jpg", x: "16%", y: "23%", s: 102 },
    { src: "/images/gpt.jpg", x: "58%", y: "47%", s: 108 },
    { src: "/images/claude.jpg", x: "39%", y: "25%", s: 132 },
    { src: "/images/claude-light.jpg", x: "68%", y: "18%", s: 88 },
  ];
  return (
    <div aria-hidden className="relative mx-auto h-[420px] w-full max-w-2xl">
      {["#191919", "#D4A27F", "#EBDBBC"].map((c, i) => (
        <span
          key={c}
          className="absolute rounded-full shadow-2xl ring-1 ring-white/10"
          style={{
            background: `radial-gradient(circle at 35% 30%, #ffffff66, ${c})`,
            width: 120 - i * 14,
            height: 120 - i * 14,
            insetInlineStart: `${20 + i * 22}%`,
            insetBlockStart: `${30 + i * 16}%`,
          }}
        />
      ))}
      {marks.map((m, i) => (
        <span
          key={i}
          className="absolute grid place-items-center overflow-hidden rounded-full bg-white object-cover shadow-2xl ring-1 ring-white/20"
          style={{ insetInlineStart: m.x, insetBlockStart: m.y, width: m.s, height: m.s }}
        >
          <img src={m.src} alt="" className="h-full w-full object-cover" />
        </span>
      ))}
    </div>
  );
}

export default function AiStackSection() {
  const reduced = useReducedMotion();
  const mobile = useIsMobile();
  const [visible, setVisible] = useState(false);
  const [webgl, setWebgl] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => setWebgl(hasWebGL()), []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { rootMargin: "100px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const useLive = webgl && !reduced && !mobile;

  return (
    <section id="stack" className="grain relative overflow-hidden bg-slate-dark px-5 py-24 text-ivory-light md:py-32">
      <div className="absolute inset-0 text-white/5" aria-hidden>
        <GridMesh />
      </div>
      <WarmGlow className="-right-20 top-10 h-[420px] w-[420px]" />
      <Triangle className="bottom-8 left-10 h-24 w-24 text-white/5" />

      <div className="relative z-10 mx-auto grid w-full max-w-layout items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="text-start">
          <Eyebrow>הסטאק שבנה את העמוד</Eyebrow>
          <h2 className="ltr text-5xl font-black tracking-tight text-ivory-light md:text-7xl">
            {STACK_HEADING}
          </h2>
          <p className="mt-5 max-w-reading text-cloud-light">
            <span className="ltr">Claude</span> ו-<span className="ltr">GPT</span> הם לא קסם.
            הם חומר עבודה. כשמחברים אותם לרפרנסים, ביקורת אנושית וקוד אמיתי, מקבלים עמוד
            שמרגיש בנוי ולא מחולל.
          </p>
          <p className="mt-4 max-w-reading text-sm text-cloud-light/80">
            הקלאסטר מציג את ארבעת סוגי הבועות מהרפרנס: GPT כהה, GPT בהיר, Claude כתום ו-Claude בהיר.
            במובייל מוצגת גרסה סטטית כדי שהחוויה תישאר מהירה ונגישה.
          </p>
        </div>

        <div ref={ref} className="h-[440px] w-full">
          {useLive ? (
            visible ? (
              <Suspense fallback={<StaticCluster />}>
                <AiStack3D />
              </Suspense>
            ) : (
              <StaticCluster />
            )
          ) : (
            <StaticCluster />
          )}
        </div>
      </div>
    </section>
  );
}

---
name: ux-critique
description: A render-inspect-iterate quality gate for HyperFrames reels — render a few key frames, actually look at them, score the composition against premium/anti-AI rules, and return a prioritized fix list. Apply this skill whenever someone wants a finished reel reviewed before it ships. ALWAYS trigger when the user says "review this reel", "critique this composition", "is this good enough to post", "grade this", "what's wrong with this video", "why does this look off / cheap / amateur", "QA this before render", "give me feedback on the motion/design", or after you finish authoring a composition and want to verify quality rather than just verify it lints. This is the aesthetic/narrative QA layer; `npx hyperframes lint/validate` only checks invariants, not whether the reel is any good.
---

# UX Critique — render, look, score, fix

Linting proves a composition is *valid*. It says nothing about whether it's *good*. The single biggest quality lever borrowed from professional visual pipelines is the **render → inspect → iterate loop**: don't critique from the code, capture real frames and look at them, because timing and layering problems only show up in the rendered pixels.

→ The rubric tokens come from `cinematic-design` (timing scale, easing vocabulary, type scale, anti-AI gate).
→ Fixes route to: `scene-transitions`, `motion-presets`, `hyperframes-captions`, `hyperframes-emitter-patterns`.
→ Render only with `hyperframes@0.6.44` (newer global versions can emit empty frames).

## Workflow

### 1. Capture key frames (don't critique from source)
Render a fast, low-cost pass and pull stills at the moments that matter — the first frame of every scene, plus each scene's mid-point and its hook beat.

```bash
# draft render of the whole reel
npx hyperframes@0.6.44 render . --workers 1 --quality draft --output _critique.mp4
# capture specific seconds as PNGs — snapshot has NO --output flag; it ALWAYS writes
# to ./snapshots/ : one PNG per timestamp (frame-NN-at-<t>s.png) PLUS a contact-sheet.jpg
# (grid view) and, when GEMINI_API_KEY is set, descriptions.md — a vision pass that
# flags black/blank/loading frames automatically. Read those three first.
npx hyperframes@0.6.44 snapshot . --at 0,2.0,4.0,6.0
# optional: override the vision question to check a specific invariant
npx hyperframes@0.6.44 snapshot . --at 0,2.0,4.0,6.0 --describe "Is the hook legible and is any frame black?"
# layout audit (best-effort): inspect seeks the timeline and flags text overflowing its
# container or off-canvas. It can error out ("Cannot read … 'totalDuration'") on some
# compositions — treat it as a bonus, not the primary signal; the snapshots are the source of truth.
npx hyperframes@0.6.44 inspect . --at 0,2.0,4.0,6.0 --json
```

Look at the actual images — open `snapshots/contact-sheet.jpg` for the overview and the individual PNGs for detail, and read `descriptions.md` as a second opinion (but trust your own eyes over the vision model: it under-reports dim shaders and over-calls very dark frames "black"). If you cannot view rendered frames in this environment, say so explicitly and critique from `descriptions.md` + the static preview HTML instead — but flag that timing/layering judgments are lower-confidence.

**If frame 0 actually is black/empty, name the cause — there are two usual ones, and they route to different fixes** (see `cinematic-design` §7): (a) a **delayed `.from()`** — a tween positioned at t>0 with default `immediateRender: true` pre-applies its `opacity: 0` from-state on frame 0; (b) a **position-0 scene gate** — a scene held at `opacity: 0` in CSS and revealed via `tl.set("#scene", { opacity: 1 }, 0)`, where the zero-duration set doesn't apply at the exact seek t=0. Distinguish them: if only the *hero element* is missing while the rest of the scene shows, it's (a); if the *whole first scene* is dark, it's (b). Fix (a) by keeping opacity visible and revealing via transform/blur or starting at position 0; fix (b) by lighting the first scene via CSS / the `class="clip"`+`data-start` system instead of a timeline set.

### 2. Score against the rubric
Grade each dimension 1–5 (5 = ships as-is). Be specific and cite the frame/second.

| Dimension | What to look for | Common failure |
| --- | --- | --- |
| **Hook strength** | first 1s stops the scroll — one bold idea, instantly legible | slow open, buried lede, nothing grabs by frame 0–1 |
| **Hierarchy** | one clear hook per scene; eye lands instantly | two equal-weight elements competing |
| **Typography** | display face, role-based sizes, no Inter | system font, everything same size |
| **Timing & rhythm** | durations from the token scale; eases vary per scene | everything 0.4s `power3.out`; no breathing room |
| **Motion quality** | overshoot/anticipation/secondary motion; blur on the fastest moves | linear pops, everything keyframed on one frame, no weight |
| **Transitions** | scene changes feel intentional (cut vs dissolve) | hard pop-ins, flicker, overlap clash |
| **Color** | one accent + one secondary, ≥7:1 hero contrast | three-color gradient; text unreadable over media |
| **Depth** | grain on, glow restrained, layered atmosphere | flat background, bloom-everything |
| **Readability** | captions legible at 0.5× size; platform safe-areas clear (top/bottom UI bands) | text cramped to edge, too small, behind the app chrome |
| **Pacing** | scene durations match content weight | hook held too short, filler held too long |
| **Loop & end-card** | deliberate held end-card; loop resolves if it replays | ends mid-animation; jarring first↔last mismatch |

### 3. Return the verdict
ALWAYS use this exact structure:

```
## Critique: <composition>

**Overall: <SHIP / NEARLY / REWORK>**  (avg score X.X/5)

### Scores
Hook 4/5 · Hierarchy 4/5 · Typography 3/5 · Timing 2/5 · Motion 3/5 · Transitions 3/5 · Color 4/5 · Depth 3/5 · Readability 4/5 · Pacing 3/5 · Loop 3/5

### Top fixes (do these first)
1. [P1] <specific issue at scene/second> → <concrete fix + which skill>
2. [P1] ...
3. [P2] ...

### Nice-to-haves
- ...

### What's already working (keep it)
- ...
```

## Rules that keep critique useful

- **Cite frames, not vibes.** "Scene 2 at 4.1s: the hook (96px) and the subtitle (also ~90px) compete" beats "hierarchy feels off".
- **Prioritize ruthlessly.** Three P1 fixes that change the read are worth more than twenty nitpicks. Lead with what a viewer notices in the first second.
- **Name the fix and the skill.** Every issue gets an actionable next step routed to the skill that owns it.
- **Always note what works.** Telling the author what to keep prevents them from breaking the good parts while fixing the bad ones.
- **Don't re-lint.** Invariant violations are `lint`'s job; only mention them if they're the cause of a visible defect (e.g. a flash on frame 0).

## When NOT to apply

- Mid-authoring, when the reel is intentionally incomplete — critique a draft you're meant to finish, not scaffolding.
- For pure copy/script feedback with no visuals yet — use the content skills (`hook-generator-he`, `ugc-script-he`) instead.

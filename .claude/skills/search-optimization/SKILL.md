---
name: search-optimization
description: Comprehensive 5-layer search optimization — SEO, AEO, GEO, SXO, and AIO — updated for 2026 with full Google Search Console toolset. Use whenever writing or auditing web content (blog posts, landing pages, product pages, FAQs, documentation) or when the user mentions SEO, AEO, GEO, SXO, AIO, ranking, search visibility, AI Overviews, schema markup, Core Web Vitals, featured snippets, Google Search Console, GSC, structured data, or wants to get cited by AI engines.
---

# Search Optimization: SEO + AEO + GEO + SXO + AIO (2026 Edition)

## Overview

Modern web visibility requires optimizing across five interconnected layers. Ranking on Google is no longer enough — your content must also be extractable by answer engines, citable by generative AI, delightful to use, and machine-readable by LLMs.

| Layer | Full Name | Core Goal |
|-------|-----------|-----------|
| **SEO** | Search Engine Optimisation | Rank in traditional search results |
| **AEO** | Answer Engine Optimisation | Be selected as the direct answer (snippets, voice, AI Overviews) |
| **GEO** | Generative Engine Optimisation | Get cited in AI-generated responses (ChatGPT, Perplexity, Claude, Gemini) |
| **SXO** | Search Experience Optimisation | Convert visitors through great UX after they find you |
| **AIO** | AI Optimisation | Make content machine-readable and trustworthy for LLM processing |

**2026 Reality Check:** Average CTR for #1 Google rankings dropped from 28% (2024) to 19% (2025) due to AI Overviews. Impressions may grow while clicks stay flat. These layers are cumulative — SEO is the foundation, and each layer builds on it.

---

## Google Search Console (GSC)

GSC is the control tower for all five optimization layers — always use it first.
→ Full toolset, new 2025-2026 features, GA4 integration, weekly routine: `references/gsc-guide.md`

---

## How to Use This Skill

**Mode 1: Writing New Content** → Section 1 (Content Creation Workflow)
**Mode 2: Auditing Existing Content** → Section 2 (Audit Framework)
**Mode 3: GSC Diagnostic** → Section 3 (GSC Diagnostic Playbook)
For deep-dive guidance on any layer → read the corresponding file in `references/`

---

## Section 1: Content Creation Workflow

Apply all five layers even if the user only mentions one (e.g., just "SEO") — they work as a system and each layer reinforces the others.

Apply in order. Each layer adds requirements on top of the previous one.

### Step 1 — SEO Foundation

**Intent alignment.** Identify primary search intent: informational, navigational, commercial, or transactional. Every structural decision flows from this.

**Keyword strategy.** One primary keyword + 3–5 semantically related terms. Use primary keyword in: H1, first paragraph, one H2, URL slug, meta description.

**Structure:**
- One H1 (the title)
- Logical H2 → H3 → H4 hierarchy — never skip levels
- Short paragraphs (2–4 sentences)
- Internal links (3–5 per 1,000 words)
- One canonical URL

**Meta elements:**
- Title tag: 50–60 characters, primary keyword near front
- Meta description: 150–160 characters, keyword + CTA
- URL slug: short, lowercase, hyphenated

**E-E-A-T signals:** Author name + bio link, cite reputable sources with outbound links, publish date + last-updated date, first-hand data.

**Core Web Vitals (SEO + SXO baseline):**
- LCP: under 2.5 seconds
- CLS: under 0.1
- INP: under 200ms
- Poor CWV pages are less likely to appear in AI Overviews

### Step 2 — AEO Layer (Answer Extraction)

**The extractability test.** For every key fact: "Could an AI or search engine lift this sentence and use it as a standalone answer?" If no, rewrite.

**Definition-lead pattern:**
> [Entity] is a [category] that [differentiator].

**FAQ sections.** 5–8 questions in natural language (how, what, why, when). Answers: 40–60 words each.

**Schema for AEO (validate in GSC Rich Results Test):**
- `FAQPage` — Q&A sections
- `HowTo` — step-by-step processes
- `Article/BlogPosting` — editorial with datePublished, author
- `Product` — price, availability, reviews

**Direct answer formatting:** Lead with answer → then explain. Use specific numbers. Avoid hedging.

### Step 3 — GEO Layer (AI Citation)

**Statistical anchoring.** Include specific, verifiable, sourced data points. Format: "[Stat] according to [Source], [Year]."

**Quotability test.** Could this sentence appear inside an AI-generated answer with an attribution link? If yes, it's quotable.

**Information gain.** Provide something no other source has: original data, proprietary research, first-hand case studies, novel frameworks.

**Entity clarity.** One sentence: what it is + what category + what makes it different.

**Freshness.** Roughly 40–60% of AI-cited sources change month-to-month. Add publish dates, "last updated" dates. Plan quarterly refreshes.

**Cross-platform consistency.** Verify brand facts match across: website, Wikipedia, Crunchbase, LinkedIn, Google Business Profile.

### Step 4 — SXO Layer (Search Experience)

**Page speed.** Under 2 seconds full load. Monitor via GSC Experience → Core Web Vitals.

**Mobile-first.** Short paragraphs, tap-friendly CTAs, no horizontal scrolling.

**Conversion path.** One primary CTA above the fold, repeated after key content sections.

**Trust signals:** Testimonials, HTTPS, author credentials near top, last-updated date.

**Reduce friction:** No aggressive popups, no autoplay video, no excessive ads above fold.

### Step 5 — AIO Layer (Machine Readability)

**Modular content architecture.** Each H2/H3 section must be independently understandable.

**Schema markup (full set — validate in GSC):**
- `Article/BlogPosting`, `FAQPage`, `HowTo`, `Product`, `Organization/Person`, `BreadcrumbList`, `Table`

**Entity-first writing.** Never use "it" or "this" as section openers. Name the entity explicitly every time.

**Topic cluster architecture.** One pillar page + multiple cluster pages + robust internal linking = topical authority.

**Semantic HTML:** `<article>`, `<section>`, `<aside>`, `<nav>`, `<header>`, `<footer>`, `<figure>`, `<time>`, `<address>`

---

## Section 2: Audit Framework

```
## 5-Layer Search Optimisation Audit

### Page: [URL or title]
### Date: [date]

#### 1. SEO Foundation — [Strong / Needs Work / Weak]
[2-3 specific findings and recommendations]

#### 2. AEO (Answer Extraction) — [Score]
[2-3 specific findings and recommendations]

#### 3. GEO (AI Citation) — [Score]
[2-3 specific findings and recommendations]

#### 4. SXO (Search Experience) — [Score]
[2-3 specific findings and recommendations]

#### 5. AIO (Machine Readability) — [Score]
[2-3 specific findings and recommendations]

### Priority Actions (Top 5)
1. [Highest-impact action]
2-5. ...

### GSC Actions Required
- [ ] Submit URL for indexing if new/updated (URL Inspection tool)
- [ ] Validate schema in Rich Results Test
- [ ] Check Core Web Vitals in Experience report
- [ ] Review CTR for this page in Performance report
- [ ] Check Coverage report for indexing issues
- [ ] Add annotation for today's audit/update date
```

For detailed scoring rubrics → `references/audit-checklist.md`

---

## Section 3: GSC Diagnostic Playbook

**"Impressions grew but clicks didn't"**
→ AI Overviews are showing for your top queries
→ Action: Optimize for AEO — add FAQ schema, pass extractability test on key sections

**"Page is indexed but not ranking"**
→ Performance report: any impressions? No impressions = content relevance issue. Low CTR = title/meta description problem
→ Tool: URL Inspection for real-time index status

**"Lots of crawl errors"**
→ Coverage report → filter by error type (404, server error, redirect)
→ Fix 404s with 301 redirects; resubmit corrected sitemap

**"Core Web Vitals are red"**
→ Experience → Core Web Vitals → identify page and metric
→ Priority: LCP. Red CWV = reduced AI Overviews eligibility
→ Tool: PageSpeed Insights (linked from GSC) for recommendations

**"Schema not generating rich results"**
→ Enhancements section → specific errors listed
→ Tool: Rich Results Test — paste URL for live validation
→ Common issues: missing required fields, nesting errors, wrong schema type

**"Can't separate brand vs organic growth"**
→ Use: Branded Queries Filter → Performance report → apply filter
→ Branded up = brand awareness; non-branded up = SEO

**"Can't see impact of my content update"**
→ Add a Custom Annotation on the update date
→ Switch to weekly/monthly view to see before/after trend clearly

---

## Tool Stack by Layer

| Layer | Primary Tool | Secondary Tools |
|-------|-------------|-----------------|
| SEO | Google Search Console | Screaming Frog, Ahrefs, Semrush |
| AEO | GSC Rich Results Test + Enhancements | Schema.org validator, AlsoAsked.com |
| GEO | GSC AI Overviews + manual ChatGPT/Perplexity tests | Brand mention monitoring |
| SXO | GSC Core Web Vitals + Experience | PageSpeed Insights, GA4, Hotjar |
| AIO | GSC Enhancements + Rich Results Test | Google's Rich Results Test tool |

---

## Key Principles (2026)

1. **Layers are cumulative.** SEO is the foundation. Each layer builds on the previous.
2. **GSC is the source of truth.** Third-party tools estimate. GSC is first-party.
3. **Self-containment is universal.** Every key section must make sense in isolation.
4. **Data beats opinion.** Specific, sourced stats get cited. Vague claims get ignored.
5. **Freshness everywhere.** Quarterly content refreshes for high-value pages.
6. **Core Web Vitals gate AI Overviews.** Poor SXO = reduced GEO/AEO visibility.
7. **Consistency across the web.** AI cross-references Reddit, LinkedIn, YouTube, and your site.
8. **The extractability test.** Can an AI use this sentence as a standalone answer? If not, rewrite.

---

## When to Read Reference Files

- **Detailed audit scoring rubrics** → `references/audit-checklist.md`
- **Content type-specific guidance** (blog posts, product pages, FAQs, landing pages) → `references/content-types.md`
- **Before/after optimization examples** → `references/examples.md`
- **Full writing principles per layer** → `references/writing-guide.md`

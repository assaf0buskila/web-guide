# Audit Checklist: Full Scoring Rubric

Use this rubric when auditing existing web content. For each criterion, score as **Strong**, **Needs Work**, or **Weak**. Provide specific evidence from the page for each score.

---

## Layer 1: SEO Foundation

### 1.1 Title Tag
- **Strong:** 50-60 chars, primary keyword in first half, compelling, unique across site
- **Needs Work:** Correct length but keyword buried late, or generic/bland phrasing
- **Weak:** Missing, too long/short, no keyword, duplicate of another page

### 1.2 Meta Description
- **Strong:** 150-160 chars, includes keyword, clear value proposition, action-oriented
- **Needs Work:** Present but generic, keyword missing, or too long/truncated
- **Weak:** Missing entirely, or auto-generated gibberish

### 1.3 URL Structure
- **Strong:** Short, lowercase, hyphenated, includes primary keyword, no parameters
- **Needs Work:** Readable but overly long, or keyword absent
- **Weak:** Includes IDs, parameters, uppercase, or meaningless strings

### 1.4 Heading Hierarchy
- **Strong:** Single H1, logical H2→H3→H4 nesting, keyword in H1 and one H2, descriptive subheadings
- **Needs Work:** Correct H1 but hierarchy has gaps (e.g., H2→H4 skip), or subheadings are vague
- **Weak:** Multiple H1s, no clear hierarchy, or subheadings are decorative only

### 1.5 Internal Linking
- **Strong:** 3-5+ contextual internal links per 1000 words, descriptive anchor text, links to related content
- **Needs Work:** Some internal links but sparse or generic anchors ("click here")
- **Weak:** No internal links, or links only in boilerplate nav/footer

### 1.6 E-E-A-T Signals
- **Strong:** Named author with linked bio, publication date, last-updated date, outbound citations to reputable sources, evidence of first-hand experience
- **Needs Work:** Author named but no bio/credentials, dates present but no update cadence
- **Weak:** No author, no dates, no citations, no credibility signals

### 1.7 Technical Basics
- **Strong:** HTTPS, canonical tag present, mobile-responsive, no broken links, proper robots/sitemap
- **Needs Work:** Most technical basics met but one or two issues (e.g., missing canonical)
- **Weak:** HTTP, not mobile-responsive, broken links, blocked by robots.txt

---

## Layer 2: AEO (Answer Extraction)

### 2.1 Self-Contained Answers
- **Strong:** Key definitions and facts can be lifted as standalone sentences. No reliance on surrounding context. Opening sentences of sections are complete and declarative.
- **Needs Work:** Most answers are extractable but some rely on "as noted above" or pronoun references
- **Weak:** Content is narrative-heavy with no independently extractable segments

### 2.2 Definition-Lead Patterns
- **Strong:** Core concepts are defined with "[Entity] is a [category] that [differentiator]" pattern in the opening sentence of their section
- **Needs Work:** Definitions exist but are buried mid-paragraph or use vague language
- **Weak:** No clear definitions; concepts are introduced conversationally without precision

### 2.3 FAQ Section
- **Strong:** Dedicated FAQ with 5+ questions using natural language, each answered in 2-5 self-contained sentences
- **Needs Work:** FAQ present but answers are too brief (one sentence) or not self-contained
- **Weak:** No FAQ section

### 2.4 Inverted Pyramid Structure
- **Strong:** Answers lead each section, followed by explanation and evidence. The first 2 sentences of each section contain the key takeaway.
- **Needs Work:** Inconsistent — some sections lead with answers, others bury them
- **Weak:** Content consistently buries the answer after lengthy setup or context

### 2.5 Specificity
- **Strong:** Uses concrete numbers, named entities, and specific claims rather than hedging ("increases by 28%" vs. "may improve")
- **Needs Work:** Mix of specific and vague claims
- **Weak:** Dominated by hedging language and qualitative assertions

### 2.6 Voice Search Readiness
- **Strong:** Some content uses conversational, question-answer format suitable for spoken responses
- **Needs Work:** Content is well-structured but overly formal for voice extraction
- **Weak:** Content is written entirely in dense, academic or corporate prose

---

## Layer 3: GEO (AI Citation)

### 3.1 Statistical Anchoring
- **Strong:** 5+ sourced data points with attribution and recency indicators
- **Needs Work:** 2-4 data points, some missing source attribution
- **Weak:** No specific data points; all claims are qualitative

### 3.2 Quotability
- **Strong:** Multiple sentences that could appear directly in an AI-generated answer with attribution. Clean, self-contained, factual.
- **Needs Work:** Some quotable content but mixed with sentences that need context
- **Weak:** No content is clean enough to cite directly

### 3.3 Information Gain
- **Strong:** Contains original data, proprietary research, unique frameworks, first-hand case studies, or novel analysis not found elsewhere
- **Needs Work:** Some unique perspective but mostly restates commonly available information
- **Weak:** Pure aggregation of existing information with no original contribution

### 3.4 Entity Clarity
- **Strong:** Brand/product/concept is clearly defined in one sentence with category and differentiator. Name is used consistently (no alternating abbreviations).
- **Needs Work:** Entity is identifiable but definition is spread across multiple paragraphs
- **Weak:** Unclear what the page's primary entity is; fuzzy positioning

### 3.5 Structured Claims
- **Strong:** Key facts presented in easily parseable formats: tables, numbered lists, "X is Y" definitions, comparison statements
- **Needs Work:** Some structured content but key claims are buried in paragraphs
- **Weak:** All content is unstructured prose

### 3.6 Freshness
- **Strong:** Published/updated within last 90 days, references recent data (within 12 months), has visible date indicators
- **Needs Work:** Content is 3-12 months old, some data references are stale
- **Weak:** No dates visible, or content/data is clearly outdated (12+ months)

### 3.7 Cross-Platform Consistency
- **Strong:** Brand facts are consistent across website, social profiles, Wikipedia, business listings
- **Needs Work:** Minor inconsistencies (e.g., different founding dates on different platforms)
- **Weak:** Significant factual contradictions across web presence

---

## Layer 4: SXO (Search Experience)

### 4.1 Page Speed
- **Strong:** Full load under 2 seconds, Core Web Vitals all green (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- **Needs Work:** Load time 2-4 seconds, one or two CWV issues
- **Weak:** Load time > 4 seconds, multiple CWV failures

### 4.2 Mobile Experience
- **Strong:** Fully responsive, readable without zooming, tap targets properly spaced, no horizontal scroll
- **Needs Work:** Responsive but some elements are cramped or hard to tap on mobile
- **Weak:** Not mobile-optimized; content is desktop-only layout

### 4.3 Conversion Path
- **Strong:** Clear primary CTA visible above the fold and repeated after key sections. User journey is obvious.
- **Needs Work:** CTA exists but is buried below the fold or only appears once
- **Weak:** No clear CTA; user has no obvious next step

### 4.4 Scanability
- **Strong:** Descriptive subheadings tell the story when skimmed. Visual breaks every 300-400 words. Table of contents for long content.
- **Needs Work:** Subheadings present but vague. Walls of text in some sections.
- **Weak:** Minimal subheadings, long unbroken text blocks, no visual structure

### 4.5 Trust Signals
- **Strong:** Social proof visible (testimonials, client logos, ratings). Author bio with credentials. Security indicators. Updated date.
- **Needs Work:** Some trust signals but incomplete (e.g., author name but no credentials)
- **Weak:** No trust signals visible on the page

### 4.6 Friction Points
- **Strong:** Clean experience — no aggressive popups, no autoplay, no interstitials blocking content
- **Needs Work:** Minor friction (e.g., one dismissible popup)
- **Weak:** Multiple friction points: popups, autoplay video, excessive ads above the fold

---

## Layer 5: AIO (Machine Readability)

### 5.1 Modular Architecture
- **Strong:** Each H2/H3 section is self-contained and independently meaningful. Could be extracted and displayed alone.
- **Needs Work:** Most sections work independently but some rely on prior sections for context
- **Weak:** Content is one continuous narrative with no modular structure

### 5.2 Schema Markup
- **Strong:** Appropriate schema types implemented (Article, FAQPage, HowTo, Product, etc.) with complete required properties
- **Needs Work:** Some schema present but incomplete or wrong type for the content
- **Weak:** No structured data / schema markup

### 5.3 Entity-First Writing
- **Strong:** Entities are named explicitly in opening sentences. No orphan pronouns ("it," "this") starting sections. Consistent naming throughout.
- **Needs Work:** Mostly explicit but occasional pronoun-heavy openings
- **Weak:** Frequent use of pronouns and vague references, especially at section openings

### 5.4 Content Formatting for AI
- **Strong:** Tables for comparisons, ordered lists for processes, definition patterns for terms. Formats match content purpose.
- **Needs Work:** Some structured formats but inconsistent usage
- **Weak:** All unstructured prose, even for content that would benefit from tables or lists

### 5.5 Semantic HTML
- **Strong:** Uses `<article>`, `<section>`, `<aside>`, `<figure>`, `<time>`, `<address>` and other HTML5 semantic elements appropriately
- **Needs Work:** Some semantic HTML but relies heavily on generic `<div>` wrappers
- **Weak:** No semantic HTML; entirely `<div>` and `<span>` based

### 5.6 Topic Cluster Integration
- **Strong:** Page is clearly part of a topic cluster with links to pillar page and related cluster pages. Topical authority is reinforced through architecture.
- **Needs Work:** Some related content linked but no clear cluster structure
- **Weak:** Page is an orphan with no connection to related content on the site

---

## Scoring Summary

After evaluating all criteria, compile the scores:

| Layer | Score | Top Recommendation |
|-------|-------|-------------------|
| SEO | [Strong/Needs Work/Weak] | [One-line action] |
| AEO | [Strong/Needs Work/Weak] | [One-line action] |
| GEO | [Strong/Needs Work/Weak] | [One-line action] |
| SXO | [Strong/Needs Work/Weak] | [One-line action] |
| AIO | [Strong/Needs Work/Weak] | [One-line action] |

Then identify the **Top 5 Priority Actions** — the changes that would have the highest impact across the most layers. Prioritize actions that improve multiple layers simultaneously (e.g., adding self-contained definitions improves AEO, GEO, and AIO at once).

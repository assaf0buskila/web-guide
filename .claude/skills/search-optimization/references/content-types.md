# Content Type-Specific Optimization Guide

Different content types require different emphasis across the five optimization layers. This reference provides targeted guidance for each major web content type.

---

## Blog Posts / Articles

**Primary intent:** Informational
**Strongest layers:** AEO, GEO (these pages are the most likely to get cited)

**SEO priorities:**
- Target long-tail question keywords ("how to...", "what is...", "why does...")
- Aim for 1500-2500 words for comprehensive topics; 800-1200 for narrow questions
- Use the primary question as the H1 and answer it in the first paragraph

**AEO priorities:**
- Open with a direct, extractable answer in the first 2-3 sentences (the "snippet bait")
- Include an FAQ section with 5-8 related questions
- Use "What is [X]?" as an H2 and answer with the definition-lead pattern

**GEO priorities:**
- This is where GEO matters most. Blog posts are the primary source AI engines cite.
- Include 5+ sourced statistics. Every major claim should have a data point.
- Provide information gain: original analysis, unique frameworks, first-hand experience
- Write at least 3-5 sentences that pass the quotability test

**SXO priorities:**
- Table of contents for posts over 1500 words
- "Key takeaways" or "TL;DR" box near the top
- Related posts section at the bottom to reduce bounce
- Newsletter signup or content upgrade as the primary CTA

**AIO priorities:**
- Every H2 section should be independently extractable
- Use the article's primary keyword as a named entity in every section opening
- Include Article or BlogPosting schema with author, dates, and publisher

---

## Product Pages

**Primary intent:** Commercial / Transactional
**Strongest layers:** SEO, SXO, AIO (discovery + conversion + machine readability)

**SEO priorities:**
- Primary keyword = product name + category (e.g., "Acme CRM software")
- Include product-specific long-tail variations ("Acme CRM pricing", "Acme CRM vs Hubspot")
- Unique meta description per product — never duplicate across product pages

**AEO priorities:**
- Lead with a one-sentence product definition: "[Product] is a [category] that [key differentiator]"
- Include "best for" statements that AI can extract for recommendation queries
- FAQ section addressing purchase-intent questions: pricing, comparisons, compatibility, support

**GEO priorities:**
- Comparison tables vs. competitors (AI loves structured comparisons)
- Concrete feature specs, not marketing fluff ("processes 10,000 requests/second" vs. "blazing fast")
- Customer results with specific numbers ("reduced churn by 34% in 90 days")
- Ensure product facts are consistent with third-party review sites and directories

**SXO priorities:**
- This is the most critical layer for product pages. The page must convert.
- Primary CTA (buy/trial/demo) above the fold and repeated 2-3 times
- Social proof: testimonials, star ratings, customer logos, case study links
- Pricing transparency — hidden pricing kills conversion
- Fast load time is non-negotiable (directly impacts purchase completion)

**AIO priorities:**
- Product schema with price, availability, review aggregate, brand, SKU
- Feature comparison tables in actual `<table>` HTML (not images)
- BreadcrumbList schema for navigation context
- Consistent product naming — never alternate between "Acme CRM", "our platform", "the tool"

---

## Landing Pages

**Primary intent:** Transactional (lead gen or purchase)
**Strongest layers:** SXO, SEO (conversion is everything)

**SEO priorities:**
- Target high-intent keywords: "[category] software", "best [solution] for [use case]"
- Title tag should include the primary value proposition
- Keep URL clean and keyword-focused

**AEO priorities:**
- Less critical than other content types, but still include a clear definition of your offering
- Include 3-5 FAQ items addressing objections and common questions
- "Best for" positioning statements

**GEO priorities:**
- Landing pages are less commonly cited by AI (they're too promotional), but you can improve citation odds by including concrete data: customer results, benchmarks, industry statistics
- Ensure your brand entity is clearly defined in case AI references your product category

**SXO priorities:**
- THE critical layer. Every pixel should drive toward conversion.
- Single focused CTA — no competing actions
- Social proof above the fold
- Minimize navigation — reduce exit paths
- Form fields: fewer = better (name + email minimum)
- Load time under 2 seconds, ideally under 1.5

**AIO priorities:**
- Organization schema linking to your official website and social profiles
- Product or Service schema if relevant
- Clear, parseable value proposition in the first H1 and paragraph

---

## FAQ Pages

**Primary intent:** Informational + Support
**Strongest layers:** AEO, AIO (these pages are built for extraction)

**SEO priorities:**
- Target question-based keywords
- Each question should be an H2 or H3 (not just bold text)
- URL structure: /faq/ or /frequently-asked-questions/

**AEO priorities:**
- THE most important layer. FAQ pages are purpose-built for answer extraction.
- Every answer must be 2-5 self-contained sentences
- Use natural question phrasing (how people actually ask, not corporate-speak)
- No answer should start with "Yes" or "No" alone — start with the substantive answer
- Avoid "As mentioned in our [other page]..." — each answer must be independent

**GEO priorities:**
- Include specific data points in answers where relevant
- Cross-reference consistency with other pages on the site
- Keep answers updated quarterly — stale FAQ answers get deprioritized

**SXO priorities:**
- Searchable/filterable FAQ interface for pages with 10+ questions
- Expandable accordions keep the page scannable
- Each question should be individually linkable (anchor links)
- Include a "didn't find your answer?" CTA linking to support

**AIO priorities:**
- FAQPage schema is mandatory — this is the highest-impact schema type for FAQ content
- Each Q&A pair must be properly marked up
- Group FAQs by category with clear H2 category headings

---

## Documentation / Technical Content

**Primary intent:** Informational + Task-completion
**Strongest layers:** AEO, AIO, GEO (technical docs are heavily cited by AI)

**SEO priorities:**
- Target task-based keywords: "how to [verb] [noun] in [product]"
- Code examples should be in actual `<code>` blocks (not images)
- Version-specific URLs when content varies by version

**AEO priorities:**
- Each section should answer one specific technical question
- Lead with the solution/syntax, then explain — developers skim for the code, then read for context
- Include a "quick answer" or "TL;DR" at the top of each page

**GEO priorities:**
- Technical documentation is increasingly cited by AI coding assistants
- Include version numbers, compatibility notes, and specific method signatures
- Provide complete, working code examples (not pseudo-code)
- Original documentation (not rehashed from other sources) gets priority citation

**SXO priorities:**
- Code copy buttons on all code blocks
- Sidebar navigation with all sections visible
- "Was this helpful?" feedback mechanism
- Previous/Next navigation between related docs

**AIO priorities:**
- HowTo schema for tutorials and step-by-step guides
- SoftwareApplication schema for tool/library documentation
- Semantic HTML: `<code>`, `<pre>`, `<kbd>`, `<samp>` used correctly
- Version-aware content with clear date/version tagging

---

## Homepage

**Primary intent:** Navigational + Brand awareness
**Strongest layers:** SEO, SXO, AIO (brand entity establishment)

**SEO priorities:**
- Title tag: "[Brand Name] — [One-line Value Proposition]"
- Primary keyword = brand name + core category
- H1 should be the brand's positioning statement, not a generic welcome message

**AEO priorities:**
- Include a clear, one-sentence brand definition on the page
- This is the sentence AI will use when asked "What is [Brand Name]?"
- Place it in the first paragraph or in a dedicated "About" section

**GEO priorities:**
- The homepage establishes your entity identity in AI knowledge graphs
- Ensure brand description matches Wikipedia, LinkedIn, Crunchbase, and other profiles exactly
- Include founded date, headquarters location, key products, and leadership names if relevant

**SXO priorities:**
- Clear navigation to key pages (product, pricing, docs, contact)
- Fast load time (often the most-visited page; performance matters most here)
- Mobile-first: hero section must work on phone screens
- Primary CTA clear and visible within first viewport

**AIO priorities:**
- Organization schema with logo, founding date, founders, social profiles, contact info
- WebSite schema with SearchAction if the site has internal search
- SameAs links to all official social/directory profiles (builds entity graph connections)
- BreadcrumbList schema starting from homepage

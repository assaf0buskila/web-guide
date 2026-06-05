# Audit Framework — Five-Layer Content Assessment

Use this framework when evaluating existing content. Work through each layer systematically. For each criterion, assess the current state and provide a specific recommendation if improvement is needed.

---

## Layer 1: SEO — Search Engine Foundation

### 1.1 Technical Accessibility
- **Crawlability**: Is the page accessible to search engine bots? Check for noindex tags, robots.txt blocks, or JavaScript rendering issues that could prevent indexing.
- **Page speed**: Does the page load in under 2 seconds on mobile? Slow pages lose both rankings and user patience. Flag specific bottlenecks (uncompressed images, render-blocking scripts, excessive DOM size).
- **Mobile experience**: Is the page fully responsive? Does content reflow properly? Are tap targets large enough? Mobile-first indexing means the mobile version IS the version.
- **URL structure**: Is the URL clean, descriptive, and keyword-relevant? Avoid parameter-heavy URLs, unnecessary depth, or ambiguous slugs.
- **Internal linking**: Does the page connect to and from related content on the site? Orphaned pages with no internal links get less crawl attention and pass no authority.

### 1.2 On-Page Optimization
- **Title tag**: Does it include the primary keyword naturally? Is it under 60 characters? Does it compel a click? A title tag is both a ranking signal and an ad headline.
- **Meta description**: Does it summarize the page value in under 155 characters? Does it include a reason to click? While not a direct ranking factor, it drives CTR which impacts rankings indirectly.
- **Heading hierarchy**: Is there one H1 that matches search intent? Are H2s and H3s used logically to create a scannable outline? Avoid skipping levels (H1 → H3) or using headings for styling.
- **Keyword integration**: Is the primary keyword in the H1, first 100 words, and naturally throughout the content? Are semantic variants and related terms used? Check for keyword stuffing (unnatural repetition).
- **Image optimization**: Do images have descriptive alt text? Are they compressed? Do filenames include relevant keywords? Are modern formats (WebP, AVIF) used?
- **Content depth**: Does the page thoroughly cover the topic? Compare against top-ranking pages — is anything significant missing? Thin content rarely ranks or gets cited.

### 1.3 Authority Signals
- **E-E-A-T markers**: Is there a visible author with credentials? Is there an author bio? Does the page cite sources? For YMYL topics, are qualifications explicit?
- **External backlinks**: Does the page have quality inbound links? While you may not see this from the content alone, flag if the content lacks link-worthy elements (original data, unique insights, tools).
- **Publication and update dates**: Is the content dated? Has it been recently updated? Freshness matters for both rankings and AI citation. Flag undated content.

---

## Layer 2: AEO — Answer Engine Readiness

### 2.1 Direct Answer Formatting
- **Question-answer pairs**: Does the content explicitly pose questions (in headings or body) and answer them directly? The ideal pattern is: question as H2/H3, answer in the first 2-3 sentences below it.
- **Definition-lead sentences**: Do key sections open with clear definitional statements? Use the pattern: "[Term] is a [category] that [differentiator]." This is the format AI retrieval systems parse most reliably.
- **Answer completeness**: Can each answer stand alone if extracted? Test: read just one Q&A pair without the rest of the page. Does it make full sense? If not, it needs rewriting.
- **Conciseness**: Are answers tight enough for a Featured Snippet (40-60 words for paragraph snippets)? Can longer answers be summarized in a leading sentence before expanding?

### 2.2 Structured Data Alignment
- **FAQ Schema potential**: Does the content contain Q&A pairs that should be marked up with FAQPage schema? Identify candidates.
- **HowTo Schema potential**: Are there step-by-step instructions that could use HowTo schema?
- **Table/comparison opportunities**: Is there comparative information that would work better as a structured table? Tables are highly extractable by both search engines and AI.

### 2.3 Voice Search Readiness
- **Conversational phrasing**: Does the content address questions the way people actually speak them? Voice queries are longer, more conversational, and often start with who/what/where/when/why/how.
- **Speakable answers**: Could an answer be read aloud naturally by a voice assistant? If it relies on visual formatting (tables, bullet points) to make sense, provide a prose alternative.
- **Local intent**: If the topic has local relevance, does the content address location-specific queries?

---

## Layer 3: GEO — Generative Engine Citation Readiness

### 3.1 Citability Assessment
- **Self-contained claims**: Can the AI lift a sentence or short paragraph and use it as a citation? Each key claim should work as a standalone statement.
- **Statistical anchoring**: Does the content include specific, verifiable data points? Brands with 9+ structured, verifiable facts achieve dramatically higher AI citation rates than those with fewer than 3.
- **Source attribution**: Are claims backed by named sources (studies, organizations, named experts)? AI engines prioritize content that itself cites credible sources.
- **Recency signals**: Is the content clearly current? AI citation has a strong recency bias — about half of content cited in AI search responses is less than 13 weeks old. Flag stale statistics or outdated references.

### 3.2 Information Gain
- **Unique value**: Does this page say something no other page says? Look for: original research, proprietary data, unique frameworks, first-person case studies, expert interviews, novel analysis.
- **Specificity over generality**: Compare against competing content. If this page says "social media is important for businesses" while competitors say "Instagram Reels drove 34% more engagement than static posts in Q1 2026 for DTC brands," the competitor gets cited.
- **Perspective diversity**: Does the content present multiple viewpoints on contested topics? AI engines value balanced, comprehensive coverage.

### 3.3 Multi-Platform Readiness
- **Beyond Google**: Is the content structured for extraction by ChatGPT (favors recency + authority), Perplexity (favors Reddit + primary sources), Gemini (integrated with Google's index), and Claude (favors well-structured, comprehensive content)?
- **Brand entity signals**: Is the brand/author clearly and consistently identified? AI engines build entity models — consistent naming, descriptions, and claims across the web strengthen citation likelihood.
- **Cross-platform consistency**: Are the key facts about the brand/product/service consistent across the website, social profiles, business listings, and third-party mentions? Inconsistency reduces AI trust.

---

## Layer 4: SXO — Search Experience & Conversion

### 4.1 User Journey Assessment
- **Entry point clarity**: When someone lands on this page from search, is it immediately clear what the page is about and who it's for? The first screen (above the fold) must answer "Am I in the right place?"
- **Content scannability**: Can a user grasp the main points in 10 seconds of scanning? Look for: clear headings, bold key terms, short paragraphs, visual breaks.
- **Scroll depth motivation**: Is there a reason to keep reading? Does the page promise and deliver value progressively, or does it front-load fluff?
- **Navigation paths**: Can the user easily find related content, deeper information, or the next logical step? Are internal links contextual and helpful?

### 4.2 Conversion Readiness
- **Clear CTA**: Is there an obvious next action for the user? Is it aligned with the page's intent? Informational pages should lead to deeper content or newsletter signup. Transactional pages should lead to purchase/sign-up.
- **Trust signals**: Are there reviews, testimonials, certifications, security badges, or social proof where appropriate?
- **Friction audit**: Are there unnecessary barriers? Pop-ups that cover content, required registration to read, slow-loading elements, confusing form fields?
- **Mobile conversion path**: Is the conversion action easy to complete on mobile? Forms that work on desktop but break on mobile lose significant revenue.

### 4.3 Engagement Signals
- **Dwell time potential**: Is the content engaging enough that users stay on the page? Thin or unhelpful content generates pogo-sticking (quick return to search), which signals to search engines that the page didn't satisfy intent.
- **Interactive elements**: Where appropriate, does the page include elements that increase engagement — calculators, quizzes, expandable sections, comparison tools?
- **Content freshness experience**: Does the page feel current to a human reader? Outdated screenshots, references to "this year" from two years ago, or obviously stale examples undermine trust.

---

## Layer 5: AIO — AI & Machine Readiness

### 5.1 Content Architecture
- **Modular structure**: Is the content organized in self-contained sections that can be independently parsed by AI? Each section should have a clear heading and cover one specific subtopic.
- **Semantic HTML**: Are headings, lists, tables, and other structural elements used correctly (not just for visual styling)?
- **Content chunking**: Could an AI agent extract a useful, complete answer from any individual section? Or does understanding require reading the entire page sequentially?

### 5.2 Entity & Knowledge Graph Alignment
- **Entity definition**: Are key entities (brands, products, people, concepts) clearly defined on first mention?
- **Consistent terminology**: Is the same entity always referred to the same way? Alternating between "our platform," "the tool," "ProductName," and "it" confuses entity resolution.
- **Relationship mapping**: Are the relationships between entities clear? "ProductX is made by CompanyY, competes with ProductZ, and serves IndustryW."

### 5.3 Data Structure & Extractability
- **Structured comparisons**: Are comparisons presented in tables rather than prose? Tables are dramatically easier for AI to parse and cite accurately.
- **Numerical precision**: Are data points specific and unambiguous? "Revenue grew significantly" is not extractable. "Revenue grew 34% YoY to $12.4M in Q3 2025" is.
- **Temporal clarity**: Are dates explicit? "Recently" and "this year" decay immediately. Use exact dates or quarters.
- **Fact density**: Count the number of independently verifiable facts on the page. Higher fact density correlates with higher AI citation rates.

### 5.4 Agentic Readiness (Emerging)
- **Machine-readable data**: If the content involves products, services, or offers — is pricing, availability, and feature information presented in a structured, parseable format? Autonomous AI agents increasingly execute tasks (comparing, purchasing) and need clean data.
- **API/MCP compatibility**: For technical or product content, is there a path for AI agents to access the underlying data programmatically? This is emerging but increasingly important.

---

## Audit Output Format

When presenting an audit, use this structure:

### Summary
A 3-5 sentence overview of the content's overall optimization status. What's the single biggest opportunity? What's working well?

### Layer-by-Layer Assessment

For each of the five layers:
- **Score**: Strong / Adequate / Needs Work / Critical Gap
- **What's Working**: 1-3 specific strengths
- **Priority Recommendations**: 2-4 specific actions, ordered by impact
- **Example**: For the highest-priority recommendation, show a before/after or concrete example of what the improved version looks like

### Priority Action List
End with a consolidated list of the top 5-7 actions, ranked by likely impact on visibility and conversion. For each action:
- What to do (specific)
- Why it matters (which layer it serves)
- Effort level (quick win / moderate / significant)

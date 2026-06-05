# Google Search Console (GSC) — Master Toolset (2026)

GSC is the control tower for all five optimization layers. Always use it first — it's the only source of first-party Google data.

## Core Reports & Their Optimization Layer

| GSC Report | Optimization Layer | What to Look For |
|---|---|---|
| Performance → Search Results | SEO + AEO | Clicks, impressions, CTR, avg position |
| Performance → AI Overviews | AEO + GEO | Impressions from AI-generated answers |
| Search Console Insights | SEO + AIO | Query groups, trending content |
| Coverage / Indexing | SEO | Crawl errors, noindex, excluded pages |
| Experience → Core Web Vitals | SXO | LCP, CLS, INP thresholds |
| Experience → Page Experience | SXO | HTTPS, mobile usability |
| Enhancements → Rich Results | AEO + AIO | FAQ, HowTo, Product schema status |
| Rich Results Test (linked tool) | AEO + AIO | Schema validation |
| URL Inspection | SEO | Real-time indexing status |
| Links report | SEO | Internal + external backlinks |
| Manual Actions | SEO | Penalties |
| Security Issues | SEO | Hacks, malware flags |

## 2025–2026 GSC New Features (Must Know)

**Query Groups (Oct 2025)** — AI clusters similar queries (spelling variants, synonyms, language variants) into topic groups inside Insights. Use to identify content clusters you're ranking for and topical gaps.

**Branded Queries Filter (Nov 2025, full rollout Mar 2026)** — Segments branded vs. non-branded queries in the Performance report in one click. Branded growing = brand awareness; non-branded growing = organic SEO. Only available for top-level properties with sufficient query volume.

**Custom Annotations (Nov 2025)** — Add up to 120-character notes tied to specific dates on performance charts. Use for: content updates, migrations, algorithm updates, campaign launches.

**AI Mode Data in Performance Report (Jun 2025)** — Clicks/impressions from Google's conversational AI Mode appear under the "Web" search type. Impression growth + flat clicks = AI Overview effect on your queries.

**AI-Powered Configuration (Dec 2025, global Feb 2026)** — Natural language queries in the Performance report. Example prompts:
- "Show pages with rising impressions in the last month"
- "Compare blog traffic Q1 2026 vs Q1 2025"
- "Highlight pages with CTR below 2%"
- "Mobile clicks from users in Israel last 28 days"
Currently limited to Performance → Search Results (not Discover or News).

**Weekly/Monthly Performance Views (late 2025)** — View performance by week or month. Cleaner trend analysis, no manual daily aggregation.

**Social Channels in Insights (Dec 2025, experimental)** — See social channel performance alongside website data. A unified organic discovery picture.

**Search Console API v2** — For teams at scale: programmatic query-level data, page-level reporting, integration with GA4, Looker, Tableau, custom dashboards.

## GSC + GA4 Integration

GSC stops at the SERP. GA4 picks up after the click. Connect both:
1. GA4 → Admin → Product Links → Search Console → link property
2. Use GA4's "Search Console" reports for query → session → conversion view
3. Diagnose: high GSC clicks + low GA4 sessions = redirect or tracking issue

## GSC Weekly Monitoring Routine

1. **Performance report** — impressions, clicks, CTR trends week-over-week
2. **Coverage report** — any new errors since last week?
3. **Core Web Vitals** — any pages moved to "Needs improvement" or "Poor"?
4. **Rich Results** — any schema errors from recent deploys?
5. **Insights** — what content is trending up/down?
6. **Branded queries card** — is brand awareness growing?

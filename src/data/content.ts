export const WHY_POINTS = [
  {
    title: "AI בלי הקשר עיצובי מייצר עמודים גנריים",
    body: "כשמבקשים \"תבנה אתר\" בלי כיוון, מקבלים תבנית שטוחה. ההקשר - קהל, הבטחה, היררכיה וקצב - הוא מה שהופך פלט למוצר.",
  },
  {
    title: "קוד בלי ביקורת UX מייצר חיכוך",
    body: "עמוד יכול להיראות תקין ועדיין לבלבל. בלי מעבר ביקורת על זרימה, מצבים ריקים ושאלות שהמשתמש שואל - מאבדים המרות.",
  },
  {
    title: "פרסום בלי בדיקות מייצר תוצאה חלשה",
    body: "אתר מהיר, נגיש ומדורג הוא לא מזל. בלי בדיקת ביצועים, נגישות ו-SEO לפני העלייה - התוצאה נשארת בינונית.",
  },
];

const REPO_SKILLS_BASE = "https://github.com/assaf0buskila/assaf-landingPage/tree/main/.claude/skills";

export const SKILLS = [
  { tag: "UI/UX", label: "חשיבת ממשק ומסע משתמש", href: `${REPO_SKILLS_BASE}/frontend-design` },
  { tag: "Design", label: "מערכת צבע, טיפוגרפיה ומרווחים", href: `${REPO_SKILLS_BASE}/design` },
  { tag: "A11y", label: "נגישות לפי WCAG 2.2 AA", href: `${REPO_SKILLS_BASE}/web-accessibility` },
  { tag: "Performance", label: "Core Web Vitals וטעינה מהירה", href: `${REPO_SKILLS_BASE}/web-performance` },
  { tag: "SEO/LLMO", label: "דירוג בגוגל וקריאות למנועי AI", href: `${REPO_SKILLS_BASE}/seo-llmo` },
  { tag: "Analytics", label: "מדידה דרך GA4", href: `${REPO_SKILLS_BASE}/google-analytics-4` },
];

export const PINGPONG = [
  {
    side: "claude" as const,
    name: "Claude",
    phase: "01 / אסטרטגיה",
    text: "בוא נתחיל מהשאלה האמיתית: מה האדם צריך להבין לפני שהוא בכלל נוגע ב-Vercel?",
    chip: "intent",
    result: "העמוד נפתח בהבטחה ברורה במקום ברשימת פיצ'רים.",
  },
  {
    side: "gpt" as const,
    name: "GPT",
    phase: "02 / חידוד",
    text: "הוא לא מחפש 'עוד אתר עם AI'. הוא רוצה דרך בטוחה להפוך רעיון לעמוד חי. בוא נכתוב את זה ככה.",
    chip: "promise",
    result: "ה-Hero עובר משפה כללית לשפה שמדברת על תוצאה.",
  },
  {
    side: "claude" as const,
    name: "Claude",
    phase: "03 / מבנה",
    text: "אז המסלול צריך להיות: לחשוב, לאסוף רפרנסים, לבנות, לבדוק, לפרסם. כל שלב מקבל סקשן משלו.",
    chip: "sections",
    result: "נולד שלד הסקשנים והגלילה מתחילה לספר סיפור.",
  },
  {
    side: "gpt" as const,
    name: "GPT",
    phase: "04 / טעם",
    text: "רק אל תיתן לזה להיראות כמו תבנית AI. צריך צבעים חמים, מרווחים טובים, וטקסט שלא צועק.",
    chip: "visual taste",
    result: "הפלטה מהרפרנס הופכת למערכת עיצוב ולא לקישוט.",
  },
  {
    side: "claude" as const,
    name: "Claude",
    phase: "05 / בנייה",
    text: "אני מפרק את זה לקומפוננטות: Hero, Skills, References, Build Path, Deploy Guide ו-Resources.",
    chip: "React",
    result: "העמוד מקבל מבנה שאפשר לתחזק, לא רק HTML ארוך.",
  },
  {
    side: "gpt" as const,
    name: "GPT",
    phase: "06 / ביקורת",
    text: "עכשיו נבדוק כמו בני אדם: האם הטקסט ברור? האם המובייל נשאר קריא? האם GPT ו-Claude באמת מנהלים דיאלוג?",
    chip: "review",
    result: "הסקשן הזה הופך לשיחה מתפתחת ולא לאוסף בועות.",
  },
  {
    side: "claude" as const,
    name: "Claude",
    phase: "07 / פריסה",
    text: "בסוף מחברים את זה לריפו, מריצים build, מייבאים ל-Vercel, ומקבלים כתובת חיה.",
    chip: "deploy",
    result: "המשתמש רואה בדיוק איך לחזור על התהליך בעצמו.",
  },
  {
    side: "gpt" as const,
    name: "GPT",
    phase: "08 / ליטוש אחרון",
    text: "לפני שמסיימים, מוסיפים SEO, נגישות, llms.txt, וקישורים לקוד. עכשיו זה מדריך, לא דמו.",
    chip: "ship-ready",
    result: "התהליך נסגר עם הוכחה, קוד פתוח וצעדים ברורים.",
  },
];

export const BUILD_STEPS = [
  {
    k: "Plan",
    title: "תכנון",
    body: "מגדירים הבטחה, קהל, סדר סקציות ו-CTA. בלי זה כל השאר מתפזר.",
    ask: "\"מהי ההבטחה בשורה אחת, ומהם 6 הסקשנים שמובילים אליה?\"",
    check: "האם משתמש מבין תוך 5 שניות מה מקבלים פה?",
  },
  {
    k: "Design",
    title: "עיצוב",
    body: "פלטה, טיפוגרפיה, קצב מרווחים ותרגום רפרנסים לעקרונות.",
    ask: "\"תרגם את הפלטה הזו לטוקנים ולמערכת היררכיה.\"",
    check: "ניגודיות עוברת AA? הטיפוגרפיה קריאה בעברית?",
  },
  {
    k: "Build",
    title: "בנייה",
    body: "קומפוננטות React, טוקני Tailwind ומבנה רספונסיבי אמיתי.",
    ask: "\"בנה את הסקשן כ-component עם נתונים מופרדים מה-markup.\"",
    check: "האם הקוד קריא וללא חזרתיות מיותרת?",
  },
  {
    k: "Motion",
    title: "תנועה",
    body: "Lenis, Framer Motion, פס התקדמות ותמיכה ב-reduced motion.",
    ask: "\"הוסף reveal עדין בגלילה, עם כיבוד העדפת תנועה מופחתת.\"",
    check: "התנועה משרתת את התוכן או רק מוסיפה רעש?",
  },
  {
    k: "Polish",
    title: "ליטוש",
    body: "ביקורת UX, נגישות וביצועים לפני שמכריזים 'סיימנו'.",
    ask: "\"עבור על העמוד ותפוס בעיות נגישות, ביצועים וזרימה.\"",
    check: "מקלדת בלבד עוברת את כל המסלול?",
  },
  {
    k: "Find",
    title: "שיוודאו שימצאו",
    body: "SEO, Open Graph, JSON-LD, sitemap ו-llms.txt לסוכני AI.",
    ask: "\"הוסף מטא-דאטה ו-structured data שמתאימים לכוונת חיפוש.\"",
    check: "גם גוגל וגם ChatGPT מבינים על מה העמוד?",
  },
  {
    k: "Ship",
    title: "פרסום",
    body: "מ-GitHub ל-Vercel - וכתובת חיה שמתעדכנת בכל push.",
    ask: "\"הכן את הפרויקט לפריסה סטטית ידידותית ל-Vercel.\"",
    check: "ה-build עובר נקי? הכתובת החיה נטענת מהר?",
  },
];

export const RESOURCES = [
  { label: "האתר שלי", href: "https://www.assafweb.com/", primary: true },
  { label: "הקוד הפתוח שלי ב-GitHub", href: "https://github.com/assaf0buskila/assaf-landingPage", primary: true },
  { label: "רפרנס חי נוסף", href: "https://kevingoyal.vercel.app/", primary: false },
  { label: "רפרנס בועות 3D", href: "https://github.com/kevingoyal2006/Portfolio-Website/blob/main/src/components/TechStack.tsx", primary: false },
];

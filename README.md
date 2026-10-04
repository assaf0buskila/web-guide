# From Prompt to Production

מדריך ויזואלי בעברית (RTL) שמראה איך הופכים רעיון לעמוד נחיתה חי ב-Vercel — בעבודת
פינג-פונג בין Claude ל-GPT, עם דגש על UI/UX, נגישות, ביצועים ו-SEO. העמוד נבנה בתהליך שהוא
מתאר, ומשמש כהוכחה חיה.

## הרצה מקומית

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # פלט סטטי לתיקיית dist/
npm run preview     # תצוגה מקדימה של ה-build
```

## פריסה ל-Vercel

**מסלול A (הכי קל):** `npm run build`, ואז גוררים את `dist/` ל-vercel.com → New Project,
או מריצים `npm i -g vercel` ואז `vercel`.

**מסלול B (מומלץ):** דוחפים ל-GitHub → ב-Vercel: Add New → Project → Import. מאשרים
Framework = Vite, build = `npm run build`, output = `dist`. כל `git push` מפרסם מחדש.

## אנליטיקס (אופציונלי)

מגדירים משתנה סביבה `VITE_GA_ID` (למשל ב-Vercel → Environment Variables). אם הוא ריק —
GA4 לא נטען כלל.

## מה עוד כדאי להשלים

- תמונת השיתוף היא `public/og.png` (1200×630, נוצרה מתוך `public/og.svg`), והיא מוגדרת בכתובת מלאה.
- `{{PRODUCTION_URL}}` ב-`index.html`, `robots.txt` ו-`sitemap.xml` מוחלף בזמן ה-build בכתובת
  מתוך משתנה הסביבה `PRODUCTION_URL` (ברירת המחדל: `https://web-guide-chi.vercel.app`, בלי `/` בסוף).
  אם המחרוזת נשארת באיזה קובץ ב-`dist/`, ה-build נכשל.
- טקסטורות הבועות נגזרות מ-`ref/Ball affect/`; ניתן להחליף ב-PNG שקופים נקיים תחת
  `public/images/`.

## מבנה

- `src/components/` — הסקשנים (Hero, AiStackSection, PingPong, BuildPath, VercelDeployGuide …)
- `src/components/AiStack3D.tsx` — סצנת הבועות (React Three Fiber + Rapier), נטענת בעצלתיים
- `src/data/content.ts` — כל הקופי בעברית
- `public/logos/` — לוגואים רשמיים (SVG)

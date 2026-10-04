export default function Footer() {
  return (
    <footer className="border-t border-cloud-light bg-bg-soft px-5 py-12">
      <div className="mx-auto flex max-w-layout flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <div className="text-lg font-bold text-slate-dark">מ-Prompt ל-Production</div>
          <p className="mt-1 max-w-md text-sm text-muted">
            מדריך לבניית ופרסום עמוד נחיתה עם <span className="ltr">AI</span>. נבנה בעצמו בתהליך
            שהוא מתאר.
          </p>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm text-text-soft">
          <a href="#skills" className="hover:text-bookcloth">כישורים</a>
          <a href="#path" className="hover:text-bookcloth">המסלול</a>
          <a href="#deploy" className="hover:text-bookcloth">פרסום</a>
          <a href="https://github.com/assaf0buskila/web-guide" target="_blank" rel="noopener noreferrer" className="ltr hover:text-bookcloth">GitHub</a>
        </nav>
      </div>
      <div className="mx-auto mt-8 max-w-layout text-xs text-muted-2">
        <p>
          הלוגואים של <span className="ltr">Vercel</span>, <span className="ltr">OpenAI</span> ו-
          <span className="ltr">Anthropic</span> הם סימני מסחר של בעליהם. עמוד זה אינו קשור רשמית
          לחברות אלו ואינו מהווה חסות.
        </p>
        <p className="mt-2">© {new Date().getFullYear()} · נבנה עם React, Vite ו-Vercel.</p>
      </div>
    </footer>
  );
}

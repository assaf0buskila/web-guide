// Decorative, palette-tinted brand motifs built in SVG/CSS. All aria-hidden.

export function GridMesh({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}>
      <defs>
        <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M48 0H0V48" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}

// Sunburst rays echoing the Claude mark.
export function Sunburst({ className = "" }: { className?: string }) {
  const rays = Array.from({ length: 12 });
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 200"
      className={`pointer-events-none absolute ${className}`}
    >
      {rays.map((_, i) => (
        <rect
          key={i}
          x="97"
          y="20"
          width="6"
          height="60"
          rx="3"
          fill="currentColor"
          transform={`rotate(${(360 / rays.length) * i} 100 100)`}
        />
      ))}
    </svg>
  );
}

// Vercel triangle motif.
export function Triangle({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={`pointer-events-none absolute ${className}`}>
      <path d="m12 2 10 18H2Z" fill="currentColor" />
    </svg>
  );
}

// Soft warm radial glow for dark sections.
export function WarmGlow({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      style={{
        background:
          "radial-gradient(circle, rgba(204,120,92,0.35) 0%, rgba(204,120,92,0) 70%)",
      }}
    />
  );
}

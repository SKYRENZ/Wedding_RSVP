/* Pure SVG decorative music icons — used as subtle accents */

export function TrebleClef({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 100"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M20 5 C20 5 12 20 12 35 C12 45 16 50 20 52 C20 52 14 55 14 65 C14 75 20 80 24 78 C28 76 28 70 24 68 C20 66 18 70 20 72 M20 52 L20 5 M20 35 C20 35 28 30 28 22 C28 14 20 10 20 18" />
    </svg>
  );
}

export function QuarterNote({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 60"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <ellipse cx="10" cy="52" rx="8" ry="6" />
      <rect x="16" y="8" width="2" height="44" />
    </svg>
  );
}

export function EighthNote({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 30 60"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <ellipse cx="10" cy="52" rx="8" ry="6" />
      <rect x="16" y="8" width="2" height="44" />
      <path d="M18 8 C18 8 26 12 26 22 C26 28 22 30 22 30" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function DoubleEighthNote({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 44 60"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <ellipse cx="10" cy="52" rx="8" ry="6" />
      <rect x="16" y="10" width="2" height="42" />
      <ellipse cx="34" cy="52" rx="8" ry="6" />
      <rect x="24" y="10" width="2" height="42" />
      <rect x="16" y="10" width="12" height="2.5" rx="1" />
    </svg>
  );
}

export function StaffDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 300 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {[4, 12, 20, 28, 36].map((y) => (
        <line
          key={y}
          x1="0"
          y1={y}
          x2="300"
          y2={y}
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.3"
        />
      ))}
    </svg>
  );
}

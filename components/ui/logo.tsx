export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2 select-none">
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="26" height="26" rx="7" className="fill-signal" />
        <path
          d="M9.5 7.5L8.7 18.5M17.3 7.5L16.5 18.5M6 11h14M5.5 15h14"
          stroke="var(--color-paper)"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
      <span
        className={`font-display text-lg font-semibold tracking-tight ${
          inverse ? "text-paper" : "text-ink"
        }`}
      >
        chathub
      </span>
    </span>
  );
}

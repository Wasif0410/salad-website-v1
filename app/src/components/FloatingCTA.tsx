import RollingText from './RollingText';

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col items-end gap-3">
      <a
        href="#"
        className="pill-button roll-link bg-olive text-cream shadow-[0_10px_28px_rgba(13,18,11,0.18)] hover:bg-dark"
      >
        <RollingText label="Buy Template for $39" />
      </a>
      <a
        href="https://www.framer.com"
        className="inline-flex h-10 items-center gap-2 rounded-[10px] bg-white px-4 text-[13px] font-bold text-text-primary shadow-[0_10px_26px_rgba(0,0,0,0.08)]"
      >
        <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" aria-hidden="true">
          <path fill="currentColor" d="M3 1h10v4H7v2h6v4H7v4H3V1z" />
        </svg>
        Made in Framer
      </a>
    </div>
  );
}

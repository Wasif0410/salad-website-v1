import type { ReactNode } from 'react';

type OverlayScrollStackProps = {
  base: ReactNode;
  overlay: ReactNode;
};

export default function OverlayScrollStack({ base, overlay }: OverlayScrollStackProps) {
  return (
    <section className="relative bg-dark">
      <div className="sticky top-0 z-0 min-h-[100dvh] overflow-hidden">
        {base}
      </div>
      <div className="relative z-10">
        {overlay}
      </div>
    </section>
  );
}

import { useEffect } from 'react';
import Lenis from 'lenis';

declare global {
  interface Window {
    saladLenis?: Lenis;
  }
}

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      smoothWheel: true,
    });
    window.saladLenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      if (window.saladLenis === lenis) {
        window.saladLenis = undefined;
      }
      lenis.destroy();
    };
  }, []);
}

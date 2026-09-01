import { useEffect } from 'react';
import type { CSSProperties } from 'react';

const REVEAL_STAGGER_MS = 90;

/** Props for a scroll-revealed element: stagger index + optional base delay. */
export function reveal(index: number, baseMs = 0, style?: CSSProperties) {
  return {
    'data-reveal': index,
    style: { ...style, transitionDelay: `${baseMs + index * REVEAL_STAGGER_MS}ms` },
  } as const;
}

/**
 * Reveals every [data-reveal] element on the page as it scrolls into view.
 * A 1200ms safety net reveals only what is already inside the viewport, so
 * below-the-fold blocks still animate on scroll.
 */
export function useReveal(deps: unknown[] = []) {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (!nodes.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach((n) => n.classList.add('is-revealed'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-revealed');
          io.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.15 },
    );

    nodes.forEach((n) => {
      if (!n.classList.contains('is-revealed')) io.observe(n);
    });

    const fallback = window.setTimeout(() => {
      nodes.forEach((n) => {
        const box = n.getBoundingClientRect();
        if (box.top < window.innerHeight && box.bottom > 0) {
          n.classList.add('is-revealed');
          io.unobserve(n);
        }
      });
    }, 1200);

    return () => {
      window.clearTimeout(fallback);
      io.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

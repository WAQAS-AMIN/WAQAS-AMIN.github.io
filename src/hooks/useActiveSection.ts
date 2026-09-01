import { useEffect, useState } from 'react';

/** Highlights the mobile tab whose section is currently in view. */
export function useActiveSection(ids: string[], enabled = true) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    if (!enabled) return;
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => Boolean(n));
    if (!nodes.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: '-30% 0px -45% 0px', threshold: [0, 0.15, 0.5] },
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [ids, enabled]);

  return active;
}

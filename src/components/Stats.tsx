import { useEffect, useRef, useState } from 'react';
import { stats } from '../content';
import { reveal } from '../hooks/useReveal';

const DURATION = 1400;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function CountUp({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(() => (prefersReducedMotion() ? target : 0));

  useEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion()) return;

    let frame = 0;
    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / DURATION);
        setValue(Math.round(target * (1 - Math.pow(1 - t, 3))));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          run();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(node);

    return () => {
      io.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [target]);

  return (
    <span className="stat__num" ref={ref}>
      {value}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="stats">
      {stats.map((stat, i) => (
        <div key={stat.label} {...reveal(i)}>
          <CountUp target={stat.value} />
          <span className="stat__label">{stat.label}</span>
          <span className="stat__label stat__label--mobile">{stat.labelMobile}</span>
        </div>
      ))}
    </section>
  );
}

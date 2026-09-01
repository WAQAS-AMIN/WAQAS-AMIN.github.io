import { useEffect, useState } from 'react';
import { TESTIMONIAL_INTERVAL_MS, contact, testimonials } from '../content';
import { reveal } from '../hooks/useReveal';

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setIdx((i) => (i + 1) % testimonials.length),
      TESTIMONIAL_INTERVAL_MS,
    );
    return () => window.clearInterval(timer);
  }, [tick]);

  const pick = (i: number) => {
    setIdx(i);
    setTick((t) => t + 1); // restart the rotation timer
  };

  const current = testimonials[idx];

  return (
    <section className="quotes">
      <div className="quotes__head" {...reveal(0)}>
        <h2 className="eyebrow">{contact.eyebrow}</h2>
        <div className="dots" role="tablist" aria-label="Client quotes">
          {testimonials.map((item, i) => (
            <button
              key={item.author}
              type="button"
              role="tab"
              className="dot"
              aria-selected={i === idx}
              aria-label={`Quote ${i + 1} of ${testimonials.length}`}
              onClick={() => pick(i)}
            />
          ))}
        </div>
      </div>

      <div className="quotes__body" {...reveal(1)}>
        <p className="quote">“{current.quote}”</p>
        <div className="quote__author">{current.author}</div>
      </div>
    </section>
  );
}

import { useEffect } from 'react';
import { INTRO_MS, introMeta, profile } from '../content';

/**
 * 2100ms curtain: the panel holds, then lifts off screen; the wordmark rises in
 * behind an overflow mask and exits up; the rule scales from the left; the meta
 * labels fade. Runs once per session and never under prefers-reduced-motion.
 */
export default function IntroCurtain({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const timer = window.setTimeout(onDone, INTRO_MS);
    return () => window.clearTimeout(timer);
  }, [onDone]);

  return (
    <div className="intro" aria-hidden="true">
      <div className="intro__mask">
        <div className="intro__word">{profile.name}</div>
      </div>
      <div className="intro__rule" />
      <div className="intro__meta">
        {introMeta.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </div>
  );
}

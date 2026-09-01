import BuildPanel from './BuildPanel';
import { hero, profile } from '../content';
import { reveal } from '../hooks/useReveal';

export default function Hero({ base }: { base: number }) {
  return (
    <header id="top" className="hero">
      <div className="hero__main">
        <div className="pill" {...reveal(0, base)}>
          <span className="pill__dot" aria-hidden="true" />
          {profile.availability}
        </div>

        <h1 className="hero__title">
          {hero.lines.map((line, i) => (
            <span className="line" key={i} {...reveal(i + 1, base)}>
              {line.map((part, j) =>
                part.accent ? <em key={j}>{part.text}</em> : <span key={j}>{part.text}</span>,
              )}
            </span>
          ))}
        </h1>

        <div className="hero__foot" {...reveal(5, base)}>
          <p className="hero__sub">{hero.summary}</p>
          <p className="hero__sub hero__sub--mobile">{hero.summaryMobile}</p>
          <a className="link-underline" href="#work">
            {hero.cta} <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      <BuildPanel base={base} />
    </header>
  );
}

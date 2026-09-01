import { buildPanel } from '../content';
import { reveal } from '../hooks/useReveal';

/**
 * The hero's right-hand column. Deliberately not a photograph: it is a
 * wireframe of the kind of app the site is selling, drawn with the same 2px
 * rules, square corners and accent red as everything else.
 */
export default function BuildPanel({ base }: { base: number }) {
  return (
    <aside className="viz" aria-hidden="true" {...reveal(6, base)}>
      <div className="viz__bar">
        <span className="viz__dots">
          <i className="viz__dot viz__dot--accent" />
          <i className="viz__dot" />
          <i className="viz__dot" />
        </span>
        <span className="viz__label">{buildPanel.label}</span>
      </div>

      <div className="viz__chart">
        {buildPanel.bars.map((h, i) => (
          <span
            key={i}
            className={
              (buildPanel.accentBars as readonly number[]).includes(i)
                ? 'viz__col viz__col--accent'
                : 'viz__col'
            }
            style={{
              ['--h' as string]: String(h),
              transitionDelay: `${240 + i * 70}ms`,
            }}
          />
        ))}
      </div>

      <div className="viz__rows">
        {buildPanel.rows.map((row) => (
          <div className="viz__row" key={row.key}>
            <span className="viz__key">{row.key}</span>
            <span className="viz__val">{row.value}</span>
          </div>
        ))}
      </div>

      <div className="viz__foot">{buildPanel.footer}</div>
    </aside>
  );
}

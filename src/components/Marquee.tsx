import { MARQUEE_SECONDS, marqueeText } from '../content';

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div
        className="marquee__track"
        style={{ ['--marquee-duration' as string]: `${MARQUEE_SECONDS}s` }}
      >
        <span>{marqueeText}</span>
        <span>{marqueeText}</span>
      </div>
    </div>
  );
}

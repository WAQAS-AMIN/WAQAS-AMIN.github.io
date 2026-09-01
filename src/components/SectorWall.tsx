import { sectors } from '../content';

export default function SectorWall() {
  return (
    <div className="sectors">
      <h3 className="eyebrow sectors__eyebrow">Sectors</h3>
      <div className="sectors__grid">
        {sectors.map((sector) => (
          <div className="sector" key={sector.name}>
            <span className="sector__mark" aria-hidden="true" />
            <span className="sector__name">{sector.name}</span>
            <span className="sector__detail">{sector.detail}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

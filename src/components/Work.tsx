import { useState } from 'react';
import { Link } from 'react-router-dom';
import { featuredProjects, secondaryProjects, workSection } from '../content';
import type { FeaturedProject } from '../content';
import { reveal } from '../hooks/useReveal';

function Frame({
  project,
  slot,
  height,
}: {
  project: FeaturedProject;
  slot: number;
  height: number;
}) {
  const caption = project.captions[slot];
  return (
    <div className="project__frame" style={{ height }}>
      <div className={project.stripe[slot] === 'b' ? 'ph ph--b' : 'ph'} />
      {caption && <span className="caption">{caption}</span>}
      {project.layout === 'wide' && (
        <span className="project__index" aria-hidden="true">
          {project.index}
        </span>
      )}
    </div>
  );
}

function Project({ project, index }: { project: FeaturedProject; index: number }) {
  return (
    <Link
      to={`/work/${project.slug}`}
      className={project.layout === 'wide' ? 'project project--wide' : 'project'}
      {...reveal(index)}
    >
      {project.layout === 'pair' ? (
        <div className="project__pair">
          <Frame project={project} slot={0} height={project.height} />
          <Frame project={project} slot={1} height={project.height} />
        </div>
      ) : (
        <Frame project={project} slot={0} height={project.height} />
      )}

      <div className="project__body">
        <div className="project__text">
          <h3 className="project__title">{project.title}</h3>
          <p className="project__summary">{project.summary}</p>
        </div>
        <div className="project__aside">
          <div className="project__meta">
            {project.meta[0]}
            <br />
            {project.meta[1]}
          </div>
          <div className="cs-link">
            Case study <span aria-hidden="true">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Work() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="work" className="work">
      <div className="work__head" {...reveal(0)}>
        <h2 className="eyebrow">{workSection.eyebrow}</h2>
        <span className="meta-line">{workSection.meta}</span>
      </div>

      {featuredProjects.map((project, i) => (
        <Project key={project.index} project={project} index={i + 1} />
      ))}

      {showAll && (
        <div className="grid-cards">
          {secondaryProjects.map((card, i) => (
            <Link
              key={card.title}
              to={`/work/${card.slug}`}
              className="card"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <span className="card__sector">{card.sector}</span>
              <h3 className="card__title">{card.title}</h3>
              <p className="card__summary">{card.summary}</p>
              <span className="card__cs">Case study →</span>
            </Link>
          ))}
        </div>
      )}

      <div className="more-row">
        <button
          type="button"
          className="more-btn"
          onClick={() => setShowAll((v) => !v)}
          aria-expanded={showAll}
        >
          {showAll ? workSection.fewerLabel : workSection.moreLabel}{' '}
          <span aria-hidden="true">{showAll ? '↑' : '↓'}</span>
        </button>
        <span className="more-hint">
          {showAll ? workSection.hintExpanded : workSection.hintCollapsed}
        </span>
      </div>
    </section>
  );
}

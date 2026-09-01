import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Lockup from '../components/Lockup';
import MobileTabs from '../components/MobileTabs';
import ScrollProgress from '../components/ScrollProgress';
import ThemeToggle from '../components/ThemeToggle';
import { caseStudies } from '../content';
import { reveal, useReveal } from '../hooks/useReveal';

export default function CaseStudyPage() {
  const { slug = '' } = useParams();
  const study = caseStudies[slug];

  useReveal([slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!study) return <Navigate to="/" replace />;

  return (
    <div className="page">
      <ScrollProgress />

      <nav className="case__nav">
        <Lockup to="/" small />
        <div className="nav__links">
          <Link className="case__back" to="/#work">
            <span aria-hidden="true">←</span> All work
          </Link>
          <ThemeToggle />
        </div>
      </nav>

      <div className="case__intro">
        <div className="case__kicker" {...reveal(0)}>
          {study.kicker}
        </div>
        <h1 className="case__title" {...reveal(1)}>
          {study.title}
        </h1>
        <p className="case__lead" {...reveal(2)}>
          {study.intro}
        </p>
      </div>

      <div className="case__hero" {...reveal(3)}>
        <div className="case__hero-fill">
          <span>{study.heroCaption}</span>
        </div>
      </div>

      <div className="case__grid">
        <div className="case__meta" {...reveal(0)}>
          {study.meta.map((row) => (
            <div key={row.label}>
              {row.label}
              <strong>{row.value}</strong>
            </div>
          ))}
        </div>
        <div className="case__sections">
          {study.sections.map((section, i) => (
            <div key={section.heading} {...reveal(i + 1)}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="case__pair">
        <div {...reveal(0)} />
        <div {...reveal(1)} />
      </div>

      <Link className="case__next" to={study.next.href}>
        <small>Next project</small>
        <strong>{study.next.label} →</strong>
      </Link>

      <MobileTabs onHome={false} instant />
    </div>
  );
}

import { Link } from 'react-router-dom';
import { useActiveSection } from '../hooks/useActiveSection';

const SECTIONS = ['top', 'work', 'about', 'contact'];

type Props = { onHome: boolean; instant?: boolean };

export default function MobileTabs({ onHome, instant = false }: Props) {
  const active = useActiveSection(SECTIONS, onHome);

  const cell = (id: string, label: string, cta = false) => {
    const className = cta ? 'tab tab--cta' : 'tab';
    const current = onHome && active === id;
    const href = `/#${id}`;
    return onHome ? (
      <a key={id} href={`#${id}`} className={className} aria-current={current || undefined}>
        {label}
        {cta && <span aria-hidden="true">→</span>}
      </a>
    ) : (
      <Link key={id} to={href} className={className}>
        {label}
        {cta && <span aria-hidden="true">→</span>}
      </Link>
    );
  };

  return (
    <nav className={instant ? 'tabs tabs--instant' : 'tabs'} aria-label="Sections">
      {cell('top', 'Home')}
      {cell('work', 'Work')}
      {cell('about', 'About')}
      {cell('contact', 'Hire me', true)}
    </nav>
  );
}

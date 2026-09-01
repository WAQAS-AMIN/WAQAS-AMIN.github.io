import Lockup from './Lockup';
import ThemeToggle from './ThemeToggle';

export default function Nav() {
  return (
    <nav className="nav">
      <Lockup to="/" />
      <div className="nav__links">
        <a className="nav__link" href="#work">Work</a>
        <a className="nav__link" href="#about">About</a>
        <a className="nav__link" href="#contact">Contact</a>
        <ThemeToggle />
      </div>
    </nav>
  );
}

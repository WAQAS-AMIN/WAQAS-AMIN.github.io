import Lockup from './Lockup';
import { footerLinks } from '../content';

export default function Footer() {
  return (
    <footer className="footer">
      <Lockup to="/" small />
      <span className="footer__year">© {new Date().getFullYear()} — built in Pakistan, shipped worldwide</span>
      <div className="footer__links">
        {footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}

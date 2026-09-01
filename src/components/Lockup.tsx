import { Link } from 'react-router-dom';
import { profile } from '../content';

type Props = { to: string; small?: boolean };

export default function Lockup({ to, small = false }: Props) {
  return (
    <Link to={to} className={small ? 'lockup lockup--sm' : 'lockup'}>
      <span className="lockup__mark" aria-hidden="true">
        {profile.monogram}
      </span>
      <span className="lockup__stack">
        <span className="lockup__name">{profile.name}</span>
        {!small && <span className="lockup__role">{profile.role}</span>}
      </span>
    </Link>
  );
}

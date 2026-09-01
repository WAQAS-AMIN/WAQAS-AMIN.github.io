import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const label = theme === 'dark' ? 'Light' : 'Dark';

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${label.toLowerCase()} theme`}
    >
      <span className="theme-toggle__dot" aria-hidden="true" />
      {label}
    </button>
  );
}

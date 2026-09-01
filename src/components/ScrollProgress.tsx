import { useScrollProgress } from '../hooks/useScrollProgress';

export default function ScrollProgress() {
  const ref = useScrollProgress();
  return (
    <div className="progress" aria-hidden="true">
      <div className="progress__bar" ref={ref} />
    </div>
  );
}

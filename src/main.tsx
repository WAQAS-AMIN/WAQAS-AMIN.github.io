import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles.css';

// GitHub Pages serves 404.html for deep links; it stashes the requested path
// so the router can restore it here without a visible redirect.
try {
  const redirect = sessionStorage.getItem('wa-redirect');
  if (redirect) {
    sessionStorage.removeItem('wa-redirect');
    history.replaceState(null, '', redirect);
  }
} catch {
  /* storage blocked — deep links fall back to the home page */
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);

import { createContext, useContext } from 'react';

export type Theme = 'light' | 'dark';

export const STORAGE_KEY = 'wa-theme';

export function readInitialTheme(): Theme {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    /* private mode / storage blocked */
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

type ThemeValue = { theme: Theme; toggle: () => void };

export const ThemeContext = createContext<ThemeValue>({ theme: 'light', toggle: () => {} });

export const useTheme = () => useContext(ThemeContext);

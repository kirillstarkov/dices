import { createContext } from 'react';

export type Theme = 'app_dark_theme' | 'app_light_theme';

export interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

// @ts-ignore
export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';

import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "../../theme-provider/lib/theme-context";
import {useContext} from "react";

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const {theme, setTheme} = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: Theme;
    if (theme === 'app_dark_theme') {
      newTheme = 'app_light_theme';
    } else {
      newTheme = 'app_dark_theme';
    }
    console.log(theme)
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return { theme, toggleTheme }
}

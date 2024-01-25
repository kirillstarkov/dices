import {FC, useMemo, useState} from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "../lib/theme-context";

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || 'app_dark_theme';

interface ThemeProviderProps {
    initialTheme?: Theme;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({children, initialTheme}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme || initialTheme);

    const defaultProps = useMemo(
        () => ({
          theme,
          setTheme
        }),
        [theme]
    )

    return (
        <ThemeContext.Provider value={defaultProps}>
          {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider

import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from '../lib/ThemeContext';
import {FC, useMemo, useState} from 'react';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider: FC = ({children}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const defaultThemeProps = useMemo(() => ({
    theme: theme,
    setTheme: setTheme
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultThemeProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
import React, { FC, useState, useInsertionEffect } from 'react';
import ThemeContext from './ThemeContext';
import { ThemeProviderProps, Theme } from '../types/ThemeTypes';
import { Key, themes } from '../constants/ThemeConstants';

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(() => (localStorage.getItem(Key) as Theme) || themes.light);
  const setLightTheme = () => {
    setTheme(themes.light);
  };

  const setDarkTheme = () => {
    setTheme(themes.dark);
  };

  useInsertionEffect(() => {
    localStorage.setItem(Key, theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setLightTheme, setDarkTheme }}>{children}</ThemeContext.Provider>;
};

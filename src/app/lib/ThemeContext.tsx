import { createContext } from 'react';
import { themes } from '../constants/ThemeConstants';

export default createContext({
  theme: themes.light,
  setLightTheme: (): void => undefined,
  setDarkTheme: (): void => undefined,
});

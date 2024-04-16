import React, { FC, useContext } from 'react';
import { WiMoonAltWaningCrescent4, WiDaySunny } from 'react-icons/wi';
import ThemeContext from '../../../app/lib/ThemeContext';
import { ThemeSwitcherProps } from '../types/ThemeSwitcherTypes';

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ width, height }) => {
  const { setLightTheme, setDarkTheme, theme } = useContext(ThemeContext);
  const changeTheme = () => {
    if (theme == 'light') {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  };
  return (
    <>
      {theme == 'light' && <WiDaySunny style={{ width: width, height: height }} onClick={() => changeTheme()} />}
      {theme == 'dark' && (
        <WiMoonAltWaningCrescent4 style={{ width: width, height: height }} onClick={() => changeTheme()} />
      )}
    </>
  );
};

export { ThemeSwitcher };

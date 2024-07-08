import React, { FC, useContext } from 'react';
import s from './Header.module.sass';
import { Logo } from '../Logo/Logo';
import ThemeContext from '../../../app/lib/ThemeContext';
import { HeaderProps } from '../../types/HeaderTypes';

export const Header: FC<HeaderProps> = ({ children }) => {
  const logoText = 'Company name';
  const logoWidth = 24;
  const logoHeight = 24;

  const { theme } = useContext(ThemeContext);

  return (
    <div className={[s.header, s[theme]].join(' ')}>
      <Logo text={logoText} width={logoWidth} height={logoHeight} />
      <div className={s.header__nav}>{children}</div>
    </div>
  );
};

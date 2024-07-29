import React, { FC, useContext } from 'react';
import s from './Logo.module.sass';
import logo from '../../../logo.svg';
import ThemeContext from '../../../app/lib/ThemeContext';
import { type LogoProps } from '../../types/LogoTypes';
import { NavLink } from 'react-router-dom';

const Logo: FC<LogoProps> = ({ text, width = 24, height = 24 }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={s.logo}>
      <NavLink className={[s.logo__brand, s[theme]].join(' ')} to="">
        <img src={logo} alt="" width={`${width}px`} height={`${height}px`} />
        {text}
      </NavLink>
    </div>
  );
};

export { Logo, LogoProps };

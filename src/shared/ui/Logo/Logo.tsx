import React, { FC, useContext } from 'react';
import s from './Logo.module.sass';
import logo from '../../../logo.svg';
import ThemeContext from '../../../app/lib/ThemeContext';
import { type LogoProps } from '../../types/LogoTypes';

const Logo: FC<LogoProps> = ({ text, width = 24, height = 24 }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={s.logo}>
      <a className={[s.logo__brand, s[theme]].join(' ')} href="#">
        <img src={logo} alt="" width={width + 'px'} height={height + 'px'} />
        {text}
      </a>
    </div>
  );
};

export { Logo, LogoProps };

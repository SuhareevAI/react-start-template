import React, { FC, useContext } from 'react';
import s from './Button.module.sass';
import ThemeContext from '../../../app/lib/ThemeContext';
import { ButtonProps } from '../../types/ButtonTypes';

export const Button: FC<ButtonProps> = ({
  children,
  size = 'small',
  style = 'secondary',
  className,
  onClick,
  type,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button type={type} className={[s.button, s[size], s[style], s[theme], className].join(' ')} onClick={onClick}>
      {children}
    </button>
  );
};

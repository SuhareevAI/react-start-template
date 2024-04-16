import React, { FC, useContext } from 'react';
import s from '../../../shared/ui/Button/Button.module.sass';
import ThemeContext from '../../../app/lib/ThemeContext';
import { ButtonProps } from '../../types/ButtonTypes';

export const Button: FC<ButtonProps> = ({ children, size = 'small', style = 'secondary', onClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button className={[s.button, s[size], s[style], s[theme]].join(' ')} onClick={onClick}>
      {children}
    </button>
  );
};

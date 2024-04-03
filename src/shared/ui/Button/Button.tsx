import React, { FC, ReactNode } from 'react';
import s from '../../../shared/ui/Button/Button.module.sass';

interface ButtonProps {
  children: ReactNode;
  size: 'small' | 'medium' | 'large';
  style: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
}

export const Button: FC<ButtonProps> = ({ children, size = 'small', style = 'secondary' }) => {
  return <button className={[s.button, s[size], s[style]].join(' ')}>{children}</button>;
};

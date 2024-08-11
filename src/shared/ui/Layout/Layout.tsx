import React, { FC } from 'react';
import { Header } from '../Header/Header';
import { ThemeSwitcher } from '../../../widgets/ThemeSwitcher/ui/ThemeSwitcher';
import { LangSwitcher } from '../../../widgets/LangSwitcher/ui/LangSwitcher';
import { LayoutProps } from '../../types/LayoutTypes';
import s from './Layout.module.sass';

export const Layout: FC<LayoutProps> = ({ headerChildren, children }) => {
  return (
    <div>
      <Header>
        <div className={s.nav}>{headerChildren}</div>
        <ThemeSwitcher width={25} height={25} />
        <LangSwitcher />
      </Header>
      <div>{children}</div>
    </div>
  );
};

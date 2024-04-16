import React, { FC } from 'react';
import { Header } from '../Header/Header';
import { ThemeSwitcher } from '../../../widgets/ThemeSwitcher/ui/ThemeSwitcher';
import { LangSwitcher } from '../../../widgets/LangSwitcher/ui/LangSwitcher';
import { LayoutProps } from '../../types/LayoutTypes';

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header>
        <ThemeSwitcher width={25} height={25}></ThemeSwitcher>
        <LangSwitcher></LangSwitcher>
      </Header>
      <div>{children}</div>
    </div>
  );
};

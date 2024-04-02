import React, { FC } from 'react';
import s from './Header.module.sass';
import { Logo } from '../Logo/Logo'

interface HeaderProps {
    children? : React.ReactNode
}

export const Header : FC<HeaderProps> = ({children}) => {
    const logoText = "Company name";
    const logoWidth = 24;
    const logoHeight = 24;
    
    return (
        <div className={s.header}>
        <Logo text={logoText} width={logoWidth} height={logoHeight}></Logo>
            <div>
                {children}
            </div>
        </div>
    );
}
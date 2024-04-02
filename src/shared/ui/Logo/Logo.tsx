import React, { FC } from 'react';
import s from './Logo.module.sass';
import logo from '../../../logo.svg'

interface LogoProps {
    text : string,
    width : number
    height : number
}

export const Logo : FC<LogoProps> = ({text, width = 24, height = 24}) => {
    return (
        <div className={s.logo}>
            <a className={s.logo__brand} href="#">
                <img src={logo} alt="" width={width + "px"} height={height + "px"}/>
                {text}
            </a>
        </div>
    );
}
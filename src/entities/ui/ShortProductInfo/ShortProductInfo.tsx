import React, { FC } from "react";
import s from './ShortProductInfo.module.sass'
import { CartButton } from '../../../shared/ui/CartButton/CartButton';

interface ShortProductInfoProps {
    cost : number,
    image : string,
    title : string,
    description : string
}

export const ShortProductInfo : FC<ShortProductInfoProps> = ({cost, image, title, description}) =>
{
    const maxLength : number = 100;
    
    return (
            <div className={s.product}>
                <img className={s.product__image} src={image} alt={title}></img>
                <div className={s.product__info}>
                    <span className={s.product__title}>{title}</span>
                    <span className={s.product__description}>{description.slice(0, maxLength)}{description.length > maxLength && '...'}</span>
                </div>
                <div>
                    <div className={s.product__cost}>{cost} ₽</div>
                    <CartButton count={0}/>
                </div>
            </div>
    )
}
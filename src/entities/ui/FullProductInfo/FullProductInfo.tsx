import React, { FC } from "react";
import s from './FullProductInfo.module.sass'
import { CartButton } from '../../../shared/ui/CartButton/CartButton';

interface FullProductInfoProps {
    cost : number,
    images : string[],
    categoryName : string
    title : string,
    description : string
}

export const FullProductInfo : FC<FullProductInfoProps> = ({cost, images, categoryName, title, description}) =>
{
    return (
        <div className={s.fullProduct}>
            <div className={s.fullProduct__images}>
                {images.map((item : string) => {
                    return <img className={s.fullProduct__image} src={item} alt={title}></img>
                })}                
            </div>
            <div className={s.fullProduct__info}>
                <h4>{title}</h4>
                <span className={s.fullProduct__category}>{categoryName}</span>
                <span className={s.fullProduct__description}>{description}</span>
            </div>
            <div>
            <div className={s.fullProduct__cost}>{cost} ₽</div>
                <CartButton count={0}/>
            </div>
        </div>
    )
}
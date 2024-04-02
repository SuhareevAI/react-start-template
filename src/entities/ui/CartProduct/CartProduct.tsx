import React, { FC } from "react";
import s from './CartProduct.module.sass'
import {CartButton} from '../../../shared/ui/CartButton/CartButton';
import {Button} from '../../../shared/ui/Button/Button';

interface CartProductProps {
    image : string,
    title : string,
    count : number,
    cost : number
}

export const CartProduct : FC<CartProductProps> = ({image, title, count, cost} ) => {
    return (
        <>
            <div className={s.cartProducts}>
                <div className={s.cartProduct}>
                    <img className={s.cartProduct__image} src={image} alt={title}/>
                    <div className={s.cartProduct__info}>
                        <span>{title}</span>
                        <span>{cost}</span>
                    </div>
                    
                    <div className={s.cartProduct__buttons}>
                        <CartButton count={count}/>
                        <Button size="small" style="danger">
                            Удалить
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
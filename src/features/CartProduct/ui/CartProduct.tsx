import React, { FC } from 'react';
import s from './CartProduct.module.sass';
import { CartButton } from '../../../shared/ui/CartButton/CartButton';
import { Button } from '../../../shared/ui/Button/Button';
import { CartProductModel } from '../types/CardProductTypes';

const CartProduct: FC<CartProductModel> = ({ image, title, count, cost, style }) => {
  return (
    <div className={s.cartProduct} style={style}>
      <img className={s.cartProduct__image} src={image} alt={title} />
      <div className={s.cartProduct__info}>
        <span>{title}</span>
        <span>{cost}</span>
      </div>
      <div className={s.cartProduct__buttons}>
        <CartButton count={count} />
        <Button size="small" style="danger">
          Удалить
        </Button>
      </div>
    </div>
  );
};

export { CartProduct, type CartProductModel };

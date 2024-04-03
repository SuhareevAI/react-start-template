import React, { FC } from 'react';
import s from './CartButton.module.sass';

interface CartButtonProps {
  count?: number;
}

export const CartButton: FC<CartButtonProps> = ({ count = 0 }) => {
  if (count > 0) {
    return (
      <div className={`${s.cartButton} ${s.cartButton_added}`}>
        <button className={s.cartButton__button}>-</button>
        <input className={s.cartButton__count} type="text" value={count} />
        <button className={s.cartButton__button}>+</button>
      </div>
    );
  }

  return <button className={`${s.cartButton} ${s.cartButton_notAdded}`}>В корзину</button>;
};

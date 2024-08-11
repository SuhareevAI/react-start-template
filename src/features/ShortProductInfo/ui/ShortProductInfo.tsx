import React, { FC } from 'react';
import s from './ShortProductInfo.module.sass';
import { CartButton } from '../../../shared/ui/CartButton/CartButton';
import { ShortProductInfoProps } from '../types/ShortProductInfoTypes';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../app/redux/store';
import { cartActions } from '../../../app/redux/cart';

export const ShortProductInfo: FC<ShortProductInfoProps> = ({ id, price, photo, name, desc, style }) => {
  const maxLength = 100;

  const dispatch = useDispatch();
  const cart = useSelector<AppState, AppState['cart']>((state): AppState['cart'] => state.cart);
  const count = cart.products.find((p) => p.productId == id)?.count ?? 0;
  const onIncrement = () => {
    dispatch(cartActions.add(id));
  };

  const onDecrement = () => {
    dispatch(cartActions.delete({ productId: id, count: 1 }));
  };

  const onAdd = () => {
    dispatch(cartActions.add(id));
  };

  return (
    <div className={[s.product, style].join(' ')}>
      <img className={s.product__image} src={photo} alt={name} />
      <div className={s.product__info}>
        <span className={s.product__title}>{name}</span>
        <span className={s.product__description}>
          {desc?.slice(0, maxLength)}
          {desc?.length > maxLength && '...'}
        </span>
      </div>
      <div>
        <div className={s.product__cost}>{price} ₽</div>
        <CartButton count={count} onClick={onAdd} onIncrement={onIncrement} onDecrement={onDecrement} />
      </div>
    </div>
  );
};

import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './CartProduct.module.sass';
import { CartButton } from '../../../shared/ui/CartButton/CartButton';
import { Button } from '../../../shared/ui/Button/Button';
import { CartProductProps } from '../types/CardProductTypes';
import { AppState } from '../../../app/redux/store';
import { cartActions } from '../../../app/redux/cart';

const CartProduct: FC<CartProductProps> = ({ id, image, title, cost, style }) => {
  const dispatch = useDispatch();
  const { products } = useSelector<AppState, AppState['cart']>((state) => state.cart);
  const count = products.find((p) => p.productId == id)?.count ?? 0;

  const onIncrement = () => {
    dispatch(cartActions.add(id));
  };

  const onDecrement = () => {
    dispatch(cartActions.delete({ productId: id, count: 1 }));
  };

  const onDelete = () => {
    dispatch(cartActions.delete({ productId: id, count: count }));
  };

  return (
    <>
      {count > 0 && (
        <div className={s.cartProduct} style={style}>
          <img className={s.cartProduct__image} src={image} alt={title} />
          <div className={s.cartProduct__info}>
            <span>{title}</span>
            <span>{cost}</span>
          </div>
          <div className={s.cartProduct__buttons}>
            <CartButton count={count} onDecrement={onDecrement} onIncrement={onIncrement} />
            <Button size="small" style="danger" onClick={onDelete}>
              Удалить
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export { CartProduct, type CartProductProps };

import React, { FC } from 'react';
import s from './ShortProductInfo.module.sass';
import { CartButton } from '../../../shared/ui/CartButton/CartButton';
import { ShortProductInfoProps } from '../types/ShortProductInfoTypes';

export const ShortProductInfo: FC<ShortProductInfoProps> = ({ cost, image, title, description, style }) => {
  const maxLength = 100;

  return (
    <div className={[s.product, style].join(' ')}>
      <img className={s.product__image} src={image} alt={title}></img>
      <div className={s.product__info}>
        <span className={s.product__title}>{title}</span>
        <span className={s.product__description}>
          {description?.slice(0, maxLength)}
          {description?.length > maxLength && '...'}
        </span>
      </div>
      <div>
        <div className={s.product__cost}>{cost} ₽</div>
        <CartButton count={0} />
      </div>
    </div>
  );
};

import React, { FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import s from './CartButton.module.sass';
import ThemeContext from '../../../app/lib/ThemeContext';
import { CartButtonProps } from '../../types/CartButtonTypes';

export const CartButton: FC<CartButtonProps> = ({ count = 0 }) => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  if (count > 0) {
    return (
      <div className={[s.cartButton, s.cartButton_added, s[theme]].join(' ')}>
        <button className={[s.cartButton__button, s[theme]].join(' ')}>-</button>
        <input className={s.cartButton__count} type="text" value={count} />
        <button className={[s.cartButton__button, s[theme]].join(' ')}>+</button>
      </div>
    );
  }

  return <button className={[s.cartButton, s.cartButton_notAdded, s[theme]].join(' ')}>{t('CartButton.title')}</button>;
};

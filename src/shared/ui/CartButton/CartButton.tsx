import React, { FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import s from './CartButton.module.sass';
import ThemeContext from '../../../app/lib/ThemeContext';
import { CartButtonProps } from '../../types/CartButtonTypes';

export const CartButton: FC<CartButtonProps> = ({ count = 0, onClick, onIncrement, onDecrement }) => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  if (count > 0) {
    return (
      <div className={[s.cartButton, s.cartButton_added, s[theme]].join(' ')}>
        <button className={[s.cartButton__button, s[theme]].join(' ')} onClick={onDecrement}>
          -
        </button>
        {count}
        <button className={[s.cartButton__button, s[theme]].join(' ')} onClick={onIncrement}>
          +
        </button>
      </div>
    );
  }

  return (
    <button className={[s.cartButton, s.cartButton_notAdded, s[theme]].join(' ')} onClick={onClick}>
      {t('CartButton.title')}
    </button>
  );
};

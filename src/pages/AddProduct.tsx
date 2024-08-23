import React, { FC } from 'react';
import { ProductAddForm } from '../features/ProductForm/ui/ProductAddForm';
import s from '../app/styles/base.sass';

export const AddProduct: FC = () => {
  return (
    <div className={s.container} style={{ padding: '10px' }}>
      <ProductAddForm />
    </div>
  );
};

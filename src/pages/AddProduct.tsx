import React, { FC } from 'react';
import { ProductForm } from '../features/ProductForm/ui/ProductForm';
import s from '../app/styles/base.sass';

export const AddProduct: FC = () => {
  return (
    <div className={s.container} style={{ padding: '10px' }}>
      <ProductForm></ProductForm>
    </div>
  );
};

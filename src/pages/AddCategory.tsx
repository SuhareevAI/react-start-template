import React, { FC } from 'react';
import s from '../app/styles/base.sass';
import { CategoryAddForm } from 'src/features/CategoryForm/ui/CategoryAddForm';

export const AddCategory: FC = () => {
  return (
    <div className={s.container} style={{ padding: '10px' }}>
      <CategoryAddForm/>
    </div>
  );
};
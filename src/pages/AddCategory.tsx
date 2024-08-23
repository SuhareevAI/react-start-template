import React, { FC } from 'react';
import s from '../app/styles/base.sass';
import { CategoryAddForm } from '../features/CategoryForm/ui/CategoryAddForm';
import { CategoryList } from '../widgets/CategoryList/ui/CategoryList';

export const AddCategory: FC = () => {
  return (
    <div className={s.container} style={{ padding: '10px' }}>
      <CategoryAddForm />
      <CategoryList />
    </div>
  );
};

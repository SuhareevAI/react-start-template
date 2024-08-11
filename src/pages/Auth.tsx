import React, { FC } from 'react';
import { LoginForm } from '../features/LoginForm/ui/LoginForm';
import s from '../app/styles/base.sass';

export const Auth: FC = () => {
  return (
    <div className={s.container} style={{ padding: '10px' }}>
      <LoginForm></LoginForm>
    </div>
  );
};

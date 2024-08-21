import React, { FC } from 'react';
import { LoginForm } from '../features/LoginForm/ui/LoginForm';
import s from '../app/styles/base.sass';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Auth: FC = () => {
  const {t} = useTranslation();
  return (
    <div className={s.container} style={{ padding: '10px' }}>
      <LoginForm/>
      <Link to="/registration">{t('Navigation.Registration')}</Link>
    </div>
  );
};

import React, { useTransition } from 'react';
import s from '../app/styles/base.sass';
import { RegistrationForm } from '../features/RegistrationForm/ui/RegistrationForm';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Registration = () => {
  const {t} = useTranslation();
  return (
    <div className={s.container} style={{ padding: '10px' }}>
      <RegistrationForm />
      <Link to="/auth">{t('Navigation.Auth')}</Link>
    </div>
  );
};

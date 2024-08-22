import React from 'react';
import s from '../app/styles/base.sass';
import { RegistrationForm } from '../features/RegistrationForm/ui/RegistrationForm';

export const Registration = () => {
  return (
    <div className={s.container} style={{ padding: '10px' }}>
      <RegistrationForm />
    </div>
  );
};

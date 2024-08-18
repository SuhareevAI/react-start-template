import React from 'react';
import s from '../app/styles/base.sass';
import { RegistrationForm } from '../features/RegistrationForm/ui/RegistrationForm';
import { RegistrationFormExt } from '../features/RegistrationForm/ui/RegistrationFormExt';
import { Divider } from 'antd';

export const Registration = () => {
  return (
    <div className={s.container} style={{ padding: '10px' }}>
      <RegistrationForm />
      <Divider />
      <RegistrationFormExt />
    </div>
  );
};

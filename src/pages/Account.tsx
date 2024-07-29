import React, { FC } from 'react';

import { ProfileCompleteForm } from '../features/ProfileForm/ui/ProfileCompleteForm';
import s from '../app/styles/base.sass';

export const Account: FC = () => {
  return (
    <div className={s.container} style={{ padding: '10px' }}>
      <ProfileCompleteForm />
    </div>
  );
};

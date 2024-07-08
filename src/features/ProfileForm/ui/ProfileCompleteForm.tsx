import React, { FC } from 'react';
import { Divider } from 'antd';
import { ProfileForm } from './ProfileForm';

import { ChangePasswordForm } from '../../ChangePasswordForm/ui/ChangePasswordForm';

export const ProfileCompleteForm: FC = () => {
  return (
    <>
      <ProfileForm />
      <Divider />
      <ChangePasswordForm />
    </>
  );
};

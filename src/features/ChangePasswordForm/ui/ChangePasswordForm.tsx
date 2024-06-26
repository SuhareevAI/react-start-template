import React, { FC, memo } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../shared/ui/Button/Button';
import { isNotDefinedString } from '../../../utils/validation';
import { PasswordFormField } from '../../../shared/ui/FormField/PasswordFormField';
import { ChangePasswordFormErrors, ChangePasswordFormValues } from '../types/ChangePasswordFormTypes';

export const ChangePasswordForm: FC = memo(() => {
  const { t } = useTranslation();

  const validate = (values: ChangePasswordFormValues) => {
    const errors = {} as ChangePasswordFormErrors;
    if (isNotDefinedString(values.password)) {
      errors.password = t(`Errors.is_required`);
    }
    if (isNotDefinedString(values.newPassword)) {
      errors.newPassword = t(`Errors.is_required`);
    }
    if (isNotDefinedString(values.repeatPassword)) {
      errors.repeatPassword = t(`Errors.is_required`);
    }
    if (values.repeatPassword !== values.newPassword) {
      errors.newPassword = t(`Errors.not_same_password`);
      errors.repeatPassword = t(`Errors.not_same_password`);
    }
    return errors;
  };

  const formManager = useFormik<ChangePasswordFormValues>({
    initialValues: { password: undefined, newPassword: undefined, repeatPassword: undefined },
    onSubmit: (values, actions) => {
      console.log('values: ', values);
      actions.resetForm();
    },
    validate: validate,
  });

  const { handleSubmit, values, touched, errors, submitCount, handleBlur, handleChange } = formManager;

  return (
    <>
      <h4>{t(`Forms.ChangePasswordForm.Title`)}</h4>
      <PasswordFormField
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.password}
        errors={errors.password}
        submitCount={submitCount}
        touched={touched.password}
        name="password"
        placeholder={t(`Forms.ChangePasswordForm.Password.placeholder`)}
        title={t(`Forms.ChangePasswordForm.Password.title`)}
      />

      <PasswordFormField
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.newPassword}
        errors={errors.newPassword}
        submitCount={submitCount}
        touched={touched.newPassword}
        name="newPassword"
        placeholder={t(`Forms.ChangePasswordForm.NewPassword.placeholder`)}
        title={t(`Forms.ChangePasswordForm.NewPassword.title`)}
      />

      <PasswordFormField
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.repeatPassword}
        errors={errors.repeatPassword}
        submitCount={submitCount}
        touched={touched.repeatPassword}
        name="repeatPassword"
        placeholder={t(`Forms.ChangePasswordForm.RepeatPassword.placeholder`)}
        title={t(`Forms.ChangePasswordForm.RepeatPassword.title`)}
      />
      <Button type="submit" style={'primary'} size="small" onClick={handleSubmit}>
        {t(`Forms.ChangePasswordForm.Button.title`)}
      </Button>
    </>
  );
});

ChangePasswordForm.displayName = 'ChangePasswordForm';

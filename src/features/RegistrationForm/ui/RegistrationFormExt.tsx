import React, { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { Button } from '../../../shared/ui/Button/Button';
import { TextFormField } from '../../../shared/ui/FormField/TextFormField';
import { PasswordFormField } from '../../../shared/ui/FormField/PasswordFormField';
import { RegistrationFormValues } from '../types/RegistrationFormTypes';
import { register } from '../../..//app/redux/user';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from '../../..//app/redux/store';
import { message } from 'antd';

export const RegistrationFormExt = memo(() => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { error } = useSelector<AppState, AppState['user']>((state) => state.user);

  const formManager = useFormik<RegistrationFormValues>({
    initialValues: { email: undefined, password: undefined },
    onSubmit: (values, actions) => {
      dispatch(register(values));
      actions.resetForm();
    },
    validate: (values) => {
        console.log('validate')
    },
  });

  useEffect(() => {
    if (error) {
      message.error(error);
    }
  }, [error]);

  const { handleSubmit, values, touched, errors, submitCount, handleBlur, handleChange } = formManager;

  return (
    <form>
      <h4>{t(`Forms.RegForm.Title`)}</h4>
      <TextFormField
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.email}
        errors={errors.email}
        submitCount={submitCount}
        touched={touched.email}
        name="email"
        placeholder={t(`Forms.RegForm.Email.placeholder`)}
        title={t(`Forms.RegForm.Email.title`)}
      />

      <PasswordFormField
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.password}
        errors={errors.password}
        submitCount={submitCount}
        touched={touched.password}
        name="password"
        placeholder={t(`Forms.RegForm.Password.placeholder`)}
        title={t(`Forms.RegForm.Password.title`)}
      />

      <Button type="submit" style="primary" size="small" onClick={handleSubmit}>
        {t(`Forms.RegForm.Button.title`)}
      </Button>
    </form>
  );
});

RegistrationFormExt.displayName = 'RegistrationFormExt';

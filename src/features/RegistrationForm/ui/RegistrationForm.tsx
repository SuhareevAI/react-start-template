import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { Button } from '../../../shared/ui/Button/Button';
import { TextFormField } from '../../../shared/ui/FormField/TextFormField';
import { PasswordFormField } from '../../../shared/ui/FormField/PasswordFormField';
import { RegistrationFormValues } from '../types/RegistrationFormTypes';
import { useDispatch } from 'react-redux';
import { signup } from '../../../shared/api/user';
import { message } from 'antd';
import { userActions } from '../../../app/redux/user';

export const RegistrationForm = memo(() => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const formManager = useFormik<RegistrationFormValues>({
    initialValues: { email: undefined, password: undefined },
    onSubmit: (values, actions) => {
      signup({ email: values.email, password: values.password })
        .then((res) => {
          dispatch(userActions.setInfo(res));
          actions.resetForm();
        })
        .catch((error) => {
          message.error(error.message);
        });
    },
    validate: (values) => {
      console.log('validate');
    },
  });

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

RegistrationForm.displayName = 'RegistrationForm';

function setInfo(): any {
  throw new Error('Function not implemented.');
}

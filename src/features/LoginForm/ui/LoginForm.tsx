import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { Button } from '../../../shared/ui/Button/Button';
import { getServerErrorCode, isNotDefinedString, isNotValidEmail } from '../../../utils/validation';
import { TextFormField } from '../../../shared/ui/FormField/TextFormField';
import { PasswordFormField } from '../../../shared/ui/FormField/PasswordFormField';
import { LoginFormErrors, LoginFormValues } from '../types/LoginFormTypes';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { tokenActions } from '../../../app/redux/token';
import { useMutation } from '@apollo/client';
import { SIGN_IN, SignupData } from '../../../app/lib/api/profileConnections';
import { message } from 'antd';

export const LoginForm = memo(() => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [signup] = useMutation<SignupData, LoginFormValues>(SIGN_IN, {
    onCompleted: (data) => {
      const token = data.profile.signin.token;
      if (data && token) {
        dispatch(tokenActions.generate(token));
        navigate('/');
      }
    },
    onError: (error) => {
      message.error(t(`Errors.${getServerErrorCode(error)}`));
    },
  });

  const validate = (values: LoginFormValues) => {
    const errors = {} as LoginFormErrors;
    if (isNotDefinedString(values.email)) {
      errors.email = t(`Errors.is_required`);
    }

    if (!isNotDefinedString(values.email) && !isNotValidEmail(values.email)) {
      errors.email = t(`Errors.is_not_valid_email`);
    }

    if (isNotDefinedString(values.password)) {
      errors.password = t(`Errors.is_required`);
    }
    return errors;
  };

  const formManager = useFormik<LoginFormValues>({
    initialValues: { email: undefined, password: undefined },
    onSubmit: (values, actions) => {
      signup({ variables: { email: values.email, password: values.password } });
    },
    validate,
  });

  const { handleSubmit, values, touched, errors, submitCount, handleBlur, handleChange } = formManager;

  return (
    <form>
      <h4>{t(`Forms.LoginForm.Title`)}</h4>
      <TextFormField
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.email}
        errors={errors.email}
        submitCount={submitCount}
        touched={touched.email}
        name="email"
        placeholder={t(`Forms.LoginForm.Email.placeholder`)}
        title={t(`Forms.LoginForm.Email.title`)}
      />

      <PasswordFormField
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.password}
        errors={errors.password}
        submitCount={submitCount}
        touched={touched.password}
        name="password"
        placeholder={t(`Forms.LoginForm.Password.placeholder`)}
        title={t(`Forms.LoginForm.Password.title`)}
      />

      <Button type="submit" style="primary" size="small" onClick={handleSubmit}>
        {t(`Forms.LoginForm.Button.title`)}
      </Button>
    </form>
  );
});

LoginForm.displayName = 'LoginForm';

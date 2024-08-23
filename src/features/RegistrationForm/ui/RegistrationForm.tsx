import React, { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { Button } from '../../../shared/ui/Button/Button';
import { TextFormField } from '../../../shared/ui/FormField/TextFormField';
import { PasswordFormField } from '../../../shared/ui/FormField/PasswordFormField';
import { RegistrationFormErrors, RegistrationFormValues } from '../types/RegistrationFormTypes';
import { fetchUser } from '../../../app/redux/user';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from '../../../app/redux/store';
import { message } from 'antd';
import { getServerErrorCode, isNotDefinedString, isNotValidEmail } from '../../../utils/validation';
import { commandId } from '../../../app/constants/Api';

export const RegistrationForm = memo(() => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { error } = useSelector<AppState, AppState['user']>((state) => state.user);

  const formManager = useFormik<RegistrationFormValues>({
    initialValues: { email: undefined, password: undefined },
    onSubmit: (values, actions) => {
      dispatch(fetchUser({ email: values.email, password: values.password, commandId: commandId }));
      actions.resetForm();
    },
    validate: (values) => {
      const errors = {} as RegistrationFormErrors;
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
    },
  });

  useEffect(() => {
    if (error) {
      message.error(t(`Errors.${error}`));
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

RegistrationForm.displayName = 'RegistrationFormExt';

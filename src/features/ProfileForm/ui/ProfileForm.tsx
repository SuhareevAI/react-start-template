import React, { FC } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../shared/ui/Button/Button';
import { TextFormField } from '../../../shared/ui/FormField/TextFormField';
import { TextAreaFormField } from '../../../shared/ui/FormField/TextAreaFormField';
import { ProfileFormErrors, ProfileFormValues } from '../types/ProfileFormTypes';

export const ProfileForm: FC = () => {
  const { t } = useTranslation();

  const validate = (values: ProfileFormValues) => {
    const errors = {} as ProfileFormErrors;
    if (!values.name) {
      errors.name = t(`Errors.is_required`);
    }
    return errors;
  };

  const formManager = useFormik<ProfileFormValues>({
    initialValues: { name: '', about: '' },
    onSubmit: (values, actions) => {
      console.log('values: ', values);
      actions.resetForm();
    },
    validate: validate,
  });

  const { handleSubmit, values, touched, errors, submitCount, handleBlur, handleChange } = formManager;

  return (
    <form>
      <h4>{t(`Forms.ProfileForm.Title`)}</h4>
      <TextFormField
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.name}
        errors={errors.name}
        submitCount={submitCount}
        touched={touched.name}
        name="name"
        placeholder={t(`Forms.ProfileForm.Name.placeholder`)}
        title={t(`Forms.ProfileForm.Name.title`)}
      />

      <TextAreaFormField
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.about}
        errors={errors.about}
        submitCount={submitCount}
        touched={touched.about}
        name="about"
        placeholder={t(`Forms.ProfileForm.Name.title`)}
        title={t(`Forms.ProfileForm.Name.title`)}
      />
      <Button type="submit" style={'primary'} size="small" onClick={handleSubmit}>
        {t(`Forms.ProfileForm.Button.title`)}
      </Button>
    </form>
  );
};

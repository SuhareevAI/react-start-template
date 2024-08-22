import { useFormik } from 'formik';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../shared/ui/Button/Button';
import { TextFormField } from '../../../shared/ui/FormField/TextFormField';
import { getServerErrorCode, isNotDefinedString } from '../../../utils/validation';
import { CategoryFormValues, CategoryFormErrors } from '../types/CategoryFormTypes';
import { useMutation } from '@apollo/client';
import { ADD_CATEGORY, CategoryAddData, CategoryAddInput } from 'src/app/lib/api/categoriesConnections';
import { message } from 'antd';

export const CategoryAddForm: FC = () => {
  const { t } = useTranslation();
  
  const [add] = useMutation<CategoryAddData, CategoryAddInput>(ADD_CATEGORY, {
    onCompleted: (data) => {
        message.info(t(`Forms.CategoryForm.SuccessMessage`))
      },
    onError: (error) => {
      message.error(t(`Errors.${getServerErrorCode(error)}`));
    },
  });

  const validate = (values: CategoryFormValues) => {
    const errors = {} as CategoryFormErrors;
    if (isNotDefinedString(values.name)) {
      errors.name = t(`Errors.is_required`);
    }
    return errors;
  };

  const formManager = useFormik<CategoryFormValues>({
    initialValues: {
      name: undefined
    },
    onSubmit: (values, actions) => {
      add({ variables: {input: { name: values.name }}
      });
      actions.resetForm();
    },
    validate,
  });

  const { handleSubmit, values, touched, errors, submitCount, handleBlur, handleChange } = formManager;

  return (
    <form>
      <TextFormField
        onBlur={handleBlur}
        onChange={handleChange}
        submitCount={submitCount}
        errors={errors.name}
        touched={touched.name}
        name="name"
        value={values.name}
        placeholder={t(`Forms.CategoryForm.Name.title`)}
        title={t(`Forms.CategoryForm.Name.placeholder`)}
      />

      <Button type="submit" style="primary" size="small" onClick={handleSubmit}>
        {t(`Forms.CategoryForm.Button.title`)}
      </Button>
    </form>
  );
};

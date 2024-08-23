import { useFormik } from 'formik';
import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../shared/ui/Button/Button';
import { NumberFormField } from '../../../shared/ui/FormField/NumberFormField';
import { TextFormField } from '../../../shared/ui/FormField/TextFormField';
import { getServerErrorCode, isNotDefinedString, isValidFileType } from '../../../utils/validation';
import { ProductFormErrors, ProductFormValues } from '../types/ProductFormTypes';
import { TextAreaFormField } from '../../../shared/ui/FormField/TextAreaFormField';
import { Uploader } from '../../../shared/ui/FormField/UploadFormField';
import { message, UploadFile } from 'antd';
import { SelectFormField } from '../../../shared/ui/FormField/SelectFormField';
import { UploadChangeParam } from 'antd/es/upload';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from 'src/app/redux/store';
import { fetchCategories } from 'src/app/redux/category';
import { ADD_PRODUCT, GET_PRODUCT_BY_IDS, GET_PRODUCTS, ProductAddData, ProductAddInput } from 'src/app/lib/api/producConnections';
import { useMutation } from '@apollo/client';
import { uploadServerUrl } from 'src/app/constants/Api';

export const ProductAddForm: FC = () => {
  const [file, setFile] = useState(null);
  const { t } = useTranslation();
  const {categories} = useSelector((state : AppState) => state.category);
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector<AppState, AppState['token']>((state) => state.token);
  const [add] = useMutation<ProductAddData, ProductAddInput>(ADD_PRODUCT, {
    onCompleted: () => {
        message.info(t(`Forms.ProductForm.SuccessMessage`))
      },
    onError: (error) => {
      message.error(t(`Errors.${getServerErrorCode(error)}`));
    },
    refetchQueries: [{query: GET_PRODUCTS}, {query: GET_PRODUCT_BY_IDS}]
  });


  const validate = (values: ProductFormValues) => {
    const errors = {} as ProductFormErrors;
    if (isNotDefinedString(values.name)) {
      errors.name = t(`Errors.is_required`);
    }

    if (values.price == undefined || Number(values.price) <= 0) {
      errors.price = t(`Errors.number_is_lower_then_zero`);
    }

    if (isNotDefinedString(values.category)) {
      errors.category = t(`Errors.is_required`);
    }

    if (values.photo == undefined) {
      errors.photoErrors = t(`Errors.is_required`);
    } else if (values.photo && !isValidFileType(values.photo, 'image')) {
      errors.photoErrors = t(`Errors.need_image_file`);
    }

    return errors;
  };

  const categoryOptions = categories.map(category => ({
    value: category.id,
    label: category.name
  }));

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  const formManager = useFormik<ProductFormValues>({
    initialValues: {
      name: undefined,
      price: undefined,
      oldPrice: undefined,
      desc: undefined,
      photo: undefined,
      photoErrors: undefined,
      photoTouched: undefined,
      category: undefined,
    },
    onSubmit: (values, actions) => {
      add({ 
        variables: {
          input: { 
            name: values.name, 
            price: values.price, 
            desc: values.desc, 
            categoryId : values.category, 
            photo: file
          }
        }
      })
      actions.resetForm();
    },
    validate,
  });

  const { handleSubmit, values, touched, errors, submitCount, handleBlur, handleChange } = formManager;

  const beforeUpload = (photo: UploadFile) => {
    formManager.setFieldValue('photo', photo);
    return true;
  };

   const onFilechange = (file: UploadChangeParam) => {
    if (file.file.status == 'removed') {
        formManager.setFieldValue('photo', undefined);
    }

    if (file.file.status == 'done') {
      setFile(file.file.response.url);
    }
 };


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
        placeholder={t(`Forms.ProductForm.Name.title`)}
        title={t(`Forms.ProductForm.Name.placeholder`)}
      />

      <TextAreaFormField
        onBlur={handleBlur}
        onChange={handleChange}
        submitCount={submitCount}
        errors={errors.desc}
        touched={touched.desc}
        name="desc"
        value={values.desc}
        placeholder={t(`Forms.ProductForm.Description.title`)}
        title={t(`Forms.ProductForm.Description.placeholder`)}
      />

      <NumberFormField
        onBlur={handleBlur}
        onChange={(value) => {
          formManager.setFieldValue('price', value);
        }}
        submitCount={submitCount}
        errors={errors.price}
        touched={touched.price}
        name="price"
        value={values.price}
        placeholder={t(`Forms.ProductForm.Price.title`)}
        title={t(`Forms.ProductForm.Price.placeholder`)}
      />

      <NumberFormField
        onBlur={handleBlur}
        onChange={(value) => {
          formManager.setFieldValue('oldPrice', value);
        }}
        submitCount={submitCount}
        errors={errors.oldPrice}
        touched={touched.oldPrice}
        name="oldPrice"
        value={values.oldPrice}
        placeholder={t(`Forms.ProductForm.OldPrice.title`)}
        title={t(`Forms.ProductForm.OldPrice.placeholder`)}
      />

      <SelectFormField
        onBlur={handleBlur}
        onChange={(value: ChangeEvent<any>) => {
          formManager.setFieldValue('category', value);
        }}
        submitCount={submitCount}
        errors={errors.category}
        touched={touched.category}
        value={values.category}
        placeholder={t(`Forms.ProductForm.Category.title`)}
        title={t(`Forms.ProductForm.Category.placeholder`)}
        options={categoryOptions}
      />

       <Uploader
        beforeUpload={beforeUpload}
        onChange={onFilechange}
        submitCount={submitCount}
        errors={errors.photoErrors}
        touched={touched.photoTouched}
        title="photo"
        action={uploadServerUrl}
        headers={{authorization: `Bearer ${token}`}}
        fileList={values.photo != null ? [values.photo] : []}
      /> 

      <Button type="submit" style="primary" size="small" onClick={handleSubmit}>
        {t(`Forms.ProductForm.Button.title`)}
      </Button>
    </form>
  );
};

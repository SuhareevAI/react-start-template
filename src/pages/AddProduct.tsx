import React, { FC } from 'react';
import { ProductForm } from '../features/ProductForm/ui/ProductForm';
import { Modal } from '../shared/ui/Modal/Modal';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const AddProduct: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onClose = (): void => {
    navigate(-1);
  };

  return (
    <Modal header={t('Pages.AddProduct.title')} visible={true} onClose={onClose}>
      <ProductForm></ProductForm>
    </Modal>
  );
};

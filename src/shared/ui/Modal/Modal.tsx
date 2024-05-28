import React, { FC } from 'react';
import { createPortal } from 'react-dom';
import { ModalBase } from '../Modal/ModalBase';
import { ModalProps } from '../../types/ModalTypes';

export const Modal: FC<ModalProps> = (modalProps) => {
  return createPortal(<ModalBase {...modalProps} />, modalProps.container ?? document.body);
};

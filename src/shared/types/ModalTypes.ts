import React from 'react';

export interface ModalProps {
  visible: boolean;
  header: string;
  children: React.ReactNode;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
}

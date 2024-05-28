import React, { FC, useState } from 'react';
import { Button } from '../../../shared/ui/Button/Button';
import { Modal } from '../../../shared/ui/Modal/Modal';
import s from './ModalButton.module.sass';
export const ModalButton: FC = () => {
  const [text, setText] = useState('');
  const [showModal, setShowModal] = useState(false);

  const openModal = (): void => {
    setShowModal(true);
  };

  const closeModal = (): void => {
    setShowModal(false);
  };

  return (
    <div className={s.modalButton}>
      <input className={s.input} type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <Button size="small" style="primary" onClick={() => openModal()}>
        Open modal
      </Button>

      {showModal && (
        <Modal header={''} visible={showModal} onClose={closeModal}>
          {text}
        </Modal>
      )}
    </div>
  );
};

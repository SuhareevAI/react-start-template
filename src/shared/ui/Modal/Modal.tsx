import React, { FC } from 'react';
import s from './Modal.module.sass'

interface ModalProps {
    visible : boolean
    header : string,
    children : React.ReactNode
}

export const Modal : FC<ModalProps> = ({visible, header, children}) => {

    return (
        <div className={s.modal} style={{display:!visible?'none':'block'}}>
            <div className={s.modal__header}>
                <h5 className={s.modal__title}>{header}</h5>
                <button type="button" className={s.modal__close}>
                    <span>&times;</span>
                </button>
            </div>
            <div className={s.modal__body}>
                <p>{children}</p>
            </div>
        </div>
    )
}
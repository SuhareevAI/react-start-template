import React, { FC, useContext, useState } from 'react';
import { Header } from '../Header/Header';
import { ThemeSwitcher } from '../../../widgets/ThemeSwitcher/ui/ThemeSwitcher';
import { LangSwitcher } from '../../../widgets/LangSwitcher/ui/LangSwitcher';
import { LayoutProps } from '../../types/LayoutTypes';
import { NavLink } from 'react-router-dom';
import ThemeContext from '../../../app/lib/ThemeContext';
import s from './Layout.module.sass';
import { Modal } from '../Modal/Modal';
import { ProductForm } from '../../../features/ProductForm/ui/ProductForm';

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [showModal, setShowModal] = useState(false);

  const openModal = (): void => {
    setShowModal(true);
  };

  const closeModal = (): void => {
    setShowModal(false);
  };

  return (
    <div>
      <Header>
        <div className={s.nav}>
          <NavLink className={[s.nav__item, s[theme]].join(' ')} to="">
            Главная
          </NavLink>
          <NavLink className={[s.nav__item, s[theme]].join(' ')} to="account">
            Профиль
          </NavLink>
          <NavLink className={[s.nav__item, s[theme]].join(' ')} to="cart">
            Корзина
          </NavLink>

          <a className={[s.nav__item, s[theme]].join(' ')} title="Добавить товар" onClick={() => openModal()}>
            Добавить товар
          </a>
        </div>
        <ThemeSwitcher width={25} height={25} />
        <LangSwitcher />
      </Header>
      <div>{children}</div>
      {showModal && (
        <Modal header="Добавить товар" visible={showModal} onClose={closeModal}>
          <ProductForm></ProductForm>
        </Modal>
      )}
    </div>
  );
};

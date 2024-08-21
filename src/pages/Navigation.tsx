import React, { FC, useContext } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Layout } from '../shared/ui/Layout/Layout';
import { Home } from './Home';
import { Cart } from './Cart';
import { Account } from './Account';
import { AddProduct } from './AddProduct';
import { Auth } from './Auth';
import { ProtectedRoute } from '../app/lib/ProtectedRoute';
import s from '../shared/ui/Layout/Layout.module.sass';
import { Login } from '../widgets/Login/ui/Login';
import ThemeContext from '../app/lib/ThemeContext';
import { useTranslation } from 'react-i18next';
import { Registration } from '../pages/Registration';

export const Navigation: FC = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  const header = (
    <>
      <NavLink className={[s.nav__item, s[theme]].join(' ')} to="">
        {t('Navigation.Main')}
      </NavLink>
      <NavLink className={[s.nav__item, s[theme]].join(' ')} to="cart">
        {t('Navigation.Cart')}
      </NavLink>
      <NavLink className={[s.nav__item, s[theme]].join(' ')} to="account">
        {t('Navigation.Profile')}
      </NavLink>
      <NavLink className={[s.nav__item, s[theme]].join(' ')} to="addProduct">
        {t('Navigation.AddProduct')}
      </NavLink>
      <Login height={25} width={25} />
    </>
  );

  return (
    <BrowserRouter>
      <Layout headerChildren={header}>
        <Routes>
          <Route path="cart" element={<Cart />} />
          <Route path="" element={<Home />} />
          <Route
            path="account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route path="addProduct" element={ <ProtectedRoute><AddProduct /></ProtectedRoute>}/>
          <Route path="auth" element={<Auth />} />
          <Route path="registration" element={<Registration />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

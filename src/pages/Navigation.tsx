import React, { FC } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Layout } from '../shared/ui/Layout/Layout';
import { Home } from './Home';
import { Cart } from './Cart';
import { Account } from './Account';
import { AddProduct } from './AddProduct';

export const Navigation: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="account" element={<Account />} />
          <Route path="cart" element={<Cart />} />
          <Route path="" element={<Home />} />
          <Route path="product/add" element={<AddProduct />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

import React, { FC, useEffect, useMemo, useState } from 'react';
import { CartProduct } from '../features/CartProduct/ui/CartProduct';
import { ProductModel } from '../entities/Product/Model/ProductModel';
import s from '../app/styles/base.sass';
import { useSelector } from 'react-redux';
import { AppState } from '../app/redux/store';
import { getProducts } from '../shared/api/products';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';
import { GET_PRODUCT_BY_IDS, GET_PRODUCTS, ProductsData } from 'src/app/lib/api/producConnections';
import { Divider } from 'antd';

export const Cart: FC = () => {
  const { t } = useTranslation();
  const {products} = useSelector<AppState, AppState['cart']>((state): AppState['cart'] => state.cart);
  const {data} = useQuery<ProductsData>(GET_PRODUCT_BY_IDS, {variables: {ids: products.map(p=> p.productId)}});
  const cartProducts = data?.products?.getMany?.data;

  let price = 0;
  useMemo(() => {
    if (!cartProducts) {
      return 0;
    }
    products.forEach(product => {
      const cartProduct = cartProducts.find(x=>x.id == product.productId)
      if (cartProduct) {
        price += cartProduct.price * product.count;
      }
    });
  },[cartProducts, products])
  


  if (!products.length)
    return (
      <div className={s.container} style={{ padding: '10px', textAlign: 'center' }}>
        {t(`Forms.Cart.EmptyCart`)}
      </div>
    );

  if (cartProducts)
  return (
    <>
      <div className={s.container} style={{ padding: '10px' }}>
        {
          cartProducts.map((product: ProductModel) => {
            return (
              <CartProduct
                key={product.id}
                id={product.id}
                title={product.name}
                image={product.photo}
                cost={product.price}
                style={{ padding: '5px 0' }}
              />
            );
          })
        }

        <Divider/>
        {price} ₽
        
      </div>
    </>
  );
};

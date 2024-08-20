import React, { FC, useEffect, useState } from 'react';
import { CartProduct } from '../features/CartProduct/ui/CartProduct';
import { ProductModel } from '../entities/Product/Model/ProductModel';
import s from '../app/styles/base.sass';
import { useSelector } from 'react-redux';
import { AppState } from '../app/redux/store';
import { getProducts } from '../shared/api/products';
import { useTranslation } from 'react-i18next';

export const Cart: FC = () => {
  const { t } = useTranslation();
  const cart = useSelector<AppState, AppState['cart']>((state): AppState['cart'] => state.cart);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let cartProducts: string[] = [];
    const cartIds: string[] = [];
    cart.products.map((cart) => {
      cartIds.push(cart.productId);
    });
    getProducts(0, 1000).then((data) => {
      if (data && data.data) {
        cartProducts = data.data.filter((p: ProductModel) => cartIds.includes(p.id));
        setProducts(cartProducts);
      }
    });
  }, [JSON.stringify(cart.products)]);

  if (!cart.products.length || cart.products.length == 0)
    return (
      <div className={s.container} style={{ padding: '10px', textAlign: 'center' }}>
        {t(`Forms.Cart.EmptyCart`)}
      </div>
    );
  return (
    <>
      <div className={s.container} style={{ padding: '10px' }}>
        {products.map((product: ProductModel) => {
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
        })}
      </div>
    </>
  );
};

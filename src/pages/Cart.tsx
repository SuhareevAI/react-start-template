import React, { FC, useEffect, useState } from 'react';
import { CartProduct } from '../features/CartProduct/ui/CartProduct';
import { useProducts } from '../widgets/ProductList/lib/useProducts';
import { Product } from '../entities/Product/Model/Product';
import s from '../app/styles/base.sass';

export const Cart: FC = () => {
  const { getProducts } = useProducts();
  const [products, setProducts] = useState<Product[]>([]);

  const min = 1;
  const max = 3;

  const countProducts = () => {
    return parseInt((Math.random() * (max - min) + min).toString());
  };

  useEffect(() => {
    setProducts(getProducts(3));
  }, [getProducts]);

  return (
    <div className={s.container} style={{ padding: '10px' }}>
      {products.map((product: Product) => {
        return (
          <CartProduct
            key={product.id}
            title={product.name}
            image={product.photo}
            cost={product.price}
            style={{ padding: '5px 0' }}
            count={countProducts()}
          />
        );
      })}
    </div>
  );
};

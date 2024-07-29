import { useEffect, useState } from 'react';
import { createRandomProduct } from '../../../entities/Product/Services/ProductService';
import { Product } from '../../../entities/Product/Model/Product';

const maxProductsCount = 20;

const getProducts = (count = 0) => {
  let index = 0;
  const newProducts: Product[] = [];

  if (count == 0) {
    count = maxProductsCount;
  }

  while (index < count) {
    const currentDate = new Date();
    const product = createRandomProduct(currentDate.toDateString());
    newProducts.push(product);
    index++;
  }
  return newProducts;
};

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>(() => getProducts());

  const getNextProducts = () => {
    const nextProducts = getProducts();
    setProducts(products.concat(nextProducts));
  };

  return { products, getNextProducts, setProducts, getProducts };
};

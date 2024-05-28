import { useEffect, useState } from 'react';
import { createRandomProduct } from '../../../entities/Product/Services/ProductService';
import { Product } from '../../../entities/Product/Model/Product';

const maxProductsCount = 20;

const getProducts = () => {
  let index = 0;
  const newProducts: Product[] = [];

  while (index < maxProductsCount) {
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

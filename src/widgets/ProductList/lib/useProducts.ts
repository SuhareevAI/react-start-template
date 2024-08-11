import { useEffect, useState } from 'react';
import { ProductModel } from '../../../entities/Product/Model/ProductModel';
import { getProducts } from '../../../shared/api/products';

export const useProducts = (pageSize?: number) => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  useEffect(() => {
    getProducts(pageSize, pageNumber).then((data) => {
      setProducts(data.data);
      setMaxPage(data.pagination.total / data.pagination.pageSize);
    });
  }, [getProducts]);

  const getNextProducts = () => {
    if (pageNumber >= maxPage) {
      return;
    }
    setPageNumber(pageNumber + 1);
    getProducts(pageSize, pageNumber + 1).then((data) => setProducts((products) => [...products, ...data.data]));
  };

  return {
    products,
    getNextProducts,
  };
};

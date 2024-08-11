import React, { useEffect, useRef, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useProducts } from '../lib/useProducts';
import { Button } from '../../../shared/ui/Button/Button';
import s from './ProductList.module.sass';
import { ProductListProps } from '../types/ProductList';
import { ShortProductInfo } from '../../../features/ShortProductInfo/ui/ShortProductInfo';

export const ProductList: FC<ProductListProps> = ({ useIntersectionObserver = false }) => {
  const { products, getNextProducts } = useProducts(20);
  const { t } = useTranslation();
  const ref = useRef(null);

  useEffect(() => {
    if (!useIntersectionObserver) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        getNextProducts();
      }
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [getNextProducts]);

  return (
    <div>
      <div className={s.ProductList__items}>
        {products.map((p) => (
          <ShortProductInfo
            key={p.id}
            id={p.id}
            price={p.price}
            photo={p.photo}
            name={p.name}
            desc={p.desc}
            style={s.ProductListItems}
          />
        ))}
      </div>
      <div ref={ref}>
        <Button className={s.ProductList__button} size="medium" style="secondary" onClick={getNextProducts}>
          {t('ProductList.showMoreButtonText')}
        </Button>
      </div>
    </div>
  );
};

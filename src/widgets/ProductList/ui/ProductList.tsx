import React, { FC } from 'react';
import s from './ProductList.module.sass';
import { ShortProductInfo } from '../../../features/ShortProductInfo/ui/ShortProductInfo';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS, ProductsData } from '../../../app/lib/api/producConnections';
import { commandId } from '../../../app/constants/Api';

export const ProductList: FC = () => {
  const { loading, data } = useQuery<ProductsData>(GET_PRODUCTS);
  const products = data?.products?.getMany?.data.filter((x) => x.commandId == commandId);

  return (
    <div>
      <div className={s.ProductList__items}>
        {!loading &&
          products?.map((p) => (
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
    </div>
  );
};

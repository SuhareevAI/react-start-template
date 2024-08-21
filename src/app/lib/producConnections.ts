import { gql } from '@apollo/client';
import { ProductModel } from 'src/entities/Product/Model/ProductModel';

export type ProductsData = {
    products : {
        getMany : {
            data : ProductModel[]
        }
    }
}

export const GET_PRODUCTS = gql`
query Query($input: ProductGetManyInput) {
    products {
      getMany(input: $input) {
        data {
          id
          name
          photo
          desc
          createdAt
          updatedAt
          oldPrice
          price
          category {
            id
            name
            photo
            createdAt
            updatedAt
            commandId
          }
          commandId
        }
        pagination {
          pageNumber
          pageSize
          total
        }
        sorting {
          type
          field
        }
      }
    }
  }
`;

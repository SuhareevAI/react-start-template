import { gql } from '@apollo/client';
import { ProductModel } from 'src/entities/Product/Model/ProductModel';

export type ProductsData = {
    products : {
        getMany : {
            data : ProductModel[]
        }
    }
}

export type ProductGetManyInput = {
  ids: string;
}

export const GET_PRODUCT_BY_IDS = gql`
query GetMany($input: ProductGetManyInput) {
  products {
    getMany(input: $input) {
      data {
        id
        name
        photo
        price
        desc
      }
    }
  }
}
`

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
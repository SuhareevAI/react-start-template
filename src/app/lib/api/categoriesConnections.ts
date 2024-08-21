import { gql } from '@apollo/client';
import { Category } from 'src/entities/Category/Model/Category';

export type categoriesData = {
    categories : {
        getMany : {
            data : Category[]
        }
    }
}

export const GET_CATEGORIES = gql`
query GetMany {
    categories {
      getMany {
        data {
          id
          name
          commandId
        }
      }
    }
  }
`;

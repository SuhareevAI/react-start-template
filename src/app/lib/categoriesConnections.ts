import { gql } from '@apollo/client';
import { Category } from '../../entities/Category/Model/Category';

export type categoriesData = {
  categories: {
    getMany: {
      data: Category[];
    };
  };
};

export type CategoryAddInput = {
  input: {
    name: string;
  };
};

export type CategoryAddData = {
  data: {
    categories: {
      add: {
        id: string;
        name: string;
        commandId: string;
      };
    };
  };
};

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

export const ADD_CATEGORY = gql`
  mutation Add($input: CategoryAddInput!) {
    categories {
      add(input: $input) {
        id
        name
        commandId
      }
    }
  }
`;

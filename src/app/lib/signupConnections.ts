import { gql } from '@apollo/client';

export interface SignupData {
  profile: {
    signin: {
      token: string;
    };
  };
}

export const SIGN_UP = gql`
  mutation Mutation($email: String!, $password: String!) {
    profile {
      signin(email: $email, password: $password) {
        profile {
          commandId
          email
          id
          name
          signUpDate
        }
        token
      }
    }
  }
`;

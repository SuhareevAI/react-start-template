import { gql } from '@apollo/client';

export interface SignupData {
  profile: {
    signin: {
      token: string;
    };
  };
}

export interface ProfileData {
  id: string;
  name: string;
  email: string;
  signUpDate: string;
  commandId: string;
}

export interface SigninData {
  token: string;
  profile: ProfileData;
}

export const SIGN_UP = gql`
  mutation Signup($email: String!, $password: String!, $commandId: String!) {
    profile {
      signup(email: $email, password: $password, commandId: $commandId) {
        token
        profile {
          id
          name
          email
          signUpDate
          commandId
        }
      }
    }
  }
`;

export const SIGN_IN = gql`
  mutation Signin($email: String!, $password: String!) {
    profile {
      signin(email: $email, password: $password) {
        token
        profile {
          id
          name
          email
          signUpDate
          commandId
        }
      }
    }
  }
`;

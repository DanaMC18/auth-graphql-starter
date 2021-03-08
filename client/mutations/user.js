import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      email
      id
    }
  }
`;

export const LOGOUT = gql`
  mutation {
    logout {
      email
      id
    }
  }
`;

export const SIGNUP = gql`
  mutation signup($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      email
      id
    }
  }
`;

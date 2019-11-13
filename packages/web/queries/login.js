import gql from 'graphql-tag';

const LOGIN = gql`
  mutation($identifier: String!, $password: String) {
    login(input: { identifier: $identifier, password: $password }) {
      jwt
      user {
        username
      }
    }
  }
`;

export default LOGIN;

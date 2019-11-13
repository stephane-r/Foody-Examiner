import gql from 'graphql-tag';

const REGISTER = gql`
  mutation($username: String!, $email: String!, $password: String) {
    register(
      input: { username: $username, email: $email, password: $password }
    ) {
      jwt
      user {
        username
      }
    }
  }
`;

export default REGISTER;

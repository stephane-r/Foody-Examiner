import gql from 'graphql-tag';

const FILES = gql`
  query files($userId: ID!) {
    files(where: { id: $userId }) {
      name
      url
    }
  }
`;

export default FILES;

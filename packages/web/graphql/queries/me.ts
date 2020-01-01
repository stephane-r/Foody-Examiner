import gql from 'graphql-tag';

const ME = gql`
  {
    userMe {
      id
      username
      pantries
      favoris
    }
  }
`;

export default ME;

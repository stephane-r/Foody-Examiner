import gql from 'graphql-tag';

const ME = gql`
  {
    userMe {
      username
      pantries
      favoris
    }
  }
`;

export default ME;

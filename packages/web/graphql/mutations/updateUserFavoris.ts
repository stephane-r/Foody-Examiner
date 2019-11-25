import gql from 'graphql-tag';

const UPDATE_USER_FAVORIS = gql`
  mutation($userId: ID!, $favoris: JSON) {
    updateUser(input: { where: { id: $userId }, data: { favoris: $favoris } }) {
      user {
        favoris
      }
    }
  }
`;

export default UPDATE_USER_FAVORIS;

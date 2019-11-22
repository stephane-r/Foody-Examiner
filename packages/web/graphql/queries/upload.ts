import gql from 'graphql-tag';

const UPLOAD = gql`
  query files {
    files {
      name
      url
    }
  }
`;

export default UPLOAD;

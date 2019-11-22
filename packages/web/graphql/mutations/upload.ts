import gql from 'graphql-tag';

const UPLOAD = gql`
  mutation($file: Upload!, $ref: String) {
    upload(file: $file, ref: $ref) {
      name
      url
    }
  }
`;

export default UPLOAD;

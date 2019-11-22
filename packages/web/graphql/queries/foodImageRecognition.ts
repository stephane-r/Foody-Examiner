import gql from 'graphql-tag';

const FOOD_IMAGE_RECOGNITION = gql`
  query foodImageRecognition($image: String!) {
    foodImageRecognition(image: $image) {
      name
    }
  }
`;

export default FOOD_IMAGE_RECOGNITION;

import gql from 'graphql-tag';

const RECIPES = gql`
  query recipes($ingredients: String!) {
    recipes(ingredients: $ingredients) {
      title
      href
      ingredients
      thumbnail
    }
  }
`;

export default RECIPES;

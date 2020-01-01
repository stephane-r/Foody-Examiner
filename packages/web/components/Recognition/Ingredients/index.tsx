import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-apollo';
import { useSelector } from 'react-redux';
import UPLOAD_USER_PANTRIES from '../../../graphql/mutations/updateUserPantries';
import FOOD_IMAGE_RECOGNITION from '../../../graphql/queries/foodImageRecognition';
import RECIPES from '../../../graphql/queries/recipes';
import Recipes from '../Recipes';
import { ReceiveUserPantries, ReceiveUserFavoris } from '../../../interfaces';

interface IngredientsProps {
  url: null | string;
  pantries: any;
  receiveUserPantries: ReceiveUserPantries;
  favoris: any;
  receiveUserFavoris: ReceiveUserFavoris;
}

const Ingredients: React.FC<IngredientsProps> = ({
  url,
  pantries,
  receiveUserPantries,
  ...props
}) => {
  const [ingredients, setIngredients] = useState<Array<string>>([]);
  const [skipRecipesQuery, setSkipRecipesQuery] = useState<boolean>(true);
  const foodImageRecognitionQuery = useQuery(FOOD_IMAGE_RECOGNITION, {
    variables: { image: url }
  });
  const recipesQuery = useQuery(RECIPES, {
    variables: { ingredients: ingredients.toString() },
    skip: skipRecipesQuery
  });
  // @ts-ignore
  const userId = useSelector(state => state.app.user.id);

  const onError = (error: any): any => console.log(error);
  const onCompleted = (data: any): any =>
    receiveUserPantries(data.updateUser.user.pantries);

  const [updateUserPantries] = useMutation(UPLOAD_USER_PANTRIES, {
    onError,
    onCompleted,
    variables: {
      userId,
      pantries: ingredients
    }
  });

  const handleChange = (event: any, item: any): any => {
    const isChecked = event.target.checked;

    if (isChecked) {
      const userPantries: Array<string> = pantries.filter(
        (i: string): boolean => !ingredients.includes(i)
      );
      const test: Array<string> = [...userPantries, ...ingredients, item];
      return setIngredients(test);
    }

    const test = ingredients.filter(i => i !== item);
    return setIngredients(test);
  };

  if (foodImageRecognitionQuery.loading) {
    return <div>Chargement ...</div>;
  }

  return (
    <div>
      <ul>
        {foodImageRecognitionQuery.data ? (
          foodImageRecognitionQuery.data.foodImageRecognition.map(
            ({ name }: any) => (
              <li key={name}>
                {name}
                <input
                  type="checkbox"
                  onChange={(event): any => handleChange(event, name)}
                />
              </li>
            )
          )
        ) : (
          <li>Empty data</li>
        )}
      </ul>
      {recipesQuery.data && (
        <Recipes recipes={recipesQuery.data.recipes} {...props} />
      )}
      <button
        type="button"
        onClick={(): any => setSkipRecipesQuery(false)}
        disabled={ingredients.length === 0}>
        Find recipes
      </button>
      <button
        type="button"
        onClick={(): any => updateUserPantries()}
        disabled={ingredients.length === 0}>
        Save to my pantry
      </button>
    </div>
  );
};

export default Ingredients;

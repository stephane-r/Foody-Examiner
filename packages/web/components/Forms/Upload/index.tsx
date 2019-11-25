import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-apollo';
import UPLOAD from '../../../graphql/mutations/upload';
import UPLOAD_USER_PANTRIES from '../../../graphql/mutations/updateUserPantries';
import UPDATE_USER_FAVORIS from '../../../graphql/mutations/updateUserFavoris';
import FOOD_IMAGE_RECOGNITION from '../../../graphql/queries/foodImageRecognition';
import RECIPES from '../../../graphql/queries/recipes';

// https://www.derbycityweekend.com/wp-content/uploads/2018/02/Charim-Korean-food.jpg
// https://assets.lightspeedhq.com/img/2019/07/8aac85b2-blog_foodpresentationtipsfromtopchefs.jpg
// https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg

const Upload = (): JSX.Element => {
  const [useField, setUseField] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);
  const [search, setSearchFoodImageRecognition] = useState(false);

  const onError = (error: any): any => console.log(error);
  const onCompleted = (data: any): any => console.log(data);

  const [upload] = useMutation(UPLOAD, {
    onError,
    onCompleted
  });

  const handleChange = ({
    target: {
      files: [file]
    }
  }: any): any => upload({ variables: { file, ref: 'Toto' } });

  const handleSubmit = (event: any): void => {
    event.preventDefault();

    setSearchFoodImageRecognition(true);
  };

  const handleChangeUrl = (event: any): void => setImageUrl(event.target.value);
  const handleChangeCheckbox = (): void => setUseField(!useField);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="checkbox">
          Upload my picture
          <input
            checked={useField}
            type="checkbox"
            id="checkbox"
            onChange={handleChangeCheckbox}
          />
        </label>
      </div>
      {useField ? (
        <input type="file" onChange={handleChange} />
      ) : (
        <input type="text" onChange={handleChangeUrl} />
      )}
      {search && <ImageUrl url={imageUrl} />}
    </form>
  );
};

interface Image {
  url: null | string;
}

const ImageUrl = ({ url }: Image): JSX.Element => {
  // @ts-ignore
  const [ingredients, setIngredients] = useState([]);
  // @ts-ignore
  const [skipRecipesQuery, setSkipRecipesQuery] = useState(true);
  // @ts-ignore
  const foodImageRecognitionQuery = useQuery(FOOD_IMAGE_RECOGNITION, {
    variables: { image: url }
  });
  // @ts-ignore
  const recipesQuery = useQuery(RECIPES, {
    variables: { ingredients: ingredients.toString() },
    skip: skipRecipesQuery
  });

  console.log(recipesQuery.data);

  const onError = (error: any): any => console.log(error);
  const onCompleted = (data: any): any => console.log(data);

  const [updateUserPantries] = useMutation(UPLOAD_USER_PANTRIES, {
    onError,
    onCompleted,
    variables: {
      userId: 1,
      pantries: ingredients
    }
  });

  const handleChange = (item: any): any => {
    const test = [...ingredients, item];
    // @ts-ignore
    setIngredients(test);
  };

  if (foodImageRecognitionQuery.loading) {
    return <div>Chargement ...</div>;
  }

  return (
    <div>
      <ul>
        {foodImageRecognitionQuery.data.foodImageRecognition.map(
          ({ name }: any) => (
            <li key={name}>
              {name}
              <input type="checkbox" onChange={(): any => handleChange(name)} />
            </li>
          )
        )}
      </ul>
      {recipesQuery.data && <Recipes recipes={recipesQuery.data.recipes} />}
      <button type="button" onClick={(): any => setSkipRecipesQuery(false)}>
        Find recipes
      </button>
      <button type="button" onClick={(): any => updateUserPantries()}>
        Save to my pantry
      </button>
    </div>
  );
};

interface Recipe {
  title: string;
}

interface Recipes {
  recipes: any;
}

const Recipes = ({ recipes }: Recipes): JSX.Element => {
  const onError = (error: any): any => console.log(error);
  const onCompleted = (data: any): any => console.log(data);

  const [updateUserFavoris] = useMutation(UPDATE_USER_FAVORIS, {
    onError,
    onCompleted
  });

  return (
    <ul>
      {recipes.map(({ title }: Recipe) => (
        <li>
          {title}
          <button
            type="button"
            onClick={(): any =>
              updateUserFavoris({ variables: { userId: 1, favoris: [title] } })
            }>
            Add to favoris
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Upload;

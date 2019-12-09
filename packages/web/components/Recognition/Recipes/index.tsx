import React from 'react';
import { useMutation } from 'react-apollo';
import UPDATE_USER_FAVORIS from '../../../graphql/mutations/updateUserFavoris';

interface Recipe {
  title: string;
}

interface Recipes {
  recipes: any;
  favoris: any;
  receiveUserFavoris: any;
}

const Recipes = ({
  recipes,
  favoris,
  receiveUserFavoris
}: Recipes): JSX.Element => {
  const onError = (error: any): any => console.log(error);
  const onCompleted = (data: any): any =>
    receiveUserFavoris(data.updateUser.user.favoris);

  const [updateUserFavoris] = useMutation(UPDATE_USER_FAVORIS, {
    onError,
    onCompleted
  });

  const onClick = (title: string): any => {
    const userFavoris: Array<string> = favoris.filter(
      (i: never): boolean => i !== title
    );

    updateUserFavoris({
      variables: { userId: 1, favoris: [...userFavoris, title] }
    });
  };

  return (
    <ul>
      {recipes.map(({ title }: Recipe) => (
        <li>
          {title}
          <button type="button" onClick={(): any => onClick(title)}>
            Add to favoris
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Recipes;

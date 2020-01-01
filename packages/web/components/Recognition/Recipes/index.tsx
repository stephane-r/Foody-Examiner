import React from 'react';
import { useMutation } from 'react-apollo';
import { useSelector } from 'react-redux';
import UPDATE_USER_FAVORIS from '../../../graphql/mutations/updateUserFavoris';

interface Recipe {
  title: string;
}

interface RecipesProps {
  recipes: any;
  favoris: any;
  receiveUserFavoris: any;
}

const Recipes: React.FC<RecipesProps> = ({
  recipes,
  favoris,
  receiveUserFavoris
}) => {
  const onError = (error: any): any => console.log(error);
  const onCompleted = (data: any): any =>
    receiveUserFavoris(data.updateUser.user.favoris);
  // @ts-ignore
  const userId = useSelector(state => state.app.user.id);

  const [updateUserFavoris] = useMutation(UPDATE_USER_FAVORIS, {
    onError,
    onCompleted
  });

  const onClick = (title: string): any => {
    const userFavoris: Array<string> = favoris.filter(
      (i: any): boolean => i !== title
    );

    updateUserFavoris({
      variables: { userId, favoris: [...userFavoris, title] }
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

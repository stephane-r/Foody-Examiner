import React from 'react';
import { useMutation } from 'react-apollo';
import Item from '../Item';
import UPDATE_USER_FAVORIS from '../../../graphql/mutations/updateUserFavoris';

interface FavorisProps {
  favoris: Array<string>;
  test: any;
}

const Favoris = ({ favoris, test }: FavorisProps): JSX.Element => {
  const onError = (error: any): any => console.log(error);
  const onCompleted = (data: any): any => test(data.updateUser.user.favoris);

  const [updateUserFavoris] = useMutation(UPDATE_USER_FAVORIS, {
    onError,
    onCompleted
  });

  const removeFromFavoris = (item: string): any => {
    const favorisUpdated = favoris.filter(test => test !== item);
    updateUserFavoris({ variables: { userId: 1, favoris: favorisUpdated } });
  };

  return (
    <div>
      {favoris.map(item => (
        <Item item={item} removeFromFavoris={removeFromFavoris} />
      ))}
    </div>
  );
};

export default Favoris;

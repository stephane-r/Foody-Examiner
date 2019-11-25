import React from 'react';
import { useMutation } from 'react-apollo';
import UPDATE_USER_FAVORIS from '../../../graphql/mutations/updateUserFavoris';

interface FavorisProps {
  item: string;
}

const Favoris = ({ item }: FavorisProps): JSX.Element => {
  const onError = (error: any): any => console.log(error);
  const onCompleted = (data: any): any => console.log(data);

  const [updateUserFavoris] = useMutation(UPDATE_USER_FAVORIS, {
    onError,
    onCompleted
  });

  return (
    <div>
      {item}
      <button
        type="button"
        onClick={(): any =>
          updateUserFavoris({ variables: { userId: 1, favoris: ['test'] } })
        }>
        Add to favoris
      </button>
    </div>
  );
};

export default Favoris;

import React from 'react';

interface FavorisProps {
  item: string;
  removeFromFavoris: (item: string) => any;
}

const Favoris = ({ item, removeFromFavoris }: FavorisProps): JSX.Element => (
  <div>
    {item}
    <button type="button" onClick={(): any => removeFromFavoris(item)}>
      Remove
    </button>
  </div>
);

export default Favoris;

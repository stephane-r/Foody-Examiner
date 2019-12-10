import React from 'react';
import { RemoveFavoris } from '../../../interfaces';

interface FavorisProps {
  item: string;
  removeFromFavoris: RemoveFavoris;
}

const Favoris: React.FC<FavorisProps> = ({ item, removeFromFavoris }) => (
  <div>
    {item}
    <button type="button" onClick={(): any => removeFromFavoris(item)}>
      Remove
    </button>
  </div>
);

export default Favoris;

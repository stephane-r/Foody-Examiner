import React from 'react';
import Item from '../Item';

interface FavorisProps {
  favoris: Array<string>;
}

const Favoris = ({ favoris }: FavorisProps): JSX.Element => (
  <div>
    {favoris.map(item => (
      <Item item={item} />
    ))}
  </div>
);

export default Favoris;

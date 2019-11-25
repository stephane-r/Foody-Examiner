import React from 'react';
import { useApolloClient } from 'react-apollo';
import Item from '../Item';

interface FavorisProps {
  favoris: Array<string>;
}

const Favoris = ({ favoris }: FavorisProps): JSX.Element => {
  const client = useApolloClient();

  console.log(client);

  return (
    <div>
      {favoris.map(item => (
        <Item item={item} />
      ))}
    </div>
  );
};

export default Favoris;

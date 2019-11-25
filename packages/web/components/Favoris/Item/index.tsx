import React from 'react';

interface FavorisProps {
  item: string;
}

const Favoris = ({ item }: FavorisProps): JSX.Element => <div>{item}</div>;

export default Favoris;

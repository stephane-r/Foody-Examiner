import React from 'react';

interface PantryProps {
  item: string;
}

const Pantry = ({ item }: PantryProps): JSX.Element => <div>{item}</div>;

export default Pantry;

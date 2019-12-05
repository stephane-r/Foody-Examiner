import React from 'react';

interface PantryProps {
  item: string;
  removeFromPantries: (item: string) => any;
}

const Pantry = ({ item, removeFromPantries }: PantryProps): JSX.Element => (
  <div>
    {item}
    <button type="button" onClick={(): any => removeFromPantries(item)}>
      Remove
    </button>
  </div>
);

export default Pantry;

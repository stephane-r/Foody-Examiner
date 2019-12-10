import React from 'react';
import { RemovePantries } from '../../../interfaces';

interface PantryProps {
  item: string;
  removeFromPantries: RemovePantries;
}

const Pantry: React.FC<PantryProps> = ({ item, removeFromPantries }) => (
  <div>
    {item}
    <button type="button" onClick={(): any => removeFromPantries(item)}>
      Remove
    </button>
  </div>
);

export default Pantry;

import React from 'react';
import Pantry from '../Item';

interface PantriesProps {
  pantries: Array<string>;
}

const Pantries = ({ pantries }: PantriesProps): JSX.Element => (
  <div>
    {pantries.map(item => (
      <Pantry item={item} />
    ))}
  </div>
);

export default Pantries;

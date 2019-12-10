import React from 'react';
import { useMutation } from 'react-apollo';
import Pantry from '../Item';
import UPDATE_USER_PANTRIES from '../../../graphql/mutations/updateUserPantries';
import { PantriesTypes, UpdatePantries } from '../../../interfaces';

interface PantriesProps {
  pantries: PantriesTypes;
  updatePantries: UpdatePantries;
}

const Pantries: React.FC<PantriesProps> = ({ pantries, updatePantries }) => {
  const onError = (error: any): any => console.log(error);
  const onCompleted = (data: any): any =>
    updatePantries(data.updateUser.user.pantries);

  const [updateUserPantries] = useMutation(UPDATE_USER_PANTRIES, {
    onError,
    onCompleted
  });

  const removeFromPantries = (item: string): any => {
    const pantriesUpdated = pantries.filter(test => test !== item);
    updateUserPantries({ variables: { userId: 1, pantries: pantriesUpdated } });
  };

  return (
    <div>
      {pantries.map(item => (
        <Pantry item={item} removeFromPantries={removeFromPantries} />
      ))}
    </div>
  );
};

export default Pantries;

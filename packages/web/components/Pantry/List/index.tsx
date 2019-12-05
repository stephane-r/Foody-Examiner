import React from 'react';
import { useMutation } from 'react-apollo';
import Pantry from '../Item';
import UPDATE_USER_PANTRIES from '../../../graphql/mutations/updateUserPantries';

interface PantriesProps {
  pantries: Array<string>;
  test: any;
}

const Pantries = ({ pantries, test }: PantriesProps): JSX.Element => {
  const onError = (error: any): any => console.log(error);
  const onCompleted = (data: any): any => test(data.updateUser.user.pantries);

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

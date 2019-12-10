import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-apollo';
import { Profil as ProfilTypes } from '../../interfaces';
import ME from '../../graphql/queries/me';

interface ProfilProps extends ProfilTypes {
  receiveUser: any;
  logout: () => any;
}

const Profil: React.FC<ProfilProps> = ({
  user,
  token,
  receiveUser,
  logout
}) => {
  const [fetchUser, setFetchUser] = useState(false);

  const onCompleted = (data: any): any => receiveUser(token, data.userMe);

  useQuery(ME, {
    skip: !fetchUser,
    onCompleted
  });

  useEffect(() => {
    if (user !== null) {
      setFetchUser(true);
    }
  }, [user]);

  if (user === null) {
    return <div />;
  }

  return (
    <div>
      {user.username}
      <button type="button" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Profil;

import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-apollo';
import { User } from '../../interfaces';
import ME from '../../graphql/queries/me';

interface ProfilProps {
  user: User | null;
  token: string | null;
  receiveUser: any;
  logout: any;
}

const Profil = ({
  user,
  token,
  receiveUser,
  logout
}: ProfilProps): JSX.Element => {
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

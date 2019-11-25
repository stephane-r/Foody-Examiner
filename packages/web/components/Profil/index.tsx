import React from 'react';
import { User } from '../../interfaces';

interface ProfilProps {
  user: User | null;
  logout: any;
}

const Profil = ({ user, logout }: ProfilProps): JSX.Element => {
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

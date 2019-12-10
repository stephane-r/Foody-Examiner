import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Profil from '../../components/Profil';
import { Store } from '../../store/types';
import { logout, receiveUser } from '../../store/app/actions';
import { Profil as ProfilTypes, User } from '../../interfaces';

const mapStateToProps = (state: Store): ProfilTypes => {
  const { user, token } = state.app;

  return { user, token };
};

interface DispatchProps {
  receiveUser: (token: string, user: User) => any;
  logout: () => any;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  receiveUser: (token, user): any => dispatch(receiveUser(token, user)),
  logout: (): any => dispatch(logout())
});

const ProfilContainer = connect(mapStateToProps, mapDispatchToProps)(Profil);

export default ProfilContainer;

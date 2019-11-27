import { connect } from 'react-redux';
import Profil from '../../components/Profil';
import { Store } from '../../store/types';
import { logout, receiveUser } from '../../store/app/actions';
import { User } from '../../interfaces';

interface MapStateToProps {
  user: User | null;
  token: string | null;
}

const mapStateToProps = (state: Store): MapStateToProps => {
  const { user, token } = state.app;

  return { user, token };
};

interface MapDispatchToProps {
  receiveUser: Function;
  logout: Function;
}

const mapDispatchToProps = (dispatch: Function): MapDispatchToProps => ({
  receiveUser: (token: string, user: User): Function =>
    dispatch(receiveUser(token, user)),
  logout: (): Function => dispatch(logout())
});

const ProfilContainer = connect(mapStateToProps, mapDispatchToProps)(Profil);

export default ProfilContainer;

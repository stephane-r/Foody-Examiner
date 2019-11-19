import { connect } from 'react-redux';
import Profil from '../../components/Profil';
import { Store } from '../../store/types';
import { logout } from '../../store/app/actions';
import { User } from '../../store/app/types';

interface MapStateToProps {
  user: User | null;
}

const mapStateToProps = (state: Store): MapStateToProps => {
  const { user } = state.app;

  return { user };
};

interface MapDispatchToProps {
  logout: Function;
}

const mapDispatchToProps = (dispatch: Function): MapDispatchToProps => ({
  logout: (): Function => dispatch(logout())
});

const ProfilContainer = connect(mapStateToProps, mapDispatchToProps)(Profil);

export default ProfilContainer;

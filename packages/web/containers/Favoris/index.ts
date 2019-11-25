import { connect } from 'react-redux';
import Favoris from '../../components/Favoris/List';
import { Store } from '../../store/types';
import { User } from '../../interfaces';

interface MapStateToProps {
  user: User | null;
}

const mapStateToProps = (state: Store): MapStateToProps => {
  const { user } = state.app;

  return { favoris: user ? user.favoris : [] };
};

const FavorisContainer = connect(mapStateToProps)(Favoris);

export default FavorisContainer;

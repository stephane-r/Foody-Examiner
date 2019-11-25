import { connect } from 'react-redux';
import Favoris from '../../components/Favoris/List';
import { Store } from '../../store/types';
import { User } from '../../interfaces';
import { updateUserFavoris } from '../../store/app/actions';

interface MapStateToProps {
  user: User | null;
}

const mapStateToProps = (state: Store): MapStateToProps => {
  const { user } = state.app;

  return { favoris: user ? user.favoris : [] };
};

const mapDispatchToProps = (dispatch): any => ({
  test: (favoris): any => dispatch(updateUserFavoris(favoris))
});

const FavorisContainer = connect(mapStateToProps, mapDispatchToProps)(Favoris);

export default FavorisContainer;

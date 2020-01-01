import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Favoris from '../../components/Favoris/List';
import { Store } from '../../store/types';
import { setUserFavoris } from '../../store/app/actions';
import { FavorisTypes, UpdatePantries } from '../../interfaces';

const mapStateToProps = ({ app: { user } }: Store): FavorisTypes => ({
  userId: user?.id ?? null,
  favoris: user?.favoris ?? []
});

interface DispatchProps {
  updateFavoris: UpdatePantries;
}

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({
  updateFavoris: (favoris): Dispatch => dispatch(setUserFavoris(favoris))
});

const FavorisContainer = connect<FavorisTypes, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(Favoris);

export default FavorisContainer;

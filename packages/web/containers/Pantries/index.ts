import { connect } from 'react-redux';
import Pantries from '../../components/Pantry/List';
import { Store } from '../../store/types';
import { User } from '../../interfaces';
import { updateUserPantries } from '../../store/app/actions';

interface MapStateToProps {
  user: User | null;
}

const mapStateToProps = (state: Store): MapStateToProps => {
  const { user } = state.app;

  return { pantries: user ? user.pantries : [] };
};

const mapDispatchToProps = (dispatch): any => ({
  test: (pantries): any => dispatch(updateUserPantries(pantries))
});

const PantriesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pantries);

export default PantriesContainer;

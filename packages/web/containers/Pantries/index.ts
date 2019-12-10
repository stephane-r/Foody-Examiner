import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Pantries from '../../components/Pantry/List';
import { Store } from '../../store/types';
import { updateUserPantries } from '../../store/app/actions';
import { PantriesTypes } from '../../interfaces';
import { UpdateUserPantries } from '../../store/app/types';

const mapStateToProps = (state: Store): PantriesTypes => {
  const { user } = state.app;

  return { pantries: user?.pantries ?? [] };
};

interface DispatchProps {
  updatePantries: (pantries: PantriesTypes) => Dispatch;
}

const mapDispatchToProps = (dispatch): DispatchProps => ({
  updatePantries: (pantries): UpdateUserPantries =>
    dispatch(updateUserPantries(pantries))
});

const PantriesContainer = connect<PantriesTypes, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(Pantries);

export default PantriesContainer;

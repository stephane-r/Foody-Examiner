import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Upload from '../../components/Upload';
import { Store } from '../../store/types';
import {
  User,
  ReceiveUserPantries,
  ReceiveUserFavoris
} from '../../interfaces';
import { setUserPantries, setUserFavoris } from '../../store/app/actions';

const mapStateToProps = (state: Store): User => {
  const { user } = state.app;

  return {
    pantries: user?.pantries ?? [],
    favoris: user?.favoris ?? []
  };
};

interface DispatchProps {
  receiveUserPantries: ReceiveUserPantries;
  receiveUserFavoris: ReceiveUserFavoris;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  receiveUserPantries: (pantries): Dispatch =>
    dispatch(setUserPantries(pantries)),
  receiveUserFavoris: (favoris): Dispatch => dispatch(setUserFavoris(favoris))
});

const RecognitionUploadContainer = connect<User, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(Upload);

export default RecognitionUploadContainer;

import { connect } from 'react-redux';
import Upload from '../../components/Forms/Upload';
import { Store } from '../../store/types';
import { User } from '../../interfaces';
import { setUserPantries, setUserFavoris } from '../../store/app/actions';

interface MapStateToProps {
  user: User | null;
}

const mapStateToProps = (state: Store): MapStateToProps => {
  const { user } = state.app;

  return {
    pantries: user ? user.pantries : [],
    favoris: user ? user.favoris : []
  };
};

const mapDispatchToProps = (dispatch): any => ({
  receiveUserPantries: (pantries): any => dispatch(setUserPantries(pantries)),
  receiveUserFavoris: (favoris): any => dispatch(setUserFavoris(favoris))
});

const RecognitionUploadContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Upload);

export default RecognitionUploadContainer;

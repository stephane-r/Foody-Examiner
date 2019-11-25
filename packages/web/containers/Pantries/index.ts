import { connect } from 'react-redux';
import Pantries from '../../components/Pantry/List';
import { Store } from '../../store/types';
import { User } from '../../store/app/types';

interface MapStateToProps {
  user: User | null;
}

const mapStateToProps = (state: Store): MapStateToProps => {
  const { user } = state.app;

  return { pantries: user ? user.pantries : [] };
};

const PantriesContainer = connect(mapStateToProps)(Pantries);

export default PantriesContainer;

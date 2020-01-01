import { connect } from 'react-redux';
import { Dispatch } from 'react';
import LoginForm from '../../components/Forms/Login';
import { ReceiveUserAction } from '../../store/app/types';
import { receiveUser, loginSuccess } from '../../store/app/actions';

interface DispatchProps {
  receiveUser: (props: ReceiveUserAction) => Dispatch;
}

const mapDispatchToProps = (dispatch: Function): DispatchProps => ({
  receiveUser: ({ jwt, user }: ReceiveUserAction): Dispatch => {
    dispatch(receiveUser(jwt, user));
    dispatch(loginSuccess());
  }
});

const LoginFormContainer = connect<null, DispatchProps>(
  null,
  mapDispatchToProps
)(LoginForm);

export default LoginFormContainer;

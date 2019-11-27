import { connect } from 'react-redux';
import LoginForm from '../../pages/Login/form';
import { ReceiveUserAction } from '../../store/app/types';
import { receiveUser, loginSuccess } from '../../store/app/actions';

const mapDispatchToProps = (dispatch: Function): Record<string, any> => ({
  receiveUser: ({ jwt, user }: ReceiveUserAction): Funtion => {
    dispatch(receiveUser(jwt, user));
    dispatch(loginSuccess());
  }
});

const LoginFormContainer = connect(null, mapDispatchToProps)(LoginForm);

export default LoginFormContainer;

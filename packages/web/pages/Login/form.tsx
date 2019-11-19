import React from 'react';
import Link from 'next/link';
import { useMutation } from 'react-apollo';
import useForm from 'react-hook-form';
import LOGIN from '../../graphql/mutations/login';
import loginSchema, { LoginSchemaTypes } from './form.schema';

const LoginForm: React.FC = props => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: loginSchema
  });

  const onError = (error): Function => console.log(error);
  const onCompleted = (data): Function => props.receiveUser(data.login);

  const [login] = useMutation(LOGIN, {
    onError,
    onCompleted
  });

  const onSubmit = (variables: LoginSchemaTypes): Function =>
    login({ variables });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" name="identifier" ref={register} />
      {errors.identifier && <div>This field is required</div>}
      <input type="password" name="password" ref={register} />
      {errors.password && <div>This field is required</div>}
      <button type="submit">login</button>
      <hr />
      <Link href="/inscription">
        <a>Register</a>
      </Link>
    </form>
  );
};

export default LoginForm;

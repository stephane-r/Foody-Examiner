/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { useMutation } from 'react-apollo';
import useForm from 'react-hook-form';
import LOGIN from '../../../graphql/mutations/login';
import loginSchema, { LoginSchemaTypes } from './index.schema';

interface LoginFormProps {
  receiveUser: (user: any) => any;
}

const LoginForm: React.FC<LoginFormProps> = ({ receiveUser }) => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: loginSchema
  });

  const onError = (error: any): any => console.log(error);
  const onCompleted = (data: any): any => receiveUser(data.login);

  const [login] = useMutation(LOGIN, {
    onError,
    onCompleted
  });

  // @ts-ignore
  const onSubmit = (variables: LoginSchemaTypes): any => login({ variables });

  return (
    // @ts-ignore
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

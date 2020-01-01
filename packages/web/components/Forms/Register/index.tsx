import React from 'react';
import useForm from 'react-hook-form';
import { useMutation } from 'react-apollo';
import REGISTER from '../../../graphql/mutations/register';
import registerSchema, { RegisterSchemaTypes } from './index.schema';

const RegisterForm: React.FC = () => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: registerSchema
  });

  const onError = (error: any): any => console.log(error);
  const onCompleted = (data: any): any => console.log(data);

  const [registerr] = useMutation(REGISTER, {
    onError,
    onCompleted
  });

  const onSubmit = (variables: RegisterSchemaTypes): Function =>
    // @ts-ignore
    registerr({ variables });

  return (
    // @ts-ignore
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="username" ref={register} />
      {errors.username && <div>This field is required</div>}
      <input type="email" name="email" ref={register} />
      {errors.email && <div>This field is required</div>}
      <input type="password" name="password" ref={register} />
      {errors.password && <div>This field is required</div>}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;

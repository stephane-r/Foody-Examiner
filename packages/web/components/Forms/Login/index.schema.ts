import * as yup from 'yup';

export interface LoginSchemaTypes {
  identifier: string;
  password: string;
}

const loginSchema = yup.object<LoginSchemaTypes>().shape({
  identifier: yup
    .string()
    .email()
    .required(),
  password: yup.string().required()
});

export default loginSchema;

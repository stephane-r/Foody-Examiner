import * as yup from 'yup';

export interface RegisterSchemaTypes {
  username: string;
  email: string;
  password: string;
}

const registerSchema = yup.object<RegisterSchemaTypes>().shape({
  username: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
  password: yup.string().required()
});

export default registerSchema;

import * as Yup from 'yup';

const loginValidationSchema = Yup.object({
  username: Yup.string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters'),

  password: Yup.string()
    .required('Password is required')
    .min(1, 'Password must be at least 6 characters')
});

export default loginValidationSchema;
import * as Yup from 'yup';

const registerValidationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be at most 20 characters')
    .required('Username is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(1, 'Password must be at least 6 characters')
    .required('Password is required')
});

export default registerValidationSchema;

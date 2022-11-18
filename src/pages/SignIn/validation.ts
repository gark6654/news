import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().required('Email is required field'),
  password: yup.string().required('Password is required field'),
  remember: yup.boolean(),
});

export default schema;

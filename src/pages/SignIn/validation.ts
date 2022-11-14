import * as yup from 'yup';

const schema = yup.object().shape({
  username: yup.string().required('Username is required field'),
  password: yup.string().required('Password is required field'),
});

export default schema;

import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().required('Email is required field').matches(
    /^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
    'Entered email does’t match the template.',
  ),
  password: yup.string().required('Password is required field').matches(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]).{8,}$/,
    'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
  ),
  confirm: yup.string().oneOf([yup.ref('password'), null], 'Confirmed password does’t match the entered password'),
});

export default schema;

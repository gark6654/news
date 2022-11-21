import * as yup from 'yup';

const schema = yup.object().shape({
  firstname: yup.string().required('Firstname is required field').matches(
    /^[a-zA-Z]+$/,
    'Firstname can’t contain numbers, symbols',
  ),
  lastname: yup.string().required('Lastname is required field').matches(
    /^[a-zA-Z]+$/,
    'Lastname can’t contain numbers, symbols',
  ),
  website: yup.string(),
  bio: yup.string().min(10, 'Minimal length of bio is 10').max(150, 'Maximal length of bio is 150'),
});

export default schema;


import * as Yup from 'yup';

export const shemaLogin = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, 'Too Short!, min 8 characters')
    .max(32, 'Too Long!, max 8 characters')
    .required('Required'),
});
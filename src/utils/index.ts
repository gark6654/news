import { InputTypes } from '@types';

export const getKeyboardType = (inputType: InputTypes) => {
  switch (inputType) {
    case 'text':
      return 'default';
    case 'email':
      return 'email-address';
    case 'phone':
      return 'phone-pad';
    case 'number':
      return 'numeric';
    case 'password':
      return 'default';
    default:
      return 'default';
  }
};

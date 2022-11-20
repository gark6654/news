interface ISignInForm {
  email: string;
  password: string;
  remember: boolean;
}

interface ISignUpForm {
  email: string;
  password: string;
  confirm: string;
}

export type {
  ISignInForm,
  ISignUpForm,
};

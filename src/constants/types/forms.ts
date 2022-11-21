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

interface IFillForm {
  firstname: string;
  lastname: string;
  bio?: string;
  website?: string;
}

export type {
  ISignInForm,
  ISignUpForm,
  IFillForm,
};

interface ISignInForm {
  username: string;
  password: string;
  remember: boolean;
}

type ControlNameType = keyof ISignInForm;

export type {
  ISignInForm,
  ControlNameType,
};

export type RegistrationFormValues = {
  email: string;
  password: string;
};

export type RegistrationFormErrors = Record<keyof RegistrationFormValues, string>;

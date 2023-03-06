import { createContext, useContext } from 'react';
import { Control } from 'react-hook-form';

import { SignInAdmin } from './admin_schema';

import { $WithChildren } from '@/types';

type SignInProviderProps = {
  control: Control<SignInAdmin, any>;
  isSubmitting: boolean;
  onSubmit: () => void;
};

const SignInContext = createContext({} as SignInProviderProps);

export function SignInFormProvider({
  control,
  isSubmitting,
  onSubmit,
  children,
}: $WithChildren<SignInProviderProps>) {
  return (
    <SignInContext.Provider value={{ control, onSubmit, isSubmitting }}>
      {children}
    </SignInContext.Provider>
  );
}

export function useSignInForm() {
  return useContext(SignInContext);
}

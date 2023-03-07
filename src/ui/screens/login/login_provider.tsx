import { createContext, useContext } from 'react';
import { Control } from 'react-hook-form';

import { LoginAdmin } from './admin_schema';

import { $WithChildren } from '@/types';

type LoginProviderProps = {
  control: Control<LoginAdmin, any>;
  isSubmitting: boolean;
  onSubmit: () => void;
};

const LoginContext = createContext({} as LoginProviderProps);

export function LoginFormProvider({
  control,
  isSubmitting,
  onSubmit,
  children,
}: $WithChildren<LoginProviderProps>) {
  return (
    <LoginContext.Provider value={{ control, onSubmit, isSubmitting }}>
      {children}
    </LoginContext.Provider>
  );
}

export function useSignInForm() {
  return useContext(LoginContext);
}

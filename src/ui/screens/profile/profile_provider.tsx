import { createContext, useContext } from 'react';
import { Control } from 'react-hook-form';

import { Profile } from './profile_schema';

import { $WithChildren } from '@/types';

type ProfileProviderProps = {
  control: Control<Profile, any>;
  isSubmitting: boolean;
  onSubmit: () => void;
};

const ProfileContext = createContext({} as ProfileProviderProps);

export function ProfileFormProvider({
  control,
  isSubmitting,
  onSubmit,
  children,
}: $WithChildren<ProfileProviderProps>) {
  return (
    <ProfileContext.Provider value={{ control, onSubmit, isSubmitting }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfileForm() {
  return useContext(ProfileContext);
}

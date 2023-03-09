import { createContext, useContext } from 'react';
import { Control } from 'react-hook-form';

import { PlayerFormType } from './player_schema';

import { $WithChildren } from '@/types';

type PlayerProviderProps = {
  control: Control<PlayerFormType, any>;
  isSubmitting: boolean;
  onSubmit: () => void;
};

const PlayerContext = createContext({} as PlayerProviderProps);

export function PlayerFormProvider({
  control,
  isSubmitting,
  onSubmit,
  children,
}: $WithChildren<PlayerProviderProps>) {
  return (
    <PlayerContext.Provider value={{ control, onSubmit, isSubmitting }}>
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayerForm() {
  return useContext(PlayerContext);
}

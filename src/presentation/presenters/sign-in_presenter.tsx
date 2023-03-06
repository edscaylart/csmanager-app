import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Alert } from 'react-native';

import { supabase } from '@/db/client';
import { SignInScreen } from '@/ui/screens';
import {
  SignInAdmin,
  SignInAdminSchema,
} from '@/ui/screens/sign-in/admin_schema';
import { SignInFormProvider } from '@/ui/screens/sign-in/sign-in_provider';

export function SignInPresenter() {
  const { control, handleSubmit, formState } = useForm<SignInAdmin>({
    resolver: zodResolver(SignInAdminSchema),
  });

  const handleSignInUser = async (data: SignInAdmin) => {
    const { error } = await supabase.auth.signInWithPassword(data);
    if (error) Alert.alert(error.message);
  };

  return (
    <SignInFormProvider
      control={control}
      isSubmitting={formState.isSubmitting}
      onSubmit={handleSubmit(handleSignInUser)}>
      <SignInScreen />
    </SignInFormProvider>
  );
}

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Alert } from 'react-native';

import { supabase } from '@/db/client';
import { LoginScreen } from '@/ui/screens';
import { LoginAdmin, LoginAdminSchema } from '@/ui/screens/login/admin_schema';
import { LoginFormProvider } from '@/ui/screens/login/login_provider';

export function LoginPresenter() {
  const { control, handleSubmit, formState } = useForm<LoginAdmin>({
    resolver: zodResolver(LoginAdminSchema),
  });

  const handleSignInUser = async (data: LoginAdmin) => {
    const { error } = await supabase.auth.signInWithPassword(data);
    if (error) Alert.alert(error.message);
  };

  return (
    <LoginFormProvider
      control={control}
      isSubmitting={formState.isSubmitting}
      onSubmit={handleSubmit(handleSignInUser)}>
      <LoginScreen />
    </LoginFormProvider>
  );
}

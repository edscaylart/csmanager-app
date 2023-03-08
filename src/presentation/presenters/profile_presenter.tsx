import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { useAuth } from '@/auth/provider';
import { supabase } from '@/db/client';
import { ProfileScreen } from '@/ui/screens';
import { ProfileFormProvider } from '@/ui/screens/profile/profile_provider';
import { Profile, ProfileSchema } from '@/ui/screens/profile/profile_schema';

export function ProfilePresenter() {
  const { user } = useAuth();

  const { control, handleSubmit, formState } = useForm<Profile>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      name: user?.user_metadata?.name ?? '',
      gameType: user?.user_metadata?.gameType ?? '',
    },
  });

  const handleUpdateProfile = async (data: Profile) => {
    const { error } = await supabase.auth.updateUser({ data });
  };

  const handleLogout = () => {
    supabase.auth.signOut();
  };

  return (
    <ProfileFormProvider
      control={control}
      isSubmitting={formState.isSubmitting}
      onSubmit={handleSubmit(handleUpdateProfile)}>
      <ProfileScreen onExitPress={handleLogout} />
    </ProfileFormProvider>
  );
}

import { Session } from '@supabase/supabase-js';
import { useRouter, useSegments } from 'expo-router';
import { createContext, useContext, useEffect, useState } from 'react';

import { supabase } from '@/db/client';
import { $WithChildren } from '@/types';

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

function useProtectedRoute(session: Session | null) {
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)';

    if (session?.user && inAuthGroup) {
      router.replace('/');
    } else if (!session?.user && !inAuthGroup) {
      router.replace('intro');
    }
  });
}

export function Provider(props: $WithChildren) {
  const [session, setSession] = useState<Session | null>(null);

  useProtectedRoute(session);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <AuthContext.Provider value={null}>{props.children}</AuthContext.Provider>
  );
}

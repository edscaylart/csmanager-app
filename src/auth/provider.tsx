import { Session, User } from '@supabase/supabase-js';
import { useRouter, useSegments } from 'expo-router';
import { createContext, useContext, useEffect, useState } from 'react';

import { supabase } from '@/db/client';
import { $WithChildren } from '@/types';

type AuthData = {
  user?: User;
};

const AuthContext = createContext({} as AuthData);

export function useAuth() {
  return useContext(AuthContext);
}

function useProtectedRoute(session: Session | null) {
  const rootSegment = useSegments()[0];
  const router = useRouter();

  useEffect(() => {
    if (session?.user && rootSegment !== '(app)') {
      router.replace('main');
    } else if (!session?.user && rootSegment !== '(auth)') {
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
    <AuthContext.Provider value={{ user: session?.user }}>
      {props.children}
    </AuthContext.Provider>
  );
}

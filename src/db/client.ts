import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON } from 'react-native-dotenv';

const url = SUPABASE_URL ?? process.env.SUPABASE_URL;
const anonKey = SUPABASE_ANON ?? process.env.SUPABASE_ANON;

export const supabase = createClient(url, anonKey, {
  auth: {
    storage: AsyncStorage as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

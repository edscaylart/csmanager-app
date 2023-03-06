import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js'
import Constants from 'expo-constants';

const URL = Constants.expoConfig?.extra?.supabaseUrl;
const ANON_KEY = Constants.expoConfig?.extra?.supabaseAnon;

export const supabase = createClient(URL, ANON_KEY, {
  auth: {
    storage: AsyncStorage as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})

// lib/supabaseClient.js

import { createClient } from '@supabase/supabase-js';

// 🧠 MERN Parallel: This is like connecting to MongoDB with mongoose.connect()
// Supabase uses a URL and anon/public key for client-side access

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://epxxbwopdahxvekzzfoo.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVweHhid29wZGFoeHZla3p6Zm9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4NjYzMzksImV4cCI6MjA1NDQ0MjMzOX0.rosbePFfBgd1g6CisxTA55pBsubfm-4PpQPxcP0VGUw";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
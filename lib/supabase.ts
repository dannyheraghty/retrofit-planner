import { createClient, type SupabaseClient } from "@supabase/supabase-js";

type JsonValue = string | number | boolean | null | { [key: string]: JsonValue } | JsonValue[];

export type Database = {
  public: {
    Tables: {
      leads: {
        Row: Record<string, JsonValue>;
        Insert: Record<string, JsonValue>;
        Update: Record<string, JsonValue>;
      };
    };
  };
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

let browserClient: SupabaseClient<Database> | null = null;

export function getSupabaseClient() {
  if (!isSupabaseConfigured) {
    throw new Error("Supabase environment variables are missing.");
  }

  if (!browserClient) {
    browserClient = createClient<Database>(supabaseUrl!, supabaseAnonKey!);
  }

  return browserClient;
}

import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Create a placeholder client during build time when env vars aren't available
function createSupabaseClient(): SupabaseClient {
    if (!supabaseUrl || !supabaseAnonKey) {
        // Return a mock client for build time - will be replaced at runtime
        console.warn('Supabase environment variables not set. Using placeholder client.')
        return createClient('https://placeholder.supabase.co', 'placeholder-key')
    }
    return createClient(supabaseUrl, supabaseAnonKey)
}

export const supabase = createSupabaseClient()

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'Supabase env vars are missing. Copy .env.example to .env and fill in ' +
    'REACT_APP_SUPABASE_URL / REACT_APP_SUPABASE_ANON_KEY from your Supabase project settings. ' +
    'Auth calls will fail until then.'
  )
}

// Fall back to placeholders so createClient doesn't throw and the rest of the
// site still renders when Supabase isn't configured yet.
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-anon-key'
)

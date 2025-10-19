import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nouvwddnrqwenmiukaee.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vdXZ3ZGRucnF3ZW5taXVrYWVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA4OTkyNTQsImV4cCI6MjA3NjQ3NTI1NH0.1rccItuvlhY3dHBpFYgSSwaeA4-fj2FcmL4ZBRtGOzU'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)


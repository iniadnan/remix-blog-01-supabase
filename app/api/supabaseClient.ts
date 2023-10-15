import { createClient } from '@supabase/supabase-js'

// WILL BE USE .ENV LATER!
const supabaseUrl: string = "https://vfkbqzbgkvktbyiudlay.supabase.co"
const supabaseKey: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZma2JxemJna3ZrdGJ5aXVkbGF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI2Njg1NTYsImV4cCI6MjAwODI0NDU1Nn0.vn8gN0sc8HAVTAnuOUwsATCtPj68mMUiQQ_EMtJfdBk"

const SUPABASE = createClient(supabaseUrl, supabaseKey)

export default SUPABASE
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jb21pcmh6a21icm5ubGF5dW1qIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMjAzMjc2MCwiZXhwIjoyMDQ3NjA4NzYwfQ.7drVi7gPfp2Z5ch7wKdkIJlX8XV1zcSmb-jkXV_imSA"
  // import.meta.env.VITE_SUPABASE_ANON_KEY
);

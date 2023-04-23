// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = "https://sniowlhlpwhdxlfgighm.supabase.co";
// const supabaseKey = process.env.SUPABASE_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

// export default supabase;

import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://sniowlhlpwhdxlfgighm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNuaW93bGhscHdoZHhsZmdpZ2htIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIyNDYxNDgsImV4cCI6MTk5NzgyMjE0OH0.8LhT3Xr-33i9pmQUi4l42cd_7NqN7hzWLJytuPTHfHU"
);

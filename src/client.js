import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cocjqmogbzhduabfrtpr.supabase.co";
const supabaseKey = process.env.REACT_APP_API_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
 
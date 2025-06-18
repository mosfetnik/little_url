import {createClient} from "@supabase/supabase-js";

export const supabaseUrl = import.meta.env.VITE_SUPERBASE_URL;
const supabaseKey = import.meta.env.VITE_SUPERBASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const { data, error } = await supabase
  .storage
  .from('<bucket-name>')
  .getPublicUrl('<file-path>')

console.log(data?.publicUrl, error)

export default supabase;

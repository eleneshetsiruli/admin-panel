import { supabase } from "../../supabase/account";

export const fetchBlogById = async (id: string | undefined) => {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

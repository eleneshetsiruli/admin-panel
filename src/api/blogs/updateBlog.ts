import { supabase } from "../../supabase/account";

export const updateBlog = async (
  id: string,
  title_en: string | undefined,
  description_en: string | undefined,
) => {
  const { error } = await supabase
    .from("blogs")
    .update({ title_en, description_en })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
};

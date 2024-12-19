import { supabase } from "../../supabase/account";

export const updateBlog = async ({
  id,
  title_en,
  description_en,
}: {
  id: string;
  title_en: string;
  description_en: string;
}): Promise<void> => {
  const { error } = await supabase
    .from("blogs")
    .update({ title_en, description_en })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
};

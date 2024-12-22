import { supabase } from "../../supabase/account";
import { UpdateBlogResponse } from "./types";

export const updateBlog = async (
  id: string,
  title_en: string | undefined,
  description_en: string | undefined,
): Promise<UpdateBlogResponse> => {
  const { error } = await supabase
    .from("blogs")
    .update({ title_en, description_en })
    .eq("id", id)
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return {
    success: true,
    message: "Blog updated successfully",
  };
};

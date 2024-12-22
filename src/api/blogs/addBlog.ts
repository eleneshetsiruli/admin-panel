import { Blog } from "../../pages/blogs/interfaces";
import { supabase } from "../../supabase/account";

export const addSingleBlog = async (values: Blog) => {
  const { title_en, description_en } = values;

  const { data, error } = await supabase
    .from("blogs")
    .insert([{ title_en, description_en }]);

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

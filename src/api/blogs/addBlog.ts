import { supabase } from "../../supabase/account";

export const addSingleBlog = async (values: {
  title_en: string;
  description_en: string;
}) => {
  const { title_en, description_en } = values;

  const { data, error } = await supabase
    .from("blogs")
    .insert([{ title_en, description_en }]);

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

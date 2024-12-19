import { supabase } from "../../supabase/account";
import { message } from "antd";

export const createUser = async (email: string, phone: string) => {
  try {
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      phone,
    });

    if (error) {
      console.error(error);
      message.error(`Error creating user: ${error.message}`);
      return;
    }

    message.success(`User with email ${email} created successfully!`);
    return data;
  } catch (err) {
    console.error(err);
    message.error("An unexpected error occurred.");
  }
};

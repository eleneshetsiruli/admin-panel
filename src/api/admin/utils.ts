import { User } from "@supabase/supabase-js";
import dayjs from "dayjs";

export const mapUsersListForAdmin = (users: User[]) => {
  return users.map((user) => ({
    email: user?.email,
    createdAt: user?.created_at,
    phone: user?.phone,
    lastSignIn: user?.last_sign_in_at
      ? dayjs(user?.last_sign_in_at).format("YYYY-MM-DD HH:mm")
      : null,
    id: user?.id,
  }));
};

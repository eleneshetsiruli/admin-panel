import { User } from "@supabase/supabase-js";

export interface LoginResponse {
  token: string;
  user: User;
}

export interface Sessions {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: string;
  user: User;
}

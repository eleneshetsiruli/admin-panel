export interface User {
  aud: string;
  confirmation_sent_at: string;
  confirmed_at: string;
  created_at: string;
  email: string;
  email_confirmed_at: string;
  id: string;
  identities: null;
  is_anonymous: boolean;
  last_sign_in_at: string;
  phone: string;
  role: string;
  updated_at: string;
}

export interface FieldType {
  email?: string;
  phone?: string;
}

export interface UpdateHotelPayload {
  id: string;
  values: Record<string, any>;
}

export type Hotel = {
  id: string;
  name_en: string;
  name_ka: string;
  description_en: string;
  created_at: string;
  country_en: string;
  country_ka: string;
  description_ka: string;
  rating: string;
  price: string;
  image: string;
};

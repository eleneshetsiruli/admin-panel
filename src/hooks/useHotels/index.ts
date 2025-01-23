import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../supabase/account";
import { HOTELS_QUERY_KEYS } from "../../routes/hotels/enum";

export const useHotels = () => {
  return useQuery({
    queryKey: [HOTELS_QUERY_KEYS.HOTELS],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("hotels")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        throw new Error(error.message);
      }

      return data || [];
    },
  });
};

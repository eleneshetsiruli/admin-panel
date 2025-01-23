import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { supabase } from "../../supabase/account";
import { HOTELS_QUERY_KEYS } from "../../routes/hotels/enum";
import { Hotel, UpdateHotelPayload } from "./types";

export const useUpdateHotel = (
  options?: UseMutationOptions<Hotel[], Error, UpdateHotelPayload>
) => {
  return useMutation<Hotel[], Error, UpdateHotelPayload>({
    mutationKey: [HOTELS_QUERY_KEYS.UPDATE],
    mutationFn: async ({ id, values }: UpdateHotelPayload) => {
      const { data, error } = await supabase
        .from("hotels")
        .update(values)
        .eq("id", id);

      if (error) {
        throw new Error(error.message);
      }

      return data || [];
    },
    ...options,
  });
};

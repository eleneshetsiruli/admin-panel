import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../../supabase/account";
import { HOTELS_QUERY_KEYS } from "../../routes/hotels/enum";

export const useDeleteHotel = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [HOTELS_QUERY_KEYS.DELETE],
    mutationFn: async (hotelId: string) => {
      const { error } = await supabase
        .from("hotels")
        .delete()
        .eq("id", hotelId);

      if (error) {
        throw new Error(error.message);
      }
    },
    onSuccess: (_, hotelId) => {
      queryClient.setQueryData(["hotels"], (oldData: any) => {
        return oldData?.filter((hotel: any) => hotel.id !== hotelId);
      });
    },
  });
};

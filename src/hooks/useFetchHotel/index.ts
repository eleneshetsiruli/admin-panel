import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../supabase/account";

export const useFetchHotel = (id: string) => {
  return useQuery({
    queryKey: ["hotel", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("hotels")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        throw new Error(error.message);
      }
      return data;
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};

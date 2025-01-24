// import { useMutation } from "@tanstack/react-query";
// import { supabase } from "../../supabase/account";
// import { HOTELS_QUERY_KEYS } from "../../routes/hotels/enum";
// import { AddHotelValues } from "./types";

// export const useAddHotel = () => {
//   return useMutation({
//     mutationKey: [HOTELS_QUERY_KEYS.ADDHOTEL],
//     mutationFn: async (values: AddHotelValues) => {
//       const { error } = await supabase.from("hotels").insert(values);

//       if (error) {
//         throw new Error(error.message);
//       }

//       return null;
//     },
//   });
// };

import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { supabase } from "../../supabase/account";
import { HOTELS_QUERY_KEYS } from "../../routes/hotels/enum";
import { AddHotelValues } from "./types";

// Explicitly define the mutation return type, error type, and variables type
export const useAddHotel = (): UseMutationResult<
  null, // Mutation success type
  Error, // Error type
  AddHotelValues // Variables type
> => {
  return useMutation({
    mutationKey: [HOTELS_QUERY_KEYS.ADDHOTEL],
    mutationFn: async (values: AddHotelValues) => {
      const { error } = await supabase.from("hotels").insert(values);

      if (error) {
        throw new Error(error.message);
      }

      return null;
    },
  });
};

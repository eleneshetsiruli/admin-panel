import { useQuery } from "@tanstack/react-query";
import { getSingleUser } from "../../getSingleUser";

export const useGetUser = (id: string | undefined) => {
  return useQuery({
    queryKey: ["users", id],
    queryFn: () => getSingleUser(id!),
    enabled: !!id,
  });
};

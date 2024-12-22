import { useQuery } from "@tanstack/react-query";
import { getSingleUser } from "../../getSingleUser";
import { userProps } from "../../../../components/form/interfaces";

export const useGetUser = (id: string | undefined) => {
  return useQuery<userProps | undefined>({
    queryKey: ["users", id],
    queryFn: () => getSingleUser(id!),
    enabled: !!id,
  });
};

import { useQuery } from "@tanstack/react-query";
import { getUsersList } from "../../api/admin/getusersList";

export const useUsersList = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsersList,
  });
};

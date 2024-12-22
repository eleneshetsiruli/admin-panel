import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { getUsersList } from "../../api/admin/getusersList";
import { User } from "@supabase/supabase-js";
import { USERS_QUERY_KEYS } from "../../routes/users/enum";

export const useUsersList = <T>({
  queryOptions,
}: {
  queryOptions?: Omit<UseQueryOptions<User[], any, T>, "queryKey">;
} = {}): UseQueryResult<T, any> => {
  return useQuery<User[], any, T>({
    queryKey: [USERS_QUERY_KEYS.LIST],
    queryFn: getUsersList,
    ...queryOptions,
  });
};

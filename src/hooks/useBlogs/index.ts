import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { fetchBlogs } from "../../api/blogs/fetchBlogs";
import { mapBlogsListForAdmin } from "../../pages/blogs/utils";
import { Blog } from "../../pages/blogs/interfaces";

export const useBlogs = ({
  queryOptions,
}: {
  queryOptions?: Omit<UseQueryOptions<Blog[], any>, "queryKey">;
} = {}) => {
  const { data, isLoading, isError, error } = useQuery<Blog[], any>({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
    ...queryOptions,
  });
  const tableData = data ? mapBlogsListForAdmin(data) : [];

  return { tableData, isLoading, isError, error };
};

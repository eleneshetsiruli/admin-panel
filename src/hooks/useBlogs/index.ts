import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { fetchBlogs } from "../../api/blogs/fetchBlogs";
import { mapBlogsListForAdmin } from "../../pages/blogs/utils";
import { Blog } from "../../pages/blogs/interfaces";
import { BLOGS_QUERY_KEYS } from "../../routes/blogs/enum";

export const useBlogs = ({
  queryOptions,
}: {
  queryOptions?: Omit<UseQueryOptions<Blog[], any>, "queryKey">;
} = {}) => {
  const { data, isLoading, isError, error } = useQuery<Blog[], any>({
    queryKey: [BLOGS_QUERY_KEYS.BLOGS],
    queryFn: fetchBlogs,
    ...queryOptions,
  });
  const tableData = data ? mapBlogsListForAdmin(data) : [];

  return { tableData, isLoading, isError, error };
};

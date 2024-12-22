import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchBlogById } from "../../api/blogs/getSingleBlog";
import { Blog } from "../../pages/blogs/interfaces";
import { BLOGS_QUERY_KEYS } from "../../routes/blogs/enum";

export const useFetchBlogById = (
  id: string | undefined
): UseQueryResult<Blog, Error> => {
  return useQuery<Blog, Error>({
    queryKey: [BLOGS_QUERY_KEYS.SINGLE, id],
    queryFn: () => fetchBlogById(id),
    enabled: !!id,
  });
};

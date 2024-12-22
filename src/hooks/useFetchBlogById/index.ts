import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchBlogById } from "../../api/blogs/getSingleBlog";
import { Blog } from "../../pages/blogs/interfaces";

export const useFetchBlogById = (
  id: string | undefined
): UseQueryResult<Blog, Error> => {
  return useQuery<Blog, Error>({
    queryKey: ["blogs", id],
    queryFn: () => fetchBlogById(id),
    enabled: !!id,
  });
};

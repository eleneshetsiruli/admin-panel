import { useQuery } from "@tanstack/react-query";
import { fetchBlogById } from "../../api/blogs/getSingleBlog";

export const useFetchBlogById = (id: string | undefined) => {
  return useQuery({
    queryKey: ["blogs", id],
    queryFn: () => fetchBlogById(id),
    enabled: !!id,
  });
};

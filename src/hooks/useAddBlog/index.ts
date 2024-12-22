import { useMutation } from "@tanstack/react-query";
import { addSingleBlog } from "../../api/blogs/addBlog";
import { AddBlogError, AddBlogResponse } from "./types";
import { Blog } from "../../pages/blogs/interfaces";
import { BLOGS_QUERY_KEYS } from "../../routes/blogs/enum";

export const useAddBlog = () => {
  const { mutate: addBlog, error } = useMutation<
    AddBlogResponse,
    AddBlogError,
    Blog
  >({
    mutationKey: [BLOGS_QUERY_KEYS.ADD],
    mutationFn: addSingleBlog,
    onSuccess: () => {
      alert("Blog added successfully!");
    },
  });

  return { addBlog, error };
};

import { useMutation } from "@tanstack/react-query";
import { addSingleBlog } from "../../api/blogs/addBlog";
import { AddBlogError, AddBlogResponse } from "./types";
import { Blog } from "../../pages/blogs/interfaces";

export const useAddBlog = () => {
  const { mutate: addBlog, error } = useMutation<
    AddBlogResponse,
    AddBlogError,
    Blog
  >({
    mutationFn: addSingleBlog,
    onSuccess: () => {
      alert("Blog added successfully!");
    },
  });

  return { addBlog, error };
};

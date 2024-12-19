import { useMutation } from "@tanstack/react-query";
import { addSingleBlog } from "../../api/blogs/addBlog";

export const useAddBlog = () => {
  const { mutate: addBlog, error } = useMutation({
    mutationFn: addSingleBlog,
    onSuccess: () => {
      alert("Blog added successfully!");
    },
  });

  return { addBlog, error };
};

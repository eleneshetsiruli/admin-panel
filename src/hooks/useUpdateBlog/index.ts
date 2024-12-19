import { useMutation } from "@tanstack/react-query";
import { updateBlog } from "../../api/blogs/updateBlog";
import { FieldType } from "../../pages/blogs/editBlog/interfaces";

export const useUpdateBlogMutation = (id: string) => {
  return useMutation({
    mutationFn: (values: FieldType) => {
      if (!id) {
        throw new Error("Blog ID is required");
      }
      return updateBlog(id, values.title_en, values.description_en);
    },
    onSuccess: () => {
      alert("Blog updated successfully!");
    },
    onError: (error: Error) => {
      console.error("Error updating blog:", error);
      alert("Failed to update blog");
    },
  });
};

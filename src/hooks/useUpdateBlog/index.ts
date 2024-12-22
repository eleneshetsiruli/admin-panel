import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { updateBlog } from "../../api/blogs/updateBlog";
import { FieldType } from "../../pages/blogs/editBlog/interfaces";
import { UpdateBlogResponse } from "../../api/blogs/types";

export const useUpdateBlogMutation = (
  id: string
): UseMutationResult<UpdateBlogResponse, Error, FieldType, unknown> => {
  return useMutation<UpdateBlogResponse, Error, FieldType>({
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

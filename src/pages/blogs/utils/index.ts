import dayjs from "dayjs";
import { Blog, MappedBlog } from "../interfaces";

export const mapBlogsListForAdmin = (blogs: Blog[]): MappedBlog[] => {
  return blogs?.map((blog) => ({
    title_en: blog?.title_en,
    title_ka: blog?.title_ka,
    description_en: blog?.description_en,
    description_ka: blog?.description_ka,
    created_at: dayjs(blog?.created_at).format("YYYY-MM-DD HH:mm"),
    id: blog?.id,
  }));
};

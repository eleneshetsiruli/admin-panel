import { lazy } from "react";

export const LazyEditBlog = lazy(
  () => import("../../../../pages/blogs/editBlog"),
);

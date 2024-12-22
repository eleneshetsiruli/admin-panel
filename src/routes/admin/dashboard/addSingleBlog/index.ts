import { lazy } from "react";

export const LazyAddSingleBlog = lazy(
  () => import("../../../../pages/addBlog")
);

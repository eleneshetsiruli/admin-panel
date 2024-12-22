import { lazy } from "react";
import { SuspenseWrapper } from "../../../suspense";

export const LazyEditBlog = lazy(
  () => import("../../../../pages/blogs/editBlog")
);

export const EditBlogRoute = (
  <SuspenseWrapper>
    <LazyEditBlog />
  </SuspenseWrapper>
);

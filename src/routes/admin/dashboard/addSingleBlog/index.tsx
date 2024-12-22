import { lazy } from "react";
import { SuspenseWrapper } from "../../../suspense";

export const LazyAddSingleBlog = lazy(
  () => import("../../../../pages/addBlog"),
);

export const AddBlogRoute = (
  <SuspenseWrapper>
    <LazyAddSingleBlog />
  </SuspenseWrapper>
);

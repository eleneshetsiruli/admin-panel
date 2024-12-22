import { lazy } from "react";
import { SuspenseWrapper } from "../../../suspense";

const LazyBlogsList = lazy(() => import("../../../../pages/blogs"));

export const BlogsListRoute = (
  <SuspenseWrapper>
    <LazyBlogsList />
  </SuspenseWrapper>
);

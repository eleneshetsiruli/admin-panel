import BlogsList from "../../../../pages/blogs";
import { SuspenseWrapper } from "../../../suspense";

const LazyBlogsListPage = () => (
  <SuspenseWrapper>
    <BlogsList />
  </SuspenseWrapper>
);

export default LazyBlogsListPage;

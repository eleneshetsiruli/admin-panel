import { lazy } from "react";
import { SuspenseWrapper } from "../../../suspense";

const LazyEditUser = lazy(() => import("../../../../pages/editUser"));

export const EditUserRoute = (
  <SuspenseWrapper>
    <LazyEditUser />
  </SuspenseWrapper>
);

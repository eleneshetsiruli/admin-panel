import { lazy } from "react";
import { SuspenseWrapper } from "../../../suspense";

export const LazyAddUser = lazy(() => import("../../../../pages/addUser"));

export const AddUserRoute = (
  <SuspenseWrapper>
    <LazyAddUser />
  </SuspenseWrapper>
);

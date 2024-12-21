import { Route } from "react-router-dom";
import { AuthGuard } from "../../../route-guards/auth";
import { AdminLayout } from "../../../pages/admin-layout";
import { Dashboard } from "../../../pages/admin-layout/dashboard";
import { lazy } from "react";
import { SuspenseWrapper } from "../../suspense";
import { ADMIN_PATHS } from "./enum/index.enum";

const LazyEditUser = lazy(() => import("../../../pages/editUser"));
const LazyBlogsList = lazy(() => import("../../../pages/blogs"));
const LazyAddUser = lazy(() => import("../../../pages/addUser"));
const LazyAddSingleBlog = lazy(() => import("../../../pages/addBlog"));
const LazyEditBlog = lazy(() => import("../../../pages/blogs/editBlog"));

export const DASHBORD_ROUTES = [
  <Route
    path="admin"
    element={
      <AuthGuard>
        <AdminLayout />¡
      </AuthGuard>
    }
  >
    <Route path={ADMIN_PATHS.DASHBOARD} element={<Dashboard />} />
    <Route
      path={ADMIN_PATHS.DASHBOARD_EDITUSER + "/:id"}
      element={
        <SuspenseWrapper>
          <LazyEditUser />
        </SuspenseWrapper>
      }
    />

    <Route
      path={ADMIN_PATHS.DASHBOARD_BLOGS}
      element={
        <SuspenseWrapper>
          <LazyBlogsList />
        </SuspenseWrapper>
      }
    />

    <Route
      path={ADMIN_PATHS.DASHBOARD_ADDUSER}
      element={
        <SuspenseWrapper>
          <LazyAddUser />
        </SuspenseWrapper>
      }
    />

    <Route
      path={ADMIN_PATHS.DASHBOARD_ADDBLOGS}
      element={
        <SuspenseWrapper>
          <LazyAddSingleBlog />
        </SuspenseWrapper>
      }
    />

    <Route
      path={ADMIN_PATHS.DASHBOARD_EDITBLOG + "/:id"}
      element={
        <SuspenseWrapper>
          <LazyEditBlog />
        </SuspenseWrapper>
      }
    />
  </Route>,
];

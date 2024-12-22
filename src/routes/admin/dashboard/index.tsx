import { Route } from "react-router-dom";
import { AuthGuard } from "../../../route-guards/auth";
import { AdminLayout } from "../../../pages/admin-layout";
import { Dashboard } from "../../../pages/admin-layout/dashboard";
import { SuspenseWrapper } from "../../suspense";
import { ADMIN_PATHS } from "./enum/index.enum";
import { LazyEditUser } from "./editUser";
import { LazyAddUser } from "./addUser";
import { LazyBlogsList } from "./blogsList";
import { LazyAddSingleBlog } from "./addSingleBlog";
import { LazyEditBlog } from "./editBlog";

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

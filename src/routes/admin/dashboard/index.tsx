import { Route } from "react-router-dom";
import { AuthGuard } from "../../../route-guards/auth";
import { AdminLayout } from "../../../pages/admin-layout";
import { Dashboard } from "../../../pages/admin-layout/dashboard";
import { ADMIN_PATHS } from "./enum/index.enum";
import { EditUserRoute } from "./editUser";
import { AddUserRoute } from "./addUser";
import { BlogsListRoute } from "./blogsList";
import { AddBlogRoute } from "./addSingleBlog";
import { EditBlogRoute } from "./editBlog";

export const DASHBORD_ROUTES = [
  <Route
    key="admin"
    path="admin"
    element={
      <AuthGuard>
        <AdminLayout />¡
      </AuthGuard>
    }
  >
    <Route path={ADMIN_PATHS.DASHBOARD} element={<Dashboard />} />

    <Route path={ADMIN_PATHS.DASHBOARD_BLOGS} element={BlogsListRoute} />

    <Route path={ADMIN_PATHS.DASHBOARD_ADDUSER} element={AddUserRoute} />

    <Route path={ADMIN_PATHS.DASHBOARD_ADDBLOGS} element={AddBlogRoute} />

    <Route
      path={ADMIN_PATHS.DASHBOARD_EDITBLOG + "/:id"}
      element={EditBlogRoute}
    />

    <Route
      path={ADMIN_PATHS.DASHBOARD_EDITUSER + "/:id"}
      element={EditUserRoute}
    />
  </Route>,
];

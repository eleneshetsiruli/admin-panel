import { AuthGuard } from "./route-guards/auth";
import { Routes, Route } from "react-router-dom";
import { SignIn } from "./pages/signIn";
import "./index.css";
import { AdminLayout } from "./pages/admin-layout";
import { Dashboard } from "./pages/admin-layout/dashboard";
import { EditUser } from "./pages/editUser";
import { BlogsList } from "./pages/blogs";
import { AddUser } from "./pages/addUser";
import { EditBlog } from "./pages/blogs/editBlog";
import { AddSingleBlog } from "./pages/addBlog";

function App() {
  return (
    <Routes>
      <Route
        path="admin"
        element={
          <AuthGuard>
            <AdminLayout />
          </AuthGuard>
        }
      >
        <Route
          path="dashboard"
          element={
            <AuthGuard>
              <Dashboard />
            </AuthGuard>
          }
        />

        <Route
          path="dashboard/editUser/:id"
          element={
            <AuthGuard>
              <EditUser />
            </AuthGuard>
          }
        />

        <Route
          path="dashboard/blogs"
          element={
            <AuthGuard>
              <BlogsList />
            </AuthGuard>
          }
        />

        <Route
          path="dashboard/addUser"
          element={
            <AuthGuard>
              <AddUser />
            </AuthGuard>
          }
        />

        <Route
          path="dashboard/addBlog"
          element={
            <AuthGuard>
              <AddSingleBlog />
            </AuthGuard>
          }
        />

        <Route
          path="dashboard/editBlog/:id"
          element={
            <AuthGuard>
              <EditBlog />
            </AuthGuard>
          }
        />
      </Route>
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
}

export default App;

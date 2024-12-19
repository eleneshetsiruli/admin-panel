import { Dashboard } from "./pages/admin-layout/dashboard";
import { AdminLayout } from "./pages/admin-layout";
import { EditBlog } from "./pages/blogs/editBlog";
import { Routes, Route } from "react-router-dom";
import { AuthGuard } from "./route-guards/auth";
import { AddSingleBlog } from "./pages/addBlog";
import { EditUser } from "./pages/editUser";
import { BlogsList } from "./pages/blogs";
import { AddUser } from "./pages/addUser";
import { SignIn } from "./pages/signIn";

import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />

      <Route
        path="admin"
        element={
          <AuthGuard>
            <AdminLayout />
          </AuthGuard>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard/editUser/:id" element={<EditUser />} />
        <Route path="dashboard/blogs" element={<BlogsList />} />
        <Route path="dashboard/addUser" element={<AddUser />} />
        <Route path="dashboard/addBlog" element={<AddSingleBlog />} />
        <Route path="dashboard/editBlog/:id" element={<EditBlog />} />
      </Route>
    </Routes>
  );
}

export default App;

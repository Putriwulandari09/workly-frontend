import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import JobList from "../pages/admin/JobList";
import CreateJob from "../pages/admin/CreateJob";
import EditJob from "../pages/admin/EditJob";
import Login from "../pages/user/Login";
import Register from "../pages/user/Register";
import Home from "../pages/user/Home";
import DetailJob from "../pages/user/DetailJob";
import Profile from "../pages/user/Profile";
import AdminProtectedRoute from "../components/AdminProtectedRoute";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
          <Route
            path="/admin"
            element={
              <AdminProtectedRoute>
                <AdminLayout />
              </AdminProtectedRoute>
            }
          >
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="jobs" element={<JobList />} />
          <Route path="jobs/create" element={<CreateJob />} />
          <Route path="jobs/edit/:id" element={<EditJob />} />
        </Route>

        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />        
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/job/:id" element={<DetailJob />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
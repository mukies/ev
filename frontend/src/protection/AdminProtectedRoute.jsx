import { Navigate, Outlet } from "react-router-dom";

function AdminProtectedRoute() {
  const adminAuth = JSON.parse(localStorage.getItem("_A"));

  return adminAuth ? <Outlet /> : <Navigate to={"/"} />;
}

export default AdminProtectedRoute;

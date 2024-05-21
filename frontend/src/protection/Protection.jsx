import { Navigate, Outlet } from "react-router-dom";

function Protection() {
  const auth = JSON.parse(localStorage.getItem("_A"));

  return !auth ? <Outlet /> : <Navigate to={"/admin-dashboard"} />;
}

export default Protection;

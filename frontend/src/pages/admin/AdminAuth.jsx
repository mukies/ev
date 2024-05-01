import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Login from "../../components/admin/Login";
import Register from "../../components/admin/Register";
import { useNavigate } from "react-router-dom";

function AdminAuth() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const adminAuth = JSON.parse(localStorage.getItem("_A"));
  useEffect(() => {
    if (adminAuth) {
      navigate("/");
    }
    adminCheck();
  }, []);

  const adminCheck = async () => {
    try {
      const { data } = await axios.get("/api/admin/adminCheck");

      if (data.success) {
        setIsRegistered(data.adminExist);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/car_bg.webp')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      className={
        loading
          ? "h-[100vh] text-wrap text-gray-700 flex justify-center items-center"
          : "text-wrap text-gray-700 "
      }
    >
      {loading ? (
        <span className="loading loading-spinner scale-125"></span>
      ) : !loading && isRegistered ? (
        <Login />
      ) : (
        <Register />
      )}
    </div>
  );
}

export default AdminAuth;

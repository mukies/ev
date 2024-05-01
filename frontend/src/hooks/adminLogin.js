import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export const useAdminLogin = () => {
  const [loading, setLoading] = useState(false);

  const adminLogin = async (email, password) => {
    setLoading(true);
    try {
      const { data } = await axios.post("/api/admin/login", {
        email,
        password,
      });
      if (data.success) {
        localStorage.setItem("_A", JSON.stringify(data.id));
        window.location.href = "/";
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, adminLogin };
};

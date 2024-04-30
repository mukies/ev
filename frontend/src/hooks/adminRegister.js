import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export const useAdminRegister = () => {
  const [loading, setLoading] = useState(false);
  const adminRegister = async (fullName, email, password) => {
    setLoading(true);
    try {
      const { data } = await axios.post(`/api/admin/register`, {
        fullName,
        email,
        password,
      });
      if (data.success) {
        const { data: loginData } = await axios.post("/api/admin/login", {
          email,
          password,
        });
        if (loginData.success) {
          localStorage.setItem("_A", JSON.stringify(loginData.id));
          window.location.href("/");
        } else {
          toast.error(loginData.message);
        }
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong while Registration.");
    } finally {
      setLoading(false);
    }
  };
  return { loading, adminRegister };
};

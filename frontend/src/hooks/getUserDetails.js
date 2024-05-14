import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export const useUserDetails = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const userDetails = async (uid) => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/user/get-single-user/${uid}`);

      if (data.success) {
        setUser(data.admin);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { userDetails, loading, user };
};

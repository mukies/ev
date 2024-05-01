import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useEditProduct = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const editProduct = async (
    productName,
    productImage,
    category,
    shortDescription,
    mainDescription,
    descriptiveImage,
    id
  ) => {
    setLoading(true);
    try {
      const { data } = await axios.put(`/api/product/update-product/${id}`, {
        productName,
        productImage,
        category,
        shortDescription,
        mainDescription,
        descriptiveImage,
      });

      if (data.success) {
        toast.success("Product updated.");
        navigate("/admin/product");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, editProduct };
};

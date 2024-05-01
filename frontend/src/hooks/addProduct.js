import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useAddProduct = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addProduct = async (
    productName,
    productImage,
    category,
    shortDescription,
    mainDescription,
    descriptiveImage
  ) => {
    setLoading(true);
    try {
      const { data } = await axios.post("/api/product/add-product", {
        productName,
        productImage,
        category,
        shortDescription,
        mainDescription,
        descriptiveImage,
      });
      console.log("first", data);

      if (data.success) {
        toast.success("Product added.");
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
  return { loading, addProduct };
};

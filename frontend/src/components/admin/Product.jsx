/* eslint-disable react/prop-types */

import { useState } from "react";
import { Link } from "react-router-dom";
import Delete from "../popup/Delete";
import { useProduct } from "../../context/ProductContext";
import axios from "axios";
import { toast } from "react-toastify";

function Product({ product }) {
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setProduct } = useProduct();
  const handleDelete = async () => {
    if (!loading) {
      setLoading(true);
      try {
        const { data } = await axios.delete(
          `/api/product/delete-product/${product._id}`
        );

        if (data.success) {
          setProduct((p) => p.filter((item) => item._id !== product._id));
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error(error);
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <div className="flex items-center p-2 justify-between rounded-lg border-2 border-gray-300 w-[95%] mx-auto">
      <div className="flex items-center gap-2">
        <div className="h-[50px] bg-gray-200 w-[50px] sm:h-[100px] sm:w-[100px] overflow-hidden rounded-md">
          <img
            src={product.productImage}
            alt={product.productName}
            className="h-full w-full object-center object-cover cursor-pointer sm:hover:scale-105 duration-200"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="hidden lg:flex text-sm sm:text-2xl font-semibold">
            {product.productName.length > 30
              ? product.productName.slice(0, 30) + "..."
              : product.productName}
          </h1>
          <h1 className="hidden sm:flex lg:hidden text-sm sm:text-2xl font-semibold">
            {product.productName.length > 20
              ? product.productName.slice(0, 20) + "..."
              : product.productName}
          </h1>
          <h1 className="text-sm sm:hidden sm:text-2xl font-semibold">
            {product.productName.length > 15
              ? product.productName.slice(0, 15) + "..."
              : product.productName}
          </h1>
          <h3 className="text-sm sm:text-lg">{product.category}</h3>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Link
          role="button"
          to={`/admin/product/${product.slug}`}
          className="btn btn-info btn-sm sm:btn-md text-white"
        >
          Edit
        </Link>
        <button
          onClick={() => setShowPopup(true)}
          className="btn btn-error btn-sm sm:btn-md text-white capitalize"
        >
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            "delete"
          )}
        </button>
      </div>
      {showPopup && <Delete cancel={setShowPopup} action={handleDelete} />}
    </div>
  );
}

export default Product;

/* eslint-disable react/prop-types */

import { useState } from "react";
import { Link } from "react-router-dom";
import Delete from "../popup/Delete";

function Product({ product }) {
  const [showPopup, setShowPopup] = useState(false);
  const demoDelete = () => {
    alert(`data is ${product._id}`);
  };
  return (
    <div className="flex items-center p-2 justify-between rounded-lg border-2 border-gray-300 w-[95%] mx-auto">
      <div className="flex items-center gap-2">
        <div className="h-[50px] w-[50px] sm:h-[100px] sm:w-[100px] overflow-hidden rounded-md">
          <img
            src={product.img}
            alt={product.name}
            className="h-full w-full object-center object-cover cursor-pointer sm:hover:scale-105 duration-200"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <h3 className="text-lg">{product.category}</h3>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Link
          role="button"
          to={`/admin/edit-product/${product._id}`}
          className="btn btn-info text-white"
        >
          Edit
        </Link>
        <button
          onClick={() => setShowPopup(true)}
          className="btn btn-error text-white capitalize"
        >
          delete
        </button>
      </div>
      {showPopup && <Delete cancel={setShowPopup} action={demoDelete} />}
    </div>
  );
}

export default Product;

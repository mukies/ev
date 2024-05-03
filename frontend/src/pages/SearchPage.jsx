import { useState } from "react";
import Layout from "../layout/Layout";
import { useNavigate } from "react-router-dom";

function SearchPage() {
  const [products, setProucts] = useState([
    {
      productName: "product no. 1",
      productImage: "/ev_car.jpeg",
      _id: 8475874,
    },
    { productName: "product no. 2", productImage: "/ev_car.jpeg", _id: 664 },
  ]);
  const navigate = useNavigate();
  return (
    <Layout>
      <div
        className={`min-h-[calc(100vh-60px)] py-5 sm:min-h-[calc(55vh-100px)] max-w-[768px] mx-auto flex flex-col gap-3 ${
          products.length ? "" : "justify-center items-center"
        }`}
      >
        <div className="text-2xl font-semibold flex flex-col gap-3 sm:w-[85%] sm:mx-auto">
          <span className="text-3xl font-semibold underline text-center">
            Search Product
          </span>
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-8 h-8 opacity-70 cursor-pointer  "
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        {products.length ? (
          <div className=" flex flex-col gap-3">
            <span className="text-xl font-semibold">Search Results:</span>
            {products.map((product, i) => (
              <div
                onClick={() => navigate(`/product-page/${product._id}`)}
                className="p-2 flex items-center gap-3 sm:w-[90%] sm:mx-auto border-2 border-gray-300 rounded-lg hover:bg-gray-300 duration-300 cursor-pointer"
                key={i}
              >
                <div className="h-[50px] w-[50px] overflow-hidden bg-gray-200 rounded-md">
                  <img
                    src={product.productImage}
                    alt="product-image"
                    loading="lazy"
                    className="h-full w-full object-cover object-center "
                  />
                </div>
                <h3 className="text-xl font-semibold">{product.productName}</h3>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </Layout>
  );
}

export default SearchPage;

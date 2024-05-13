import { toast } from "react-toastify";
import LayoutAdmin from "../../layout/admin/LayoutAdmin";
import axios from "axios";
import { useState } from "react";
import Product from "../../components/admin/Product";

function SearchPageAdmin() {
  const [key, setKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(null);

  const handleSearch = async () => {
    if (key.length < 3) {
      toast.error("Search keyword must be 3 Character long.");
      return;
    }

    if (!loading) {
      try {
        const { data } = await axios.get(`/api/product/product-search/${key}`);

        if (data.success) {
          setProducts(data.products);
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
    <LayoutAdmin>
      <div
        className={`min-h-[40vh] text-gray-700 py-5 sm:min-h-[calc(80vh-100px)] max-w-[768px] mx-auto flex flex-col gap-3 ${
          products ? "" : "justify-center items-center"
        }`}
      >
        <div className="text-2xl font-semibold flex flex-col gap-3 sm:w-[85%] sm:mx-auto">
          <span className="text-3xl font-semibold underline text-center">
            Search Product
          </span>
          <label className="input input-bordered border-gray-300 bg-gray-100 flex items-center gap-2">
            <input
              value={key}
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  handleSearch();
                }
              }}
              onChange={(e) => setKey(e.target.value)}
              type="text"
              className="grow"
              placeholder="Search"
            />
            <svg
              onClick={handleSearch}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-8 h-8  opacity-70 cursor-pointer  "
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        {loading ? (
          <div className="flex justify-center gap-2 mt-2 flex-col items-center">
            <span className="text-xl font-semibold">Loading...</span>{" "}
            <span className="loading loading-ring sm:scale-150"></span>
          </div>
        ) : products ? (
          <div className=" flex px-2 flex-col gap-3">
            <div className="sm:w-[90%] sm:mx-auto flex items-center justify-between">
              <span className="text-xl font-semibold">Search Results:</span>
              <span
                onClick={() => {
                  setProducts(null);
                  setKey("");
                }}
                className="link link-error"
              >
                clear search
              </span>
            </div>
            {products.length ? (
              products.map((product, i) => (
                <Product key={i} product={product} setProduct={setProducts} />
              ))
            ) : (
              <div>No result found.</div>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </LayoutAdmin>
  );
}

export default SearchPageAdmin;

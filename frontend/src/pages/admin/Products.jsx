import { Link } from "react-router-dom";
import LayoutAdmin from "../../layout/admin/LayoutAdmin";
import { MdAddBox } from "react-icons/md";
import Product from "../../components/admin/Product";
import { useProduct } from "../../context/ProductContext";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

function Products() {
  const { product, setProduct } = useProduct();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const { data } = await axios.get("/api/product/product-list");

      if (data.success) {
        setProduct(data.products);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LayoutAdmin>
      <div className="max-w-[768px] flex flex-col text-gray-700 gap-10 p-1 sm:p-5 mx-auto border-r-2 border-l-2 border-gray-300">
        {loading && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-white flex z-[89] justify-center items-center">
            <span className="loading loading-spinner scale-125 text-gray-800"></span>
          </div>
        )}
        <div className="border-b-2 border-gray-300 flex justify-center">
          <span className="text-4xl  font-semibold capitalize">
            All Products ({product.length})
          </span>
        </div>
        <div className="flex justify-end">
          <Link
            role="button"
            to={"/admin/add-product"}
            className="btn btn-primary text-white"
          >
            <span className="flex items-center gap-2 text-nowrap capitalize">
              <MdAddBox size={23} /> add product
            </span>
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          {product.map((item, i) => (
            <Product key={i} product={item} />
          ))}
        </div>
      </div>
    </LayoutAdmin>
  );
}

export default Products;

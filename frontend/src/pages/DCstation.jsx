import Layout from "../layout/Layout";
import Categories from "../components/Categories";
import { categories } from "../assets/categories";
import { Link, useNavigate } from "react-router-dom";
import Product from "../components/Product";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect, useState } from "react";

function DCstation() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  //   const { id } = useParams();

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/product/product-list-with-category/dc-charging-station`
      );
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
  };
  return (
    <Layout title={"Nest - DC Charging Station"}>
      <div className="min-h-[calc(100dvh-100px)] text-black flex flex-col">
        {loading && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-white flex z-[89] justify-center items-center">
            <span className="loading loading-spinner scale-125 text-gray-800"></span>
          </div>
        )}
        <div
          style={{
            backgroundImage: "url('/dc_charging.jpg')",
          }}
          className=" bg-black h-[50vh] sm:h-[45vh] mt-5 sm:mt-10 bg-cover text-white sm:text-lg text-[16px] md:text-xl bg-center  "
        >
          <div className="flex flex-col gap-5 ml-2 sm:ml-20 p-3">
            <h1 className="text-xl font-bold sm:text-2xl md:text-3xl">
              Level 3 dc ev fast Charging Station
            </h1>
            <ul className=" flex  text-wrap list-disc sm:list-none flex-col gap-1">
              <li className="">
                Time-saving - Level 3 dc ev charger, fast charging stations
              </li>
              <li className="">
                Power-saving - High conversion efficiency and low standby
              </li>
              <li className="">
                High Safety - Multi protection to both manual operation and
                vehicles
              </li>
            </ul>
            <div className="flex justify-end w-[300px] sm:w-[400px]">
              <Link
                role="button"
                to={"/enquiry-for-products"}
                className="btn btn-info"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center px-3 sm:px-10 gap-5 justify-between mt-10">
          <button
            onClick={() => navigate("/ev-parts")}
            className="btn btn-success btn-md sm:btn-lg text-white"
          >
            Encloure Box
          </button>
          <button
            onClick={() => navigate("/product/homeuse-ev-charger")}
            className="btn btn-success btn-md sm:btn-lg text-white"
          >
            Home Charger
          </button>
          <button
            onClick={() => navigate("/product/public-ev-charger")}
            className="btn btn-success btn-md sm:btn-lg text-white"
          >
            Public Charger
          </button>
          <button
            onClick={() => navigate("/product/portable-ev-charger")}
            className="btn btn-success btn-md sm:btn-lg text-white"
          >
            Portable Charger
          </button>
          <button
            onClick={() => navigate("/product/dc-charging-station")}
            className="btn btn-success btn-md sm:btn-lg text-white"
          >
            DC EV Charger
          </button>
        </div>
        <span className="divider"></span>

        <h2 className="text-2xl font-semibold hidden xl:flex p-3">
          Product Category
        </h2>
        <h2 className="text-2xl font-semibold xl:hidden p-3">Products</h2>
        <div className="px-5 flex flex-col lg:flex-row gap-4">
          <div className="xl:flex-[4]  hidden xl:flex flex-col gap-0 xl:gap-5">
            {/* category 1  */}
            {categories.map((item, i) => (
              <Categories key={i} category={item} />
            ))}
          </div>
          <div className="xl:flex-[7] flex-[2] max-h-max flex flex-col gap-10">
            {/* item 1  */}
            {products.length
              ? products.map((pro, i) => <Product key={i} product={pro} />)
              : ""}
            {products.length == 0 ? (
              <div className="h-[30vh] flex justify-center items-center ">
                <span className="text-2xl text-gray-600 font-semibold">
                  No Product Found.
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default DCstation;

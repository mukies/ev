import { Link, useNavigate, useParams } from "react-router-dom";
import Layout from "../layout/Layout";
import Categories from "../components/Categories";
import { categories } from "../assets/categories";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { FaArrowRightLong } from "react-icons/fa6";

function Cables() {
  const { name } = useParams();
  //   const { id } = useParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  //   const { id } = useParams();

  useEffect(() => {
    getProduct();
  }, [name]);

  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/product/product-list-with-category/${name}`
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
    <Layout>
      <div
        onClick={() => console.log("first", name)}
        className="min-h-[calc(100dvh-100px)] text-black flex flex-col"
      >
        {loading && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-white flex z-[89] justify-center items-center">
            <span className="loading loading-spinner scale-125 text-gray-800"></span>
          </div>
        )}
        <div
          style={
            name.startsWith("charging-cable")
              ? {
                  backgroundImage: "url('/acev.jpeg')",
                }
              : { backgroundImage: "url('')" }
          }
          className={
            name.startsWith("charging-cable")
              ? " bg-black h-[45vh] mt-5 sm:mt-10 bg-cover text-white sm:text-lg text-[16px] md:text-xl bg-center "
              : "  h-[45vh] mt-5 sm:mt-10 bg-cover flex items-center justify-center sm:text-lg text-[16px] md:text-xl bg-center "
          }
        >
          <div
            className={
              name.startsWith("charging-cable")
                ? "flex flex-col gap-5 ml-2 sm:ml-20 p-3"
                : "flex flex-col gap-5 ml-2 sm:ml-20 justify-center items-center p-3"
            }
          >
            <h1 className="text-xl font-bold sm:text-2xl md:text-5xl">
              {name.startsWith("ev-adapter")
                ? "EV Connector"
                : name.startsWith("ev-pa")
                ? "EV Parts -Enclosure Box"
                : "EV Charging Cable"}
            </h1>
            <ul className=" flex flex-col text-wrap list-disc sm:list-none gap-1">
              {name.startsWith("ev-adapter") ? (
                <>
                  <li className="">
                    Dust proof cap made by sillion, attached on head
                  </li>
                  <li className="">
                    Certs: CE(TUV), TUV-mark, RoHS, Reach, FCC{" "}
                  </li>
                  <li className="">TPU &TPE Jacket for lifetime protection</li>
                </>
              ) : name.startsWith("ev-par") ? (
                <>
                  <li className="">
                    Our advantages is the capacity of micro-customization and
                    modification, custom logo.
                  </li>
                  <li className="">
                    EV Charger Components: Enclosure Box, PCBA, EV Charging
                    Cable, Plug Holder.
                  </li>
                  <li className="">
                    We have 6 injection molding machines, can supply goods
                    stably.
                  </li>
                </>
              ) : (
                <>
                  <li className="">Dust proof cap made by silicon</li>
                  <li className="">CE(TUV)/TUV-mark/RoHS/Reach/FCC</li>
                  <li className="">TPU jacket</li>
                </>
              )}
            </ul>
            <div
              className={
                name.startsWith("charging-cable")
                  ? "flex justify-end w-[300px] sm:w-[400px]"
                  : "flex justify-center items-center w-[300px] sm:w-[400px]"
              }
            >
              <button className="btn btn-info">Order Now</button>
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
              ? products.map((product) => (
                  <div
                    key={product._id}
                    className="flex items-center text-wrap flex-col sm:flex-row gap-[50px]"
                  >
                    <div className="h-[250px] w-[250px] overflow-hidden rounded-lg">
                      <img
                        src={product.productImage}
                        alt="product_image"
                        loading="lazy"
                        className="h-full w-full object-cover object-center hover:scale-110 duration-300 cursor-pointer"
                      />
                    </div>
                    <div className="flex flex-col justify-center gap-2 w-full">
                      <h2 className="text-xl sm:text-2xl font-bold">
                        {product.productName}
                      </h2>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            product.shortDescription?.length > 500
                              ? product.shortDescription?.slice(0, 500) + "..."
                              : product.shortDescription,
                        }}
                        className="flex flex-col gap-1"
                      ></div>
                      <div className="border-b border-red-600 flex justify-end">
                        <Link
                          role="span"
                          to={`#`}
                          className="text-[red] flex items-center gap-3 cursor-pointer md:hover:scale-110 duration-200 "
                        >
                          Learn more <FaArrowRightLong />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
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

export default Cables;

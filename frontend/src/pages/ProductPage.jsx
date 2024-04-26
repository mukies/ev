import Layout from "../layout/Layout";
import "../index.css";

function ProductPage() {
  const demo =
    "<p>shjhskjsjkdkjsfhkjhfkjhfkjkjdfhkjshsjkhdjksdhkhfjsjk sdhjshdjshdjs sjdjsdhjsd sjdsdjshdjsd jsdhjsdjsdhjs djsdjshdjsd sdjsbdjsd sdjsdbsj djsd sjdsd sdsdsj dsdsjds d</p><ul><li>hghshdshdhs</li><li>hghshdshdhs</li><li>hghshdshdhs</li><li>hghshdshdhs</li><li>hghshdshdhs</li></ul>";
  return (
    <Layout>
      <div className="text-wrap text-gray-800">
        <div
          style={{
            backgroundImage: "url('/acev.jpeg')",
          }}
          className=" bg-black h-[50vh] sm:h-[50vh] bg-cover text-white sm:text-lg text-[16px] md:text-xl bg-center  "
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
              <button className="btn btn-info">Order Now</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 px-1 mt-5 sm:mt-10 sm:px-10">
          <div className="flex-[0.7] overflow-hidden sm:rounded-xl ">
            <img
              src="/ev_car.jpeg"
              alt="product-image"
              loading="lazy"
              className="h-[350px] w-full object-cover bg-center sm:hover:scale-110 duration-200"
            />
          </div>
          <div className="flex flex-col gap-3 flex-1 justify-center">
            <h2 className="text-2xl font-semibold text-center underline">
              BMBS Home use EV charger with cable
            </h2>
            <div
              className="px-5 flex flex-col gap-3 text-field"
              dangerouslySetInnerHTML={{ __html: demo }}
            ></div>
            <div className="flex justify-center items-center">
              <button className="btn bg-[red] hover:bg-[#ff4747] text-white ">
                Order Now
              </button>
            </div>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: demo }}
          className="text-field px-2 mt-5 sm:px-10 sm:mt-10"
        ></div>
      </div>
    </Layout>
  );
}

export default ProductPage;

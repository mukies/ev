import ProductShowcase from "../components/ProductShowcase";
import Layout from "../layout/Layout";

function DcSolution() {
  return (
    <Layout>
      <div className="text-black text-wrap">
        <div
          style={{
            backgroundImage: "url('/dc_charging.jpg')",
          }}
          className=" bg-black h-[50vh] sm:h-[60vh] flex items-center  bg-cover text-white sm:text-lg text-[16px] md:text-xl bg-center  "
        >
          <div className="flex flex-col gap-5 ml-2 sm:ml-10 p-3">
            <h1 className="text-xl font-bold sm:text-2xl md:text-3xl">
              DC EV Charging Station
            </h1>
            <ul className=" flex  text-wrap list-disc sm:list-none flex-col gap-1">
              <li className="">7kW - 240kW 1&2 Guns</li>
              <li className="">( CCS1/CCS2/Chademo/GBT Optional)</li>
              <li className="">OCPP 1.6 & 2.0</li>
            </ul>
            <div className="flex justify-end w-[300px] sm:w-[400px]">
              <button className="btn bg-[red] hover:bg-[#ff2e2e] duration-200 text-white border-none">
                Order Now
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-auto gap-5 mt-10">
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-3xl ">DC EV Car Charging Station</h1>
            <p className="w-[90%] mx-auto text-center text-md">
              Bomern provide everything that’s needed to build a charging
              business, from charging facilities to customer services and smart
              energy management solutions. You can either manage your own
              network of charging stations or provide the service for other
              charger operators. All solutions are white-labelled and can be
              customized to meet your customers’ needs
            </p>
          </div>
          <div className="grid sm:grid-cols-3 grid-cols-1 text-gray-600 px-3 sm:px-10 items-center">
            <div className="w-full flex flex-col  gap-3 p-1 sm:px-5 h-[600px] ">
              <div className="">
                <img
                  className="h-auto w-[300px] mx-auto object-cover object-center"
                  loading="lazy"
                  src="/dc_solution1.webp"
                  alt="product-image"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="font-semibold text-xl">Connector options:</h2>
                <ol>
                  <li>Single Gun CCS or CHAdeMO</li>
                  <li>Double Guns CCS + CHAdeMO</li>
                  <li>Triple Guns CCS+CHAdeMO+AC22kw</li>
                </ol>
                <h2 className="font-semibold text-xl">Rated Power options: </h2>
                <ol>
                  <li>60kw(charging speed 60kw/h)</li>
                  <li>120kw(charging speed 120kw/h)</li>
                  <li>160kw(charging speed 160kw/h)</li>
                </ol>
              </div>
            </div>
            <div className="w-full p-1 sm:px-5 flex flex-col gap-3 ">
              <div className="">
                <img
                  className="h-auto w-[300px] mx-auto object-cover object-center"
                  loading="lazy"
                  src="/dc_solution2.webp"
                  alt="product-image"
                />
              </div>
              <div className="">
                <img
                  className="h-auto w-[300px] mx-auto object-cover object-center"
                  loading="lazy"
                  src="/dc_solution3.webp"
                  alt="product-image"
                />
              </div>
            </div>
            <div className="w-full p-1 sm:px-5 flex flex-col gap-3 sm:h-[600px]">
              <div className="">
                <img
                  className="h-auto w-[300px] mx-auto object-cover object-center"
                  loading="lazy"
                  src="/dc_solution4.webp"
                  alt="product-image"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p>
                  Fast-charging station was developed for electric vehicles with
                  CHAdeMO or CCS Combo DC charging sockets and is designed for
                  commercial use. It is compatible with all popular industrial
                  sockets and can be used with plug sockets.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row-reverse px-10 gap-5  items-center">
          <div className="flex-1">
            <img
              src="/dc2.webp"
              className="h-[400px] w-full object-contain object-center"
              loading="lazy"
              alt="dc-solution"
            />
          </div>
          <div className="flex-[1] flex flex-col gap-5">
            <h1 className="text-4xl font-semibold">Enterprise Charger</h1>
            <div className="flex flex-col">
              <p className="text-lg text-gray-700">
                Based on the Internet platform, the charging station for users
                to intervene in the platform, to achieve multi-user and
                multi-channel use.
              </p>
              <p className="text-lg text-gray-700">
                Users can share charging piles through mobile phones and
                computer software systems, and can set up, reserve and pay
                directly. You can also pay by credit card.
              </p>
              <p className="text-lg text-gray-700">
                Through the cloud or the independent cloud system, operators
                constantly monitor the use of charging piles, fee settlement,
                user management etc. effectively improving the utilization rate
                of charging piles.
              </p>
            </div>
          </div>
        </div>
        <div className="flex px-5 flex-col sm:flex-row items-center">
          <div className="flex-1">
            <img
              src="/dc1.webp"
              className="h-[400px] w-full object-contain object-center"
              loading="lazy"
              alt="dc-solution"
            />
          </div>
          <div className="flex-[1] flex flex-col gap-3">
            <div className="flex  flex-col">
              <h1 className="text-4xl font-semibold">
                Solar system with charger
              </h1>
              <p className="text-lg text-gray-700">
                How to charge an EV at home using solar?
              </p>
            </div>
            <p className="text-lg text-gray-700">
              Charging an EV using your own rooftop solar can be relatively
              easy, but it depends on several factors, the most obvious being
              the size of your solar system, the time of day, and the weather.
              If you want to charge an EV quickly using solar only, then
              you&rsquo;ll need a large enough solar system and some help using
              a smart charger.
            </p>
          </div>
        </div>
        <ProductShowcase title={"dc"} />
      </div>
    </Layout>
  );
}

export default DcSolution;

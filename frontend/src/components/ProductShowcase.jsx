/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function ProductShowcase({ title }) {
  const products = [
    {
      name: "DC EV Charger",
      image: "/dcev.webp",
    },
    {
      name: "DC Charging Station",
      image: "/dc_charging_station.webp",
    },
    {
      name: "AC EV Wallbox",
      image: "/acev.webp",
    },
    {
      name: "Portable EV Charger",
      image: "/portable_ev.webp",
    },
    {
      name: "EV Charging Cable",
      image: "/ev_charging.webp",
    },
  ];
  return (
    <div className="flex-col my-10 text-wrap gap-5 px-1 sm:px-4 text-black flex items-center">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-3xl uppercase font-semibold">product showcase</h1>
        <p className="text-md w-[95%] mx-auto">
          NEST offers top-tier energy storage systems and EV chargers, providing
          holistic solutions that seamlessly combine power transmission and
          distribution, energy storage, and power consumption. All products are
          durable and high-quality, ensuring outstanding performance and
          longevity even in harsh environments
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 w-full lg:grid-cols-5">
        {products.map((item, i) => (
          <div className="flex flex-col p-5 items-center gap-5" key={i}>
            <div className="h-[200px]  overflow-hidden">
              <img
                src={item.image}
                alt="product-image"
                className="h-full w-full object-cover object-center hover:scale-110 duration-300 cursor-pointer"
              />
            </div>
            <span className="text-center font-semibold text-xl">
              {item.name}
            </span>
          </div>
        ))}
      </div>
      <div>
        <Link
          role="button"
          to={
            title == "dc"
              ? "/product/dc-charging-station"
              : "/product/homeuse-ev-charger"
          }
          className="btn bg-[red] text-white capitalize text-xl border-none hover:bg-[#b82727] duration-200"
        >
          See all products
        </Link>
      </div>
    </div>
  );
}

export default ProductShowcase;

import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-[#242424] flex flex-col  gap-1 text-wrap py-5 sm:py-10 sm:px-5 md:px-5 text-gray-200 h-auto md:h-[45vh]">
      <div className="flex flex-col md:flex-row gap-5 sm:justify-center items-center md:items-start sm:gap-10 md:gap-2 px-5">
        <div className=" flex-1 flex flex-col gap-1 w-full items-center ">
          <img
            src="/nest.JPG"
            alt="nest"
            className="h-[150px] w-[150px] object-cover object-center  rounded-full"
          />
        </div>
        <div className=" flex-1 items-center md:items-start flex flex-col gap-3  w-full ">
          <h3 className="text-2xl font-bold">Product</h3>
          <ul className="list-none text-[16px] sm:text-xl md:text-lg lg:text-xl flex flex-col gap-2">
            <Link
              role="li"
              to={"/product/homeuse-ev-charger"}
              className="hover:underline duration-500 max-w-max"
            >
              AC Wallbox
            </Link>
            <Link
              role="li"
              to={"/product/dc-charging-station"}
              className="hover:underline duration-500 max-w-max"
            >
              DC Charging Station
            </Link>
            <Link
              role="li"
              to={"/product/portable-ev-charger"}
              className="hover:underline duration-500 max-w-max"
            >
              Portable EV Charger
            </Link>
            <Link
              className="hover:underline duration-500 max-w-max"
              role="li"
              to={"/charging-cable"}
            >
              EV Charging Cable
            </Link>
          </ul>
        </div>
        <div className=" flex-1 flex flex-col gap-3  w-full items-center md:items-start mx-auto">
          <h3 className="text-2xl font-bold">About Us</h3>
          <ul className="list-none flex flex-col text-[16px] sm:text-xl">
            <Link
              role="li"
              to={"/about-us"}
              className="hover:underline duration-500 max-w-max"
            >
              Company Profile
            </Link>
            <Link
              role="li"
              to={"/faq"}
              className="hover:underline duration-500 max-w-max"
            >
              FAQ
            </Link>
          </ul>
        </div>

        <div className="  flex-1 flex flex-col gap-3 w-full  mx-0 sm:mx-auto md:items-start items-center">
          <h3 className="text-2xl font-bold">Contact Us</h3>
          <div className="flex flex-col mx-auto sm:mx-0 sm:text-xl gap-2">
            <span className="flex items-center gap-4">
              <IoCall size={20} /> +977 9855060106
            </span>
            <span className="flex items-center gap-4">
              <MdEmail size={20} /> nepalevsat@gmail.com
            </span>
            <span className="flex items-center gap-4">
              <FaLocationDot /> Bharatpur, Chitwan
            </span>
          </div>
        </div>
      </div>
      <span className="divider divider-neutral"></span>
      <p className="flex gap-3 items-center text-lg sm:text-xl  mx-auto">
        All Rights Reserved NEST© 2024
      </p>
    </div>
  );
}

export default Footer;

import { BsInstagram } from "react-icons/bs";
import { RiFacebookCircleLine, RiLinkedinLine, RiLink } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-[#242424] flex flex-col  gap-1 text-wrap py-5 sm:py-10 sm:px-20 text-gray-200 h-auto sm:h-[45vh]">
      <div className="flex flex-col sm:flex-row gap-5 sm:justify-center sm:gap-2 px-4">
        <div className=" flex-1 flex flex-col gap-1  w-full mx-auto">
          <img
            src="/nest.JPG"
            alt="nest"
            className="h-[150px] w-[150px] object-cover object-center  rounded-full"
          />
        </div>
        <div className=" flex-1 flex flex-col gap-1  w-full mx-auto">
          <h3 className="text-2xl font-bold">Product</h3>
          <ul className="list-none text-[16px] flex flex-col">
            <Link role="li" to={"/"}>
              AC Wallbox
            </Link>
            <Link role="li" to={"/dc-charging-station"}>
              DC Charging Station
            </Link>
            <Link role="li" to={"/"}>
              Portable EV Charger
            </Link>
            <Link role="li" to={"/"}>
              EV Charging Cable
            </Link>
          </ul>
        </div>
        <div className=" flex-1 flex flex-col gap-1  w-full mx-auto">
          <h3 className="text-2xl font-bold">About Us</h3>
          <ul className="list-none flex flex-col text-[16px]">
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

        <div className=" flex-1 flex flex-col gap-5 w-full  mx-0 sm:mx-auto">
          <div className="flex justify-between w-[60%] items-center mx-auto sm:mx-0 ">
            <Link
              role="span"
              to={"#"}
              className="rounded-full cursor-pointer bg-gray-300 text-black h-8  w-8 flex justify-center items-center"
            >
              <RiFacebookCircleLine size={20} />
            </Link>

            <Link
              role="span"
              to={"#"}
              className="rounded-full cursor-pointer bg-gray-300 text-black h-8  w-8 flex justify-center items-center"
            >
              <RiLinkedinLine size={20} />
            </Link>
            <Link
              role="span"
              to={"#"}
              className="rounded-full cursor-pointer bg-gray-300 text-black h-8  w-8 flex justify-center items-center"
            >
              <RiLink size={20} />
            </Link>
            <Link
              role="span"
              to={"#"}
              className="rounded-full cursor-pointer bg-gray-300 text-black h-8  w-8 flex justify-center items-center"
            >
              <BsInstagram size={20} />
            </Link>
          </div>
          <div className="flex flex-col mx-auto sm:mx-0 gap-2">
            <span className="flex items-center gap-4">
              <IoCall size={20} /> +977 9855060106
            </span>
            <span className="flex items-center gap-4">
              <MdEmail size={20} /> nepqlevsat@gmail.com
            </span>
            <span className="flex items-center gap-4">
              <FaLocationDot /> Bharatpur, Chitwan
            </span>
          </div>
        </div>
      </div>
      <span className="divider divider-neutral"></span>
      <p className="flex gap-3 items-center text-xs sm:text-lg  mx-auto">
        All Rights Reserved NEST© 2022
      </p>
    </div>
  );
}

export default Footer;

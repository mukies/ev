import { BsInstagram } from "react-icons/bs";
import {
  RiYoutubeLine,
  RiFacebookCircleLine,
  RiLinkedinLine,
  RiLink,
} from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[#242424] flex flex-col mt-10 gap-1 text-wrap py-5 sm:py-10 sm:px-20 text-gray-200 h-auto sm:h-[45vh]">
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-2 px-4">
        <div className=" flex-1 flex flex-col gap-1  w-full mx-auto">
          <h3 className="text-2xl font-bold">Product</h3>
          <ul className="list-none text-[16px]">
            <li>AC Wallbox</li>
            <li>DC Charging Station</li>
            <li>Portable EV Charger</li>
            <li>EV Charging Cable</li>
          </ul>
        </div>
        <div className=" flex-1 flex flex-col gap-1  w-full mx-auto">
          <h3 className="text-2xl font-bold">About Us</h3>
          <ul className="list-none text-[16px]">
            <li>Company Profile</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="flex-1 flex flex-col gap-1 mx-auto w-full">
          <h3 className="text-2xl font-bold">Contact Us</h3>
          <ul className="list-none text-[16px]">
            <li className="font-semibold">
              Whats app <span className="font-normal">+123456789</span>
            </li>
            <li className="font-semibold">
              Email: <span className="font-normal">abc@abc.com</span>
            </li>
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
              <RiYoutubeLine size={20} />
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
              <IoCall size={20} /> +1234567890
            </span>
            <span className="flex items-center gap-4">
              <MdEmail size={20} /> abc@abc.com
            </span>
          </div>
        </div>
      </div>
      <span className="divider divider-neutral"></span>
      <p className="flex gap-3 items-center text-xs sm:text-lg  mx-auto">
        Copyright © 2016-2022 Jiangsu Bomern Energy Technology Co., Ltd.{" "}
        <span className="">All Rights Reserved Bomern© 2022</span>
      </p>
    </div>
  );
}

export default Footer;

import { FaHome, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const MobileNavigation = () => {
  return (
    <div className="sticky bottom-0 backdrop-blur-md h-[60px] lg:hidden w-full  z-[90] flex items-center p-3 gap-3">
      <div className="flex-1 flex justify-center items-center ">
        <Link role="span" to={"/"} className="btn btn-md dark:text-white">
          <FaHome size={25} />
        </Link>
      </div>
      <div className="flex-1  flex justify-center items-center">
        <Link
          role="span"
          to={"tel:+9779855060106"}
          className="btn btn-md dark:text-white"
        >
          <FaPhone size={25} />
        </Link>
      </div>
      <div className="flex-1 flex justify-center items-center ">
        <Link
          role="span"
          to={"mailto:nepalevsat@gmail.com"}
          className="btn btn-md dark:text-white"
        >
          <MdEmail size={25} />
        </Link>
      </div>
    </div>
  );
};

export default MobileNavigation;

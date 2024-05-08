import axios from "axios";
import { useState } from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Nav() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const logout = async () => {
    const { data } = await axios.post("/api/admin/logout");
    if (data.success) {
      localStorage.removeItem("_A");
      window.location.href = "/";
    } else {
      toast.error(data.messagae);
    }
  };

  return (
    <nav className="h-[60px]  z-[99] sm:h-[100px] text-gray-700 md:sticky top-0 bg-gray-200 flex justify-center sm:gap-20 lg:gap-0 lg:justify-between  lg:px-10 items-center">
      {/* --  */}
      <div
        onClick={() => {
          navigate("/");
        }}
        className="z-20 cursor-pointer"
      >
        <img
          src="/transparent_logo.png"
          alt="logo"
          className=" h-[40px] sm:h-[60px]  cursor-pointer"
        />
      </div>
      <div className="hidden lg:flex">
        <ul className=" flex items-center list-none  gap-1 text-xl">
          <Link
            to={"/"}
            role="li"
            className="p-2 hover:bg-gray-300 duration-300 rounded-md cursor-pointer capitalize"
          >
            Home
          </Link>
          <Link
            role="li"
            to={"/admin/product"}
            className="p-2 hover:bg-gray-300 duration-300 rounded-md cursor-pointer capitalize"
          >
            Products
          </Link>

          <Link
            role="li"
            to={"/admin/user"}
            className="p-2 hover:bg-gray-300 duration-300 rounded-md cursor-pointer capitalize"
          >
            Users
          </Link>
        </ul>
      </div>
      <div className="hidden md:flex gap-5 lg:gap-10 items-center">
        <span className="cursor-pointer">
          <FaSearch size={25} />
        </span>
        <span onClick={logout} className="btn ">
          {/* <FaSearch size={25} /> */}Logout
        </span>
      </div>

      {/* --------  */}
      <div className=" z-[90] fixed  sm:top-[25px] top-[15px] left-3  lg:hidden">
        <span onClick={() => setShow(true)} className="btn sm:btn-md btn-sm  ">
          <FaBars size={20} />
        </span>
      </div>

      <div
        className={`fixed bg-white z-[100] duration-300 top-0 ${
          !show ? "left-[-1000px]" : "left-[0px]"
        }  bottom-0`}
      >
        <div className="max-w-max overflow-y-scroll max-h-[100dvh] ">
          <ul className="menu min-h-[100dvh]  flex flex-col py-5 rounded-none text-lg bg-base-200 w-80 ">
            <span
              onClick={() => setShow(false)}
              className="btn btn-square text-gray-400"
            >
              <FaTimes />
            </span>
            <li>
              <Link role="li" to={"/"}>
                Home
              </Link>
            </li>

            <li>
              <Link role="a" to={"/admin/product"}>
                Products
              </Link>
            </li>
            <li>
              <Link role="li" to={"/admin/user"}>
                Users
              </Link>
            </li>

            <li className="md:hidden">
              <a>
                <FaSearch /> Search
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* --- */}
    </nav>
  );
}

export default Nav;

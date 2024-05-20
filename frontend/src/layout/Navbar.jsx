import { useState } from "react";
import {
  FaAngleDown,
  FaAngleRight,
  FaBars,
  FaSearch,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import { toast } from "react-toastify";
import axios from "axios";
import AccountDetail from "../components/AccountDetail";

const Navbar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(false);
  const [authPage, setAuthPage] = useState("l");
  const [showDetail, setShowDetail] = useState(false);
  const userAuth = JSON.parse(localStorage.getItem("_U"));

  function close() {
    const el = document.activeElement;
    if (el) {
      el?.blur();
    }
  }
  const logout = async () => {
    const { data } = await axios.post("/api/user/logout");
    if (data.success) {
      localStorage.removeItem("_U");
      navigate("/");
    } else {
      toast.error(data.messagae);
    }
  };

  return (
    <nav className="h-[60px] text-gray-700 dark:text-white z-[99] sm:h-[100px] md:sticky top-0 bg-gray-200 flex justify-center sm:gap-20 lg:gap-0 lg:justify-between  lg:px-5 items-center">
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
      <div className="hidden lg:flex ">
        <ul className=" flex items-center list-none gap-1 text-gray-700 text-xl">
          <li
            onClick={() => navigate("/")}
            className={`p-2 hover:bg-gray-300 duration-300 rounded-md cursor-pointer capitalize `}
          >
            Home
          </li>
          <li className="p-2 hover:bg-gray-300 duration-300 rounded-md cursor-pointer capitalize">
            <div className="dropdown ">
              <div tabIndex={0} className=" flex gap-1 items-center">
                product <FaAngleDown size={18} />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content dark:text-white list-none mt-1 z-[1] text-lg menu p-2 shadow  bg-base-100 rounded-box w-56"
              >
                <li>
                  <div className="dropdown  dropdown-right">
                    <div tabIndex={2} className=" flex gap-1 items-center">
                      AC EV charger <FaAngleRight size={18} />
                    </div>
                    <ul
                      tabIndex={3}
                      className="dropdown-content ml-0 z-[0] menu p-2 shadow  bg-base-100 text-[20px] rounded-box w-60"
                    >
                      <li
                        onClick={() => {
                          navigate("/product/homeuse-ev-charger");
                          close();
                        }}
                      >
                        <a>Homeuse EV Charger</a>
                      </li>
                      <li
                        onClick={() => {
                          navigate("/product/public-ev-charger");
                          close();
                        }}
                      >
                        <a>Public EV Charger</a>
                      </li>
                      <li
                        onClick={() => {
                          navigate("/product/portable-ev-charger");
                          close();
                        }}
                      >
                        <a>Portable EV Charger</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li onClick={() => navigate("/product/dc-charging-station")}>
                  <a>DC charging station</a>
                </li>
                <li
                  onClick={() => {
                    navigate(`/charging-cable`);
                    close();
                  }}
                >
                  <a>Charging Cable</a>
                </li>
                <li
                  onClick={() => {
                    navigate(`/ev-adapter`);
                    close();
                  }}
                >
                  <a>EV Adapter</a>
                </li>
                <li
                  onClick={() => {
                    navigate(`/ev-parts`);
                    close();
                  }}
                >
                  <a>EV Parts</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="p-2 hover:bg-gray-300 duration-300 rounded-md cursor-pointer capitalize">
            <div className="dropdown ">
              <div tabIndex={0} role="li" className=" flex gap-1 items-center">
                solutions <FaAngleDown size={18} />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content dark:text-white mt-1 z-[1] list-none text-lg menu p-2 shadow  bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to={"/solution/ac-ev-charger"} role="a">
                    AC Charger
                  </Link>
                </li>
                <li>
                  <Link role="a" to={"/solution/dc-ev-charger"}>
                    DC Charger
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="p-2 hover:bg-gray-300 duration-300 rounded-md cursor-pointer capitalize">
            <div className="dropdown ">
              <div tabIndex={0} role="li" className=" flex gap-1 items-center">
                about us <FaAngleDown size={18} />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content dark:text-white mt-1 z-[1] menu p-2 list-none shadow text-lg bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link role="a" to={"/about-us"}>
                    Company Profile
                  </Link>
                </li>

                <li>
                  <Link role="a" to={"/faq"}>
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <Link
            role="li"
            to={"/contact-us"}
            className="p-2 hover:bg-gray-300 duration-300 rounded-md cursor-pointer capitalize"
          >
            contact us
          </Link>
        </ul>
      </div>
      <div className="hidden md:flex gap-5 text-gray-700 lg:gap-3 items-center">
        <Link role="span" to={"/product-search"} className="cursor-pointer">
          <FaSearch size={25} />
        </Link>
        {!userAuth ? (
          <span
            onClick={() => setAuth(true)}
            className="flex items-center text-xl cursor-pointer gap-1"
          >
            <IoPersonSharp size={21} />
            Login
          </span>
        ) : (
          ""
        )}
        {userAuth ? (
          <div className="flex relative items-center group ">
            <span className="flex items-center text-xl gap-1 cursor-pointer">
              <IoPersonSharp size={21} /> <FaChevronDown size={20} />
            </span>
            <div className="absolute bg-white border-2 border-gray-200 text-gray-700 rounded-md hidden py-3  group-hover:flex justify-center items-center left-[-100px] right-[-10px] top-[100%] h-auto">
              <ul className=" text-nowrap w-full list-none flex flex-col gap-1">
                <li
                  onClick={() => setShowDetail(true)}
                  className="text-[15px]  hover:bg-gray-100 duration-300 cursor-pointer p-1"
                >
                  Manage Account
                </li>
                <li
                  onClick={logout}
                  className="text-[15px] w-full  hover:bg-gray-100 duration-300 cursor-pointer p-1"
                >
                  Logout
                </li>
              </ul>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      {showDetail && <AccountDetail closePopup={setShowDetail} />}
      {auth && (
        <div className="border-2 text-wrap fixed top-0 left-0 right-0 bottom-0 bg-[#000000d0] flex justify-center items-center z-[222] border-black">
          {authPage == "l" ? (
            <Login setAuth={setAuth} setAuthPage={setAuthPage} />
          ) : (
            <Register setAuth={setAuth} setAuthPage={setAuthPage} />
          )}
        </div>
      )}
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
        <div className="max-w-max overflow-y-auto overflow-x-hidden max-h-[100dvh] ">
          <ul className="menu min-h-[100dvh]  flex flex-col py-5 rounded-none text-lg bg-base-200 w-80 ">
            <span
              onClick={() => setShow(false)}
              className="btn btn-square text-gray-400"
            >
              <FaTimes />
            </span>
            <li
              onClick={() => {
                navigate("/");
                setShow(false);
              }}
            >
              <a>Home</a>
            </li>
            <li>
              <details>
                <summary>Product</summary>
                <ul>
                  <li>
                    <details>
                      <summary>AC EV charger</summary>
                      <ul>
                        <li
                          onClick={() => {
                            navigate("/product/homeuse-ev-charger");
                            setShow(false);
                          }}
                        >
                          <a>Homeuse EV Charger</a>
                        </li>
                        <li
                          onClick={() => {
                            navigate("/product/public-ev-charger");
                            setShow(false);
                          }}
                        >
                          <a>Public EV Charger</a>
                        </li>
                        <li
                          onClick={() => {
                            navigate("/product/portable-ev-charger");
                            setShow(false);
                          }}
                        >
                          <a>Portable EV Charger</a>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li
                    onClick={() => {
                      navigate("/product/dc-charging-station");
                      setShow(false);
                    }}
                  >
                    <a>DC charging station</a>
                  </li>
                  <li
                    onClick={() => {
                      navigate(`/charging-cable`);
                      setShow(false);
                    }}
                  >
                    <a>Charging Cable</a>
                  </li>
                  <li
                    onClick={() => {
                      navigate(`/ev-adapter`);
                      setShow(false);
                    }}
                  >
                    <a>EV Adapter</a>
                  </li>
                  <li
                    onClick={() => {
                      navigate(`/ev-parts`);
                      setShow(false);
                    }}
                  >
                    <a>EV Parts</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Solutions</summary>
                <ul>
                  <li>
                    <Link to={"/solution/ac-ev-charger"} role="a">
                      AC Charger
                    </Link>
                  </li>
                  <li>
                    <Link role="a" to={"/solution/dc-ev-charger"}>
                      DC Charger
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>About Us</summary>
                <ul>
                  <li>
                    <Link role="a" to={"/about-us"}>
                      Company Profile
                    </Link>
                  </li>

                  <li>
                    <Link role="a" to={"/faq"}>
                      FAQ
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link role="a" to={"/contact-us"}>
                Contact Us
              </Link>
            </li>
            {!userAuth ? (
              <li onClick={() => setAuth(true)} className="md:hidden">
                <a>
                  <IoPersonSharp /> Login/Register
                </a>
              </li>
            ) : (
              ""
            )}

            <li onClick={() => setShow(false)} className="md:hidden">
              <Link role="a" to={"/product-search"}>
                <FaSearch /> Search
              </Link>
            </li>
            {userAuth ? (
              <>
                <li
                  onClick={() => {
                    setShowDetail(true);
                    setShow(false);
                  }}
                  className=""
                >
                  <a>Manage Account</a>
                </li>
                <li onClick={logout} className="md:hidden">
                  <a>Logout</a>
                </li>
              </>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>

      {/* --- */}
    </nav>
  );
};

export default Navbar;

import { FaAngleDown, FaAngleRight, FaBars, FaSearch } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  function close() {
    const el = document.activeElement;
    if (el) {
      el?.blur();
    }
  }
  return (
    <nav className="h-[60px] z-[99] sm:h-[100px] md:sticky top-0 bg-gray-200 flex justify-center sm:gap-20 lg:gap-0 lg:justify-between  lg:px-5 items-center">
      <div className="drawer z-[90] fixed  sm:top-[25px] top-[15px] left-3  lg:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className="btn sm:btn-md btn-sm  drawer-button"
          >
            <FaBars size={20} />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          {/* <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
           
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul> */}
          <ul className="menu  flex flex-col py-5 rounded-none text-lg bg-base-200 w-80 min-h-full">
            <li>
              <a>Home</a>
            </li>
            <li>
              <details open>
                <summary>Product</summary>
                <ul>
                  <li>
                    <details>
                      <summary>AC EV charger</summary>
                      <ul>
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
                    </details>
                  </li>
                  <li>
                    <a>DC charging station</a>
                  </li>
                  <li>
                    <a>Charging Cable</a>
                  </li>
                  <li>
                    <a>EV Adapter</a>
                  </li>
                  <li>
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
                    <a>AC Charger</a>
                  </li>
                  <li>
                    <a>DC Charger</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>About Us</summary>
                <ul>
                  <li>
                    <a>Company Profile</a>
                  </li>
                  <li>
                    <a>News</a>
                  </li>
                  <li>
                    <a>FAQ</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
            <li className="md:hidden">
              <a>
                <IoPersonSharp /> Login/Register
              </a>
            </li>
            <li className="md:hidden">
              <a>
                <FaSearch /> Search
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* --  */}
      <div className="">
        <img
          src="/logo.webp"
          alt="logo"
          className="h-[40px] sm:h-[60px] cursor-pointer"
        />
      </div>
      <div className="hidden lg:flex">
        <ul className=" flex items-center gap-1 text-xl">
          <li
            onClick={() => navigate("/")}
            className="p-2 hover:bg-gray-300 duration-300 rounded-md cursor-pointer capitalize"
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
                className="dropdown-content mt-1 z-[1] text-lg menu p-2 shadow  bg-base-100 rounded-box w-56"
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
                className="dropdown-content mt-1 z-[1] text-lg menu p-2 shadow  bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>AC Charger</a>
                </li>
                <li>
                  <a>DC Charger</a>
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
                className="dropdown-content mt-1 z-[1] menu p-2 shadow text-lg bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Company Profile</a>
                </li>
                <li>
                  <a>News</a>
                </li>
                <li>
                  <a>FAQ</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="p-2 hover:bg-gray-300 duration-300 rounded-md cursor-pointer capitalize">
            contact us
          </li>
        </ul>
      </div>
      <div className="hidden md:flex gap-5 lg:gap-3 items-center">
        <span className="cursor-pointer">
          <FaSearch size={25} />
        </span>
        <span className="flex items-center text-xl cursor-pointer gap-1">
          <IoPersonSharp size={21} /> Login
        </span>
      </div>
    </nav>
  );
};

export default Navbar;

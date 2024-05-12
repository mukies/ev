/* eslint-disable react/prop-types */
import { FaTimes } from "react-icons/fa";

function Thankyou({ closePopup }) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-[100] bg-[#000000dc] flex justify-center items-center">
      <div className="h-auto p-4 flex flex-col justify-center items-center gap-5 text-gray-800 w-full lg:w-[40vw] sm:w-[50vw] relative bg-white rounded-xl shadow-lg ">
        <div
          className="absolute top-[5px] right-[5px] btn btn-sm btn-circle"
          onClick={() => closePopup(false)}
        >
          <span>
            <FaTimes />
          </span>
        </div>
        <span className="text-5xl text-[green] font-semibold text-center">
          Thank You !
        </span>
        <div className="  w-full  flex justify-center">
          <img src="/favicon.png" alt="nest logo" className="" />
        </div>
        <span className="text-3xl text-center ">
          Your inquiry was submitted.
        </span>
      </div>
    </div>
  );
}

export default Thankyou;

/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { ImEye } from "react-icons/im";
import { TbEyeClosed } from "react-icons/tb";

function AccountDetail({ closePopup }) {
  const [show, setShow] = useState(false);
  return (
    <div className="fixed top-0 left-0 right-0 text-wrap text-gray-700 bottom-0 bg-[#000000d5] z-[99] flex justify-center items-center">
      <div className="bg-white h-auto sm:h-auto  sm:w-auto p-5  flex justify-center items-center sm:items-start relative w-full rounded-xl">
        <div className="absolute top-0 right-0">
          <span
            onClick={() => closePopup(false)}
            className="btn btn-circle sm:btn-sm"
          >
            <FaTimes />
          </span>
        </div>
        <div className="flex flex-col">
          <div className="card  shrink-0 min-w-full ">
            <span className="sm:text-2xl text-3xl font-semibold text-center">
              Change Password
            </span>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="card-body gap-[5px]"
            >
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-gray-700">Old Password</span>
                </label>
                <div className="flex items-center relative">
                  <input
                    type={show ? "text" : "password"}
                    placeholder="old password"
                    className="input input-bordered w-full sm:input-sm bg-gray-100"
                    required
                  />
                </div>
              </div>

              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-gray-700">New Password</span>
                </label>
                <div className="flex items-center relative">
                  <input
                    type={show ? "text" : "password"}
                    placeholder="new password"
                    className="input input-bordered w-full sm:input-sm bg-gray-100"
                    required
                  />
                  <span
                    onClick={() => setShow((p) => !p)}
                    className="absolute right-[10px] top-[50%] cursor-pointer translate-y-[-50%]"
                  >
                    {show ? <TbEyeClosed size={20} /> : <ImEye size={20} />}
                  </span>
                </div>
              </div>
              <div className="form-control mt-5 ">
                <button className="btn btn-primary text-white">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountDetail;

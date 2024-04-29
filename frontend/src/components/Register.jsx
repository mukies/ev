/* eslint-disable react/prop-types */
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Register({ setAuth, setAuthPage }) {
  return (
    <>
      <div className="w-[90vw] sm:w-[40vw] text-gray-700 flex justify-center text-wrap ">
        <div className="card relative shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="absolute top-0 right-0">
            <span
              onClick={() => setAuth(false)}
              className="btn btn-circle text-red-600"
            >
              <FaTimes />
            </span>
          </div>
          <form className="card-body gap-[5px]">
            <span className="text-3xl font-bold text-center underline">
              Register
            </span>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="full name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <span className="label-text-alt ">
                  Already have an Account ?{" "}
                  <Link
                    onClick={() => setAuthPage("l")}
                    role="a"
                    className="link link-primary"
                    to={"#"}
                  >
                    Login
                  </Link>
                </span>
              </label>
            </div>
            <div className="form-control ">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;

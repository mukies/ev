/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { ImEye } from "react-icons/im";
import { TbEyeClosed } from "react-icons/tb";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Register({ setAuth, setAuthPage }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleRegister = async () => {
    if (!fullName || !email || !password) {
      toast.error("Please fill the form properly.");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be 6 Character long.");
      return;
    }

    if (!loading) {
      setLoading(true);
      try {
        const { data } = await axios.post(`/api/user/register`, {
          fullName,
          email,
          password,
        });
        console.log("register", data);
        if (data.success) {
          const { data: loginData } = await axios.post("/api/user/login", {
            email,
            password,
          });
          console.log("login", loginData);
          if (loginData.success) {
            localStorage.setItem("_U", JSON.stringify(loginData.id));
            setAuth(false);
          } else {
            toast.error(loginData.message);
          }
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error("Something went wrong while Registration.");
      } finally {
        setLoading(false);
      }
    }
  };

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
          <form
            onSubmit={(e) => e.preventDefault()}
            className="card-body gap-[5px]"
          >
            <span className="text-3xl dark:text-white font-bold text-center underline">
              Register
            </span>
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-white">Full Name</span>
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="full name"
                className="input input-bordered bg-gray-100"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-white">Email</span>
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="email"
                className="input input-bordered bg-gray-100"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-white">Password</span>
              </label>
              <div className="flex items-center relative">
                <input
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  className="input input-bordered w-full bg-gray-100"
                  required
                />
                <span
                  onClick={() => setShow((p) => !p)}
                  className="absolute cursor-pointer right-[10px] top-[25%]"
                >
                  {show ? <TbEyeClosed size={25} /> : <ImEye size={25} />}
                </span>
              </div>
              <label className="label">
                <span className="label-text-alt dark:text-white ">
                  Already have an Account ?{" "}
                  <Link
                    onClick={() => setAuthPage("l")}
                    role="a"
                    className="link link-primary"
                  >
                    Login
                  </Link>
                </span>
              </label>
            </div>
            <div className="form-control ">
              <button onClick={handleRegister} className="btn btn-primary">
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Register"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;

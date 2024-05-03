/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { ImEye } from "react-icons/im";
import { TbEyeClosed } from "react-icons/tb";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Login({ setAuth, setAuthPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Please fill the form properly.");
      return;
    }
    if (!loading) {
      setLoading(true);
      try {
        const { data } = await axios.post("/api/user/login", {
          email,
          password,
        });
        if (data.success) {
          localStorage.setItem("_U", JSON.stringify(data.id));
          setAuth(false);
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <div className="w-[90vw]  sm:w-[40vw] text-gray-700 flex justify-center text-wrap ">
        <div className="card relative shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="absolute top-0 right-0">
            <span
              onClick={() => setAuth(false)}
              className="btn btn-circle text-red-600"
            >
              <FaTimes />
            </span>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="card-body">
            <span className="text-3xl font-bold text-center underline">
              Login
            </span>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                <span className="label-text-alt ">
                  Didn&rsquo;t have an Account ?{" "}
                  <Link
                    onClick={() => setAuthPage("r")}
                    role="a"
                    className="link link-primary"
                    to={"#"}
                  >
                    Register
                  </Link>
                </span>
              </label>
            </div>
            <div className="form-control ">
              <button onClick={handleLogin} className="btn btn-primary">
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;

import { useState } from "react";
import { ImEye } from "react-icons/im";
import { TbEyeClosed } from "react-icons/tb";
import { useAdminLogin } from "../../hooks/adminLogin";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const { adminLogin, loading } = useAdminLogin();

  const handleLogin = () => {
    if (!email || !password) {
      toast.error("Please Enter Email and Password");
      return;
    }

    if (!loading) {
      adminLogin(email, password);
    }
  };

  return (
    <div className="h-[100dvh] w-full flex justify-center items-center">
      <div className="w-[90vw]  sm:w-[40vw] text-gray-700 flex justify-center text-wrap ">
        <div className="card  shrink-0 w-full max-w-sm shadow-2xl bg-gray-100">
          <form onSubmit={(e) => e.preventDefault()} className="card-body">
            <span className="text-3xl font-bold text-center ">
              <mark className="bg-[red] text-white">Admin</mark>{" "}
              <span className="underline">Login</span>
            </span>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700">Email</span>
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
                <span className="label-text text-gray-700">Password</span>
              </label>
              <div className="flex items-center relative">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={show ? "text" : "password"}
                  placeholder="password"
                  className="input w-full input-bordered bg-gray-100"
                  required
                />
                <span
                  onClick={() => setShow((p) => !p)}
                  className="absolute cursor-pointer right-[10px] top-[25%]"
                >
                  {show ? <TbEyeClosed size={25} /> : <ImEye size={25} />}
                </span>
              </div>
            </div>
            <div className="form-control mt-5">
              <button
                onClick={handleLogin}
                className="btn btn-primary text-white"
              >
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
    </div>
  );
}

export default Login;

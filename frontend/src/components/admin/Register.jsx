import { useState } from "react";
import { ImEye } from "react-icons/im";
import { TbEyeClosed } from "react-icons/tb";
import { useAdminRegister } from "../../hooks/adminRegister";
import { toast } from "react-toastify";

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const { loading, adminRegister } = useAdminRegister();

  const handleRegister = () => {
    if (!fullName || !email || !password) {
      toast.error("Please fill the form properly.");
      return;
    }

    if (password.length < 6) {
      toast.error(`Password must be at least \n 6 Character long.`);
      return;
    }

    if (!loading) {
      adminRegister(fullName, email, password);
    }
  };

  return (
    <div className="h-[100dvh] w-full flex justify-center items-center ">
      <div className="w-[90vw] sm:w-[40vw] text-gray-700 flex justify-center text-wrap ">
        <div className="card  shrink-0 w-full max-w-sm shadow-2xl  bg-gray-100">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="card-body gap-[5px]"
          >
            <span className="text-3xl font-bold text-center ">
              <mark className="bg-[red] text-white">Admin</mark>{" "}
              <span className="underline">Register</span>
            </span>
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-gray-700">Full Name</span>
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
                <span className="label-text text-gray-700">Email</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
                className="input input-bordered bg-gray-100"
                required
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-gray-700">Password</span>
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
                  className="absolute right-[10px] top-[25%]"
                >
                  {show ? <TbEyeClosed size={25} /> : <ImEye size={25} />}
                </span>
              </div>
            </div>
            <div className="form-control mt-5 ">
              <button
                onClick={handleRegister}
                className="btn btn-primary text-white"
              >
                {loading ? (
                  <span className="loading-spinner loading"></span>
                ) : (
                  "Register"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;

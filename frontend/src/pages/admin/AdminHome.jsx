import { Link, useNavigate } from "react-router-dom";
import LayoutAdmin from "../../layout/admin/LayoutAdmin";

function AdminHome() {
  const navigate = useNavigate();
  return (
    <LayoutAdmin>
      <div className="max-w-[768px] flex flex-col mx-auto border-l-2 text-gray-700 text-wrap border-r-2 border-gray-300 min-h-[calc(100vh-100px)] sm:min-h-[calc(80vh-100px)]">
        <div className="flex justify-center items-center flex-col py-10">
          <span className="text-3xl sm:text-5xl font-semibold">
            Hello Mukesh
          </span>
          <span className="text-2xl font-semibold text-[red] underline">
            Welcome to Admin Panel
          </span>
          <span className="divider divider-accent"></span>
        </div>
        <div className="flex flex-col p-5 items-center sm:flex-row gap-5 h-auto justify-center">
          <div className="flex-1  flex flex-col">
            <div className="h-[300px] border-2 border-gray-400 rounded-lg overflow-hidden">
              <img
                onClick={() => navigate("/admin/product")}
                src="/ev-charger.webp"
                alt="product-png"
                className="h-full w-full object-cover object-center sm:hover:scale-110 cursor-pointer duration-200"
              />
            </div>
            <span className="divider divider-primary opacity-10"></span>
            <Link
              role="button"
              to={"/admin/product"}
              className="btn btn-accent "
            >
              Manage Product
            </Link>
          </div>
          <div className="flex-1  flex flex-col">
            <div className="h-[300px] border-2 border-gray-400 rounded-lg overflow-hidden">
              <img
                onClick={() => navigate("/admin/user")}
                src="/user.png"
                alt="product-png"
                className="h-auto w-auto  sm:hover:scale-110 cursor-pointer duration-200"
              />
            </div>
            <span className="divider divider-primary opacity-10"></span>
            <Link role="button" to={"/admin/user"} className="btn btn-accent ">
              Manage Users
            </Link>
          </div>
        </div>
        {/* change pass */}
        <div className="h-auto w-full flex my-5 sm:my-10 justify-center items-center">
          <div className="w-[99vw]  sm:w-[40vw] text-gray-700 flex justify-center text-wrap ">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-gray-100">
              <form onSubmit={(e) => e.preventDefault()} className="card-body">
                <span className="text-3xl  font-bold text-center ">
                  Change Password
                </span>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-700">
                      Old Password
                    </span>
                  </label>
                  <input
                    type="password"
                    placeholder="old password"
                    className="input input-bordered bg-gray-100"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-700">
                      New Password
                    </span>
                  </label>
                  <input
                    type="password"
                    placeholder="new password"
                    className="input input-bordered bg-gray-100"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-700">
                      Confirm Password
                    </span>
                  </label>
                  <input
                    type="password"
                    placeholder="confirm password"
                    className="input input-bordered bg-gray-100"
                    required
                  />
                </div>
                <div className="form-control mt-5">
                  <button className="btn btn-primary text-white capitalize">
                    change password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
}

export default AdminHome;

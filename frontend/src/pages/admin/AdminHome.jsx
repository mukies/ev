import { Link, useNavigate } from "react-router-dom";
import LayoutAdmin from "../../layout/admin/LayoutAdmin";
import { useEffect, useState } from "react";
import { useUserDetails } from "../../hooks/getUserDetails";
import { toast } from "react-toastify";
import axios from "axios";

function AdminHome() {
  const navigate = useNavigate();
  const adminAuth = JSON.parse(localStorage.getItem("_A"));
  const { userDetails, loading, user } = useUserDetails();
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [passwordChangeLoading, setPasswordChangeLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    userDetails(adminAuth);
  }, []);

  const handleChangePassword = async () => {
    if (!oldPass || !newPass || !confirmPass) {
      toast.error("Input fields shouldn't be empty.");
      return;
    }
    if (newPass !== confirmPass) {
      toast.error("Password did't match.");
      return;
    }

    if (newPass.length < 6) {
      toast.error("New password must be at least 6 character long.");
      return;
    }

    if (!passwordChangeLoading) {
      setPasswordChangeLoading(true);
      try {
        const { data } = await axios.put("/api/admin/change-password", {
          oldPass,
          newPass,
        });

        if (data.success) {
          toast.success("Password has been changed.");
          setOldPass("");
          setNewPass("");
          setConfirmPass("");
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error(error);
      } finally {
        setPasswordChangeLoading(false);
      }
    }
  };

  return (
    <LayoutAdmin>
      <div className="max-w-[768px] flex flex-col mx-auto border-l-2 text-gray-700 text-wrap border-r-2 border-gray-300 min-h-[calc(100vh-100px)] sm:min-h-[calc(80vh-100px)]">
        <div className="flex justify-center items-center flex-col py-10">
          {loading ? (
            <span className="loading loading-dots"></span>
          ) : (
            <span
              onClick={() => console.log("user", user)}
              className="text-3xl sm:text-5xl font-semibold capitalize"
            >
              Hello {user?.fullName?.substr(0, 9)}
              {user?.fullName?.length > 8 ? "..." : ""}
            </span>
          )}
          <span className="text-2xl font-semibold text-[red] underline">
            Welcome to Admin Panel
          </span>
          <span className="divider divider-accent"></span>
        </div>
        <div className="flex flex-col p-5 items-center sm:flex-row gap-2 h-auto justify-center">
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
              Products
            </Link>
          </div>
          <div className="flex-1  flex flex-col">
            <div className="h-[300px] border-2 border-gray-400 rounded-lg overflow-hidden">
              <img
                onClick={() => navigate("/admin/inquiries")}
                src="/inquiry.png"
                alt="inquiry-png"
                className="h-full w-full object-cover object-center sm:hover:scale-110 cursor-pointer duration-200"
              />
            </div>
            <span className="divider divider-primary opacity-10"></span>
            <Link
              role="button"
              to={"/admin/inquiries"}
              className="btn btn-accent "
            >
              Inquiries
            </Link>
          </div>
          <div className="flex-1  flex flex-col">
            <div className="h-[300px] border-2 border-gray-400 rounded-lg overflow-hidden">
              <img
                onClick={() => navigate("/admin/user")}
                src="/user.png"
                alt="user-icon-png"
                className="h-full w-full object-cover object-center sm:hover:scale-110 cursor-pointer duration-200"
              />
            </div>
            <span className="divider divider-primary opacity-10"></span>
            <Link role="button" to={"/admin/user"} className="btn btn-accent ">
              Users
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
                    value={oldPass}
                    onChange={(e) => setOldPass(e.target.value)}
                    type={showPass ? "text" : "password"}
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
                    value={newPass}
                    onChange={(e) => setNewPass(e.target.value)}
                    type={showPass ? "text" : "password"}
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
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                    type={showPass ? "text" : "password"}
                    placeholder="confirm password"
                    className="input input-bordered bg-gray-100"
                    required
                  />
                </div>
                <label
                  htmlFor="checkBox"
                  className="flex items-center gap-2 cursor-pointer max-w-max"
                >
                  <input
                    onChange={(e) => setShowPass(e.target.checked)}
                    id="checkBox"
                    type="checkbox"
                    className="checkbox-success  checkbox"
                  />
                  <span>show password</span>
                </label>
                <div className="form-control mt-5">
                  <button
                    onClick={handleChangePassword}
                    className="btn btn-primary text-white capitalize"
                  >
                    {passwordChangeLoading ? (
                      <span className="loading loading-spinner"></span>
                    ) : (
                      "change password"
                    )}
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

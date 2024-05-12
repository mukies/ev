import { useState } from "react";
import Layout from "../layout/Layout";
import { toast } from "react-toastify";
import axios from "axios";
import Thankyou from "../components/popup/Thankyou";

function InquiryPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [detail, setDetail] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [show, setShow] = useState(false);

  const handleInquiry = async () => {
    if (!name || !email || !location || !phone || !detail) {
      toast.error("Please fill the form properly.");
      setErr(true);
      return;
    }

    if (!loading) {
      setErr(false);
      setLoading(true);
      try {
        const { data } = await axios.post("/api/inquiry/add-inquiry", {
          name,
          email,
          phone,
          location,
          detail,
        });
        if (data.success) {
          toast.success(data.message);
          setName("");
          setEmail("");
          setPhone("");
          setLocation("");
          setDetail("");
          setShow(true);
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
    <Layout>
      <div className="text-gray-700 flex flex-col sm:flex-row sm:px-10  py-5 ">
        {show && <Thankyou closePopup={setShow} />}
        <div className="flex-1 flex flex-col justify-center gap-10 px-1">
          <div className="flex flex-col gap-5">
            <h1 className="sm:text-5xl text-4xl text-center font-bold uppercase">
              SERVICE MESSAGE
            </h1>
            <p className="sm:text-3xl text-2xl text-center">
              For getting more information or purchasing our products, please
              leave a message
            </p>
          </div>
          <div className=" h-[300px] flex justify-center w-auto overflow-hidden">
            <img
              src="/black_logo.png"
              alt="nest icon"
              className="h-full w-auto  rounded-3xl"
            />
          </div>
          <p className="sm:text-2xl text-xl text-center">
            Committed to brand communication, We goes deep into the global
            layout to promote premium products and superb service to every
            corner of the world, and provide our employees with an international
            and diversified development platform.
          </p>
        </div>
        <div className="flex-1 ">
          <div className="card shrink-0 sm:w-[80%] w-full mx-auto  ">
            <form className="card-body" onSubmit={(e) => e.preventDefault()}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-700">Name:</span>
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Name"
                  className="input input-bordered bg-gray-100"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-700">Email:</span>
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  className="input input-bordered bg-gray-100"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-700">Telephone:</span>
                </label>
                <input
                  maxLength={15}
                  value={phone}
                  onChange={(e) => {
                    if (/^\d*$/.test(e.target.value)) {
                      setPhone(e.target.value);
                    }
                  }}
                  type="text"
                  placeholder="Telephone"
                  className="input input-bordered  bg-gray-100"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-700">Location:</span>
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Location"
                  className="input input-bordered  bg-gray-100"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-700">
                    Detailed requirements:
                  </span>
                </label>
                <textarea
                  type="text"
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                  placeholder="Requirement"
                  className="textarea textarea-bordered  bg-gray-100"
                  required
                />
              </div>
              {(err && !name) ||
              (err && !email) ||
              (err && !phone) ||
              (err && !location) ||
              (err && !detail) ? (
                <span className="text-sm text-[red] text-center">
                  form Vaidation error !!
                </span>
              ) : (
                ""
              )}
              <div className="form-control mt-4">
                <button
                  className="btn btn-primary capitalize text-white"
                  onClick={handleInquiry}
                >
                  {loading ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    "submit"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default InquiryPage;

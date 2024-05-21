import { useState } from "react";
import Layout from "../layout/Layout";
import { FaLocationDot } from "react-icons/fa6";
import { FaMobileScreenButton } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Thankyou from "../components/popup/Thankyou";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleContact = async () => {
    if (!name || !email || !message) {
      toast.error("Please fill the form properly.");
      return;
    }

    if (!loading) {
      try {
        setLoading(true);
        const { data } = await axios.post("/api/user/contact-message", {
          name,
          email,
          message,
        });
        if (data.success) {
          setShow(true);
          setName("");
          setEmail("");
          setMessage("");
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
    <Layout title={"Nest - Contact Us"}>
      <div
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/contact-us-bg.webp')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
        className="text-white min-h-[calc(100vh-100px)] flex justify-center items-center"
      >
        {show && <Thankyou title={"contact"} closePopup={setShow} />}
        <div
          style={{
            background:
              "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/contact-us-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className=" w-[90vw] p-2 flex flex-col gap-5 sm:w-[70vw] h-[90%] sm:h-full"
        >
          <div className="flex flex-col gap-2 px-5 justify-center items-center">
            <h2 className="text-3xl font-bold">Contact Us</h2>
            <div className="flex flex-col justify-center items-center ">
              <p className="text-center sm:w-[70%] text-lg">
                Whether you want to learn more about us or our products, or just
                say hello, we are here looking forward to hearing from you!
              </p>
              <p className="text-center sm:w-[70%] text-lg">
                {" "}
                You + Us = AWESOME!
              </p>
            </div>
          </div>
          <div className="w-[80%] flex flex-col sm:flex-row gap-2 items-center  mx-auto">
            <div className=" flex-1 ">
              <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="card-body text-black"
                >
                  <div className="form-control">
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
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="textarea textarea-bordered bg-gray-100"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="form-control ">
                    <button onClick={handleContact} className="btn btn-primary">
                      {loading ? (
                        <span className="loading loading-spinner"></span>
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex-1  flex gap-3 flex-col">
              <div className="flex items-center gap-2">
                <FaLocationDot /> <span>Bharatpur-11, Chitwan, Nepal</span>
              </div>
              <Link
                role="div"
                to={"tel:+9779855060106"}
                className="flex group items-center cursor-pointer gap-2"
              >
                <FaMobileScreenButton />{" "}
                <span className="sm:group-hover:text-[#8d8dfa] duration-150">
                  +977 9855060106
                </span>
              </Link>
              <Link
                role="div"
                to={"mailto:nepalevsat@gmail.com"}
                className="flex cursor-pointer group items-center gap-2"
              >
                <MdMail />{" "}
                <span className="sm:group-hover:text-[#8d8dfa] duration-150">
                  nepalevsat@gmail.com
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

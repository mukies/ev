import Layout from "../layout/Layout";
import { FaLocationDot } from "react-icons/fa6";
import { FaMobileScreenButton } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

const Contact = () => {
  return (
    <Layout>
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
          <div className="w-[80%] flex gap-2 items-center  mx-auto">
            <div className=" flex-1 ">
              <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
                <form className="card-body text-black">
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Name"
                      className="input input-bordered bg-gray-100"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="email"
                      placeholder="Email"
                      className="input input-bordered bg-gray-100"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <textarea
                      className="textarea textarea-bordered bg-gray-100"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="form-control ">
                    <button className="btn btn-primary">Submit</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex-1  flex gap-3 flex-col">
              <div className="flex items-center gap-2">
                <FaLocationDot /> <span>Bharatpur, Chitwan, Nepal</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMobileScreenButton /> <span>+977 987654321</span>
              </div>
              <div className="flex items-center gap-2">
                <MdMail /> <span>test@test.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

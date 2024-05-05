import Layout from "../layout/Layout";

function InquiryPage() {
  return (
    <Layout>
      <div className="text-gray-700 flex flex-col sm:flex-row sm:px-10  py-5 ">
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
          <p className="sm:text-2xl text-xl text-center">
            Committed to brand communication, We goes deep into the global
            layout to promote premium products and superb service to every
            corner of the world, and provide our employees with an international
            and diversified development platform.
          </p>
        </div>
        <div className="flex-1 ">
          <div className="card shrink-0 sm:w-[80%] w-full mx-auto  ">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-700">Name:</span>
                </label>
                <input
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
                  placeholder="Requirement"
                  className="textarea textarea-bordered  bg-gray-100"
                  required
                />
              </div>
              <div className="form-control mt-4">
                <button className="btn btn-primary capitalize text-white">
                  submit
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

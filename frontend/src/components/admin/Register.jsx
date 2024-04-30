function Register() {
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
                placeholder="email"
                className="input input-bordered bg-gray-100"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered bg-gray-100"
                required
              />
            </div>
            <div className="form-control mt-5 ">
              <button className="btn btn-primary text-white">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;

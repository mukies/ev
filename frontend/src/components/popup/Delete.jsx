/* eslint-disable react/prop-types */
function Delete({ cancel, action }) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-[999] bg-[#000000de] flex justify-center items-center">
      <div className="w-[60vw] sm:w-[30vw] bg-white rounded-lg flex flex-col gap-5 p-4">
        <h2 className="text-center text-2xl sm:text-3xl">Are you sure ?</h2>
        <div className="flex items-center justify-around">
          <button
            onClick={() => {
              action();
              cancel(false);
            }}
            className="btn btn-error btn-md text-white"
          >
            Delete
          </button>
          <button
            onClick={() => cancel(false)}
            className="btn btn-active btn-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Delete;

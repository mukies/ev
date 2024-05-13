/* eslint-disable react/prop-types */
function DeletePopup({ action, cancel }) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-[999] bg-[#000000de] flex justify-center items-center">
      <div>
        <div className="card w-96 bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Are you sure ?</h2>
            <p>Press &rsquo;Cancel&rsquo; to abort the action.</p>
            <div className="card-actions justify-end">
              <button
                onClick={() => {
                  action();
                  cancel(false);
                }}
                className="btn btn-primary"
              >
                Delete
              </button>
              <button onClick={() => cancel(false)} className="btn btn-ghost">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeletePopup;

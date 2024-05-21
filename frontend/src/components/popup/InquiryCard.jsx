import { FaTimes } from "react-icons/fa";

/* eslint-disable react/prop-types */
function InquiryCard({ cardItem, setCard }) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0  bg-[#000000c8] z-[111] flex justify-center items-center">
      <div className="max-w-max relative h-auto   rounded-lg">
        <div className="card w-[350px]  overflow-x-hidden overflow-y-auto max-h-[550px] sm:w-96 lg:w-[60vw] p-2 bg-cyan-500 text-primary-content ">
          <span className="underline text-2xl text-center text-gray-900 font-semibold">
            Inquiry Details
          </span>
          <div className="card-body text-gray-900">
            <h2 className="card-title font-normal capitalize text-lg ">
              <span className="font-[600] text-[20px]  ">Name:</span>{" "}
              {cardItem.name}
            </h2>
            <h2 className="card-title font-normal text-lg">
              <span className="font-[600] text-[20px]  ">Email:</span>{" "}
              {cardItem.email}
            </h2>
            <h2 className="card-title font-normal text-lg">
              <span className="font-[600] text-[20px]  ">Phone:</span>{" "}
              {cardItem.phone}
            </h2>
            <h2 className="card-title font-normal text-lg capitalize">
              <span className="font-[600] text-[20px] ">Location:</span>{" "}
              {cardItem.location}
            </h2>
            <div className="flex flex-col gap-2 ">
              <span className="font-[600] text-[20px]  ">Requirement:</span>
              <p className="w-full max-h-[200px] border border-gray-500 p-1 rounded-lg overflow-x-hidden overflow-y-auto">
                {cardItem.requirement}
              </p>
            </div>

            <button
              onClick={() => setCard(null)}
              className="btn btn-circle btn-sm z-[222] absolute dark:bg-gray-400 text-gray-800 dark:hover:text-white dark:border-none top-[2px] right-0"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InquiryCard;

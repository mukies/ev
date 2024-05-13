import { useEffect, useState } from "react";
import LayoutAdmin from "../../layout/admin/LayoutAdmin";
import InquiryTable from "../../components/admin/InquiryTable";
import { toast } from "react-toastify";
import axios from "axios";

function InquiryPageAdmin() {
  const [loading, setLoading] = useState(false);
  const [inquiries, setInquiries] = useState([]);
  const [page, setPage] = useState(1);
  const [isMore, setIsMore] = useState(true);
  useEffect(() => {
    getInquiry();
  }, []);

  const getInquiry = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/inquiry/get-inquiry?page=${page}`);
      if (data.success) {
        setInquiries(data.inquiries);
        setIsMore(data.isMore);
        setPage(page + 1);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LayoutAdmin>
      <div className="flex flex-col p-5 gap-3 border-r-2 border-l-2 border-gray-300 text-gray-800 max-w-[768px] mx-auto">
        <span className="text-2xl sm:text-3xl text-gray-700 font-semibold border-b-2 border-gray-300 text-center">
          Inquiries for Products
        </span>
        <div className="flex min-h-[calc(70vh-100px)] flex-col gap-3">
          {loading ? (
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-white flex z-[89] justify-center items-center">
              <span className="loading loading-spinner scale-125 text-gray-800"></span>
            </div>
          ) : !loading && inquiries.length ? (
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="text-gray-800 text-[18px] sm:text-xl">
                    <th>Name</th>
                    <th>Email</th>
                    <th>Location</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {inquiries.map((item, i) => (
                    <InquiryTable
                      key={i}
                      item={item}
                      setInquiries={setInquiries}
                    />
                  ))}
                </tbody>
              </table>
              {isMore && (
                <div className="flex justify-center">
                  <button
                    onClick={getInquiry}
                    className="btn btn-sm btn-neutral"
                  >
                    Load More
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex justify-center">
              <span className="text-2xl text-center">
                No Inquiries Recorded yet.
              </span>
            </div>
          )}
        </div>
      </div>
    </LayoutAdmin>
  );
}

export default InquiryPageAdmin;

import { toast } from "react-toastify";
import LayoutAdmin from "../../layout/admin/LayoutAdmin";
import { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [isMore, setIsMore] = useState(true);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    if (!loading) {
      try {
        setLoading(true);
        const { data } = await axios.get(`/api/user/get-users?page=${page}`);

        if (data.success) {
          setUsers(data.users);
          setIsMore(data.isMore);
          setPage((p) => p + 1);
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
    <LayoutAdmin>
      <div className="flex flex-col min-h-[calc(100vh-60px)] sm:min-h-[calc(80vh-100px)] gap-5 py-5 text-gray-700 text-wrap max-w-[768px] mx-auto border-r-2 border-l-2 border-gray-300">
        <div className=" flex justify-center border-b-2 border-gray-700 w-[70%] mx-auto p-1">
          <span className="text-xl sm:text-3xl font-semibold">
            All Registered Users ({users.length})
          </span>
        </div>
        <div className="flex flex-col gap-5">
          {users.map((user, i) => (
            <div
              key={i}
              className="flex items-center gap-5 p-2 border-2 border-gray-300 w-[90%] mx-auto rounded-lg hover:bg-gray-300 duration-300 cursor-pointer"
            >
              <img
                src="/person.webp"
                alt={user.fullName}
                className="h-[50px] w-[50px] object-cover object-center rounded-lg"
              />
              <h3 className="text-lg sm:text-xl font-semibold capitalize">
                {user.fullName}
              </h3>
            </div>
          ))}
          {isMore && (
            <div className="flex justify-center">
              <button onClick={getUser} className="btn btn-sm btn-neutral">
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </LayoutAdmin>
  );
}

export default Users;

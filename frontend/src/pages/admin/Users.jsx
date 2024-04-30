import LayoutAdmin from "../../layout/admin/LayoutAdmin";

function Users() {
  const users = [
    { name: "mukesh", img: "/ev_car.jpeg" },
    { name: "mukesh", img: "/ev_car.jpeg" },
    { name: "mukesh", img: "/ev_car.jpeg" },
    { name: "mukesh", img: "/ev_car.jpeg" },
  ];
  return (
    <LayoutAdmin>
      <div className="flex flex-col gap-5 py-5 text-gray-700 text-wrap max-w-[768px] mx-auto border-r-2 border-l-2 border-gray-300">
        <div className=" flex justify-center border-b-2 border-gray-700 w-[70%] mx-auto p-1">
          <span className="text-3xl font-semibold">
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
                src={user.img}
                alt={user.name}
                className="h-[50px] w-[50px] object-cover object-center rounded-lg"
              />
              <h3 className="text-xl font-semibold capitalize">{user.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </LayoutAdmin>
  );
}

export default Users;

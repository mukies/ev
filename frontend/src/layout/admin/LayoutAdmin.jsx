/* eslint-disable react/prop-types */
import AdminFooter from "./AdminFooter";
import Nav from "./Nav";

function LayoutAdmin({ children }) {
  return (
    <>
      <Nav />
      {children}
      <AdminFooter />
    </>
  );
}

export default LayoutAdmin;

/* eslint-disable react/prop-types */
import Footer from "./Footer";
import MobileNavigation from "./MobileNavigation";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <MobileNavigation />
    </>
  );
};

export default Layout;

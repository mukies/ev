/* eslint-disable react/prop-types */
import Footer from "./Footer";
import MobileNavigation from "./MobileNavigation";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet";

const Layout = ({ children, description, title, author, keywords }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Navbar />
      {children}
      <Footer />
      <MobileNavigation />
    </>
  );
};

Layout.defaultProps = {
  title: "Nest - We Care Your EV",
  description: "EV charger distributer",
  keywords: "ev, charger, electric, vehicle",
  author: "Nest",
};

export default Layout;

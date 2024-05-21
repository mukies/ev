import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "./loading/Loading.jsx";
// import Home from "./pages/Home";
const Home = lazy(() => import("./pages/Home"));
const ACEVcharger = lazy(() => import("./pages/ACEVcharger"));
const DCstation = lazy(() => import("./pages/DCstation"));
const Cables = lazy(() => import("./pages/Cables"));
const About = lazy(() => import("./pages/About"));
const CreateProduct = lazy(() => import("./pages/admin/CreateProduct"));
const DcSolution = lazy(() => import("./pages/DcSolution"));
const AcSolution = lazy(() => import("./pages/AcSolution"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const AdminAuth = lazy(() => import("./pages/admin/AdminAuth"));
const AdminHome = lazy(() => import("./pages/admin/AdminHome"));
const Products = lazy(() => import("./pages/admin/Products"));
const EditProduct = lazy(() => import("./pages/admin/EditProduct"));
const Users = lazy(() => import("./pages/admin/Users"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const Faq = lazy(() => import("./pages/Faq"));
const InquiryPage = lazy(() => import("./pages/InquiryPage"));
const InquiryPageAdmin = lazy(() => import("./pages/admin/InquiryPage"));
const SearchPageAdmin = lazy(() => import("./pages/admin/SearchPageAdmin"));
// import Contact from "./pages/Contact";
// import ACEVcharger from "./pages/ACEVcharger";
// import DCstation from "./pages/DCstation";
// import Cables from "./pages/Cables";
// import About from "./pages/About";
// import CreateProduct from "./pages/admin/CreateProduct";
// import DcSolution from "./pages/DcSolution";
// import AcSolution from "./pages/AcSolution";
// import ProductPage from "./pages/ProductPage";
// import AdminAuth from "./pages/admin/AdminAuth";
// import AdminHome from "./pages/admin/AdminHome";
// import Products from "./pages/admin/Products";
// import EditProduct from "./pages/admin/EditProduct";
// import Users from "./pages/admin/Users";
// import PageNotFound from "./pages/PageNotFound";
// import Contact from "./pages/Contact";
// import SearchPage from "./pages/SearchPage";
// import Faq from "./pages/Faq";
// import InquiryPage from "./pages/InquiryPage";
// import InquiryPageAdmin from "./pages/admin/InquiryPage";
// import SearchPageAdmin from "./pages/admin/SearchPageAdmin";

function App() {
  const adminAuth = JSON.parse(localStorage.getItem("_A"));
  const userAuth = JSON.parse(localStorage.getItem("_U"));
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={adminAuth ? <AdminHome /> : <Home />} />
        <Route
          path="/nest-admin"
          element={!userAuth ? <AdminAuth /> : <Navigate to={"/"} />}
        />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/product/:id" element={<ACEVcharger />} />
        <Route path="/product-page/:id" element={<ProductPage />} />
        <Route path="/product/dc-charging-station" element={<DCstation />} />
        <Route path="/:name" element={<Cables />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/solution/dc-ev-charger" element={<DcSolution />} />
        <Route path="/solution/ac-ev-charger" element={<AcSolution />} />
        <Route path="/product-search" element={<SearchPage />} />
        <Route path="/enquiry-for-products" element={<InquiryPage />} />

        <Route
          path="/admin/product"
          element={adminAuth ? <Products /> : <Navigate to={"/"} />}
        />
        <Route
          path="/admin/inquiries"
          element={adminAuth ? <InquiryPageAdmin /> : <Navigate to={"/"} />}
        />
        <Route
          path="/admin/user"
          element={adminAuth ? <Users /> : <Navigate to={"/"} />}
        />
        <Route
          path="/admin/search-product"
          element={adminAuth ? <SearchPageAdmin /> : <Navigate to={"/"} />}
        />
        <Route
          path="/admin/add-product"
          element={adminAuth ? <CreateProduct /> : <Navigate to={"/"} />}
        />
        <Route
          path="/admin/product/:id"
          element={adminAuth ? <EditProduct /> : <Navigate to={"/"} />}
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Contact from "./pages/Contact";
import ACEVcharger from "./pages/ACEVcharger";
import DCstation from "./pages/DCstation";
import Cables from "./pages/Cables";
import About from "./pages/About";
import CreateProduct from "./pages/admin/CreateProduct";
import DcSolution from "./pages/DcSolution";
import AcSolution from "./pages/AcSolution";
import ProductPage from "./pages/ProductPage";
import AdminAuth from "./pages/admin/AdminAuth";
import AdminHome from "./pages/admin/AdminHome";
import Products from "./pages/admin/Products";
import EditProduct from "./pages/admin/EditProduct";
import Users from "./pages/admin/Users";
import AdminProtectedRoute from "./protection/AdminProtectedRoute";
import PageNotFound from "./pages/PageNotFound";
import Contact from "./pages/Contact";
import SearchPage from "./pages/SearchPage";
import Faq from "./pages/Faq";
import InquiryPage from "./pages/InquiryPage";
import InquiryPageAdmin from "./pages/admin/InquiryPage";
import SearchPageAdmin from "./pages/admin/SearchPageAdmin";
import Protection from "./protection/Protection";

function App() {
  // const adminAuth = JSON.parse(localStorage.getItem("_A"));
  return (
    <>
      <Routes>
        <Route element={<Protection />}>
          <Route path="/" element={<Home />} />
          <Route path="/nest-admin" element={<AdminAuth />} />
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
        </Route>

        <Route element={<AdminProtectedRoute />}>
          <Route path="/admin-dashboard" element={<AdminHome />} />
          <Route path="/admin/product" element={<Products />} />
          <Route path="/admin/inquiries" element={<InquiryPageAdmin />} />
          <Route path="/admin/user" element={<Users />} />
          <Route path="/admin/search-product" element={<SearchPageAdmin />} />
          <Route path="/admin/add-product" element={<CreateProduct />} />
          <Route path="/admin/product/:id" element={<EditProduct />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ACEVcharger from "./pages/ACEVcharger";
import DCstation from "./pages/DCstation";
import Cables from "./pages/Cables";
import About from "./pages/About";
import CreateProduct from "./pages/admin/CreateProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<CreateProduct />} />
        <Route path="/product/:id" element={<ACEVcharger />} />
        <Route path="/product/dc-charging-station" element={<DCstation />} />
        <Route path="/:name" element={<Cables />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
    </>
  );
}

export default App;

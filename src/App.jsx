import { Route, Routes } from "react-router-dom";
import AllProducts from "./components/AllProducts";
import CategoriePage from "./components/categoriePage";
import CompanyDetails from "./components/CompanyDetails";
import Navbar from "./components/navbar";
import Section from "./components/Section";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="/details" element={<CompanyDetails />} />
        <Route path="/marbre/:categorie" element={<CategoriePage />} />
        <Route path="/produits" element={<AllProducts />} />
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import AllProducts from "./components/AllProducts";
import CategoriePage from "./components/categoriePage";
import CompanyDetails from "./components/CompanyDetails";
import Navbar from "./components/navbar";
import ProductDetail from "./components/ProductDetail";
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
        <Route path="/produit/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;

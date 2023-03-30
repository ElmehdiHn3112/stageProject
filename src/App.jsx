import { Route, Routes } from "react-router-dom";
import CompanyDetails from "./components/CompanyDetails";
import Navbar from "./components/navbar";
import Section from "./components/Section";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="/details" element={<CompanyDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
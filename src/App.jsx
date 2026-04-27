import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Fleet from "./pages/Fleet";
import CarDetail from "./pages/CarDetail";
import HowItWorks from "./pages/HowItWorks";
import Offers from "./pages/Offers";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="bg-secondary text-gray-800 min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/car/:id" element={<CarDetail />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
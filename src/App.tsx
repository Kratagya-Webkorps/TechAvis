import { Route, Routes } from "react-router-dom";
import Home from "./components/shared/Home";

import About from "./components/shared/About";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Services from "./components/shared/Services";
import Carrer from "./components/shared/Carrer";
import Contact from "./components/shared/Contact";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/carrer" element={<Carrer />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
          <Footer />

      </div>
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
//
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
//
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Favs from "./Pages/Favs";
import Detail from "./Pages/Detail";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dentista/:id" element={<Detail />}></Route>
        <Route path="/contacto" element={<Contact />}></Route>
        <Route path="/destacados" element={<Favs />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

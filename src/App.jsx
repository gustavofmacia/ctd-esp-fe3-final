import { Routes, Route } from "react-router-dom";
//
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
//
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dentista/:id" element={<Detail />}></Route>
        <Route path="/contacto" element={<Contact />}></Route>
        <Route path="/favoritos" element={<Favs />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

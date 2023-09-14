import logo from "../assets/images/DH.png";
import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="Logo de Digital House" />
      <div className="iconos">
        <FaFacebook alt="Logo de Facebook" />
        <FaInstagram alt="Logo de Instagram" />
        <FaWhatsapp alt="Logo de Whatsapp" />
        <FaTiktok alt="Logo de Tiktok" />
      </div>
    </footer>
  );
};

export default Footer;

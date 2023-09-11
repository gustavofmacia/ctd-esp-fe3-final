import logo from "../assets/images/DH.png";
import facebook from "../assets/images/ico-facebook.png";
import instagram from "../assets/images/ico-instagram.png";
import whatsapp from "../assets/images/ico-whatsapp.png";
import tiktok from "../assets/images/ico-tiktok.png";

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="Logo de Digital House" />
      <div className="iconos">
        <img src={facebook} alt="Ícono de Facebook" />
        <img src={instagram} alt="Ícono de Instagram" />
        <img src={whatsapp} alt="Ícono de Whatsapp" />
        <img src={tiktok} alt="Ícono de Tiktok" />
      </div>
    </footer>
  );
};

export default Footer;

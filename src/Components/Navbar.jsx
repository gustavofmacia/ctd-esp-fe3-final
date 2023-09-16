import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  return (
    <nav>
      <h2>DH Odontología</h2>
      <div style={{ display: "flex" }}>
        <Link to="/">
          <h4>Inicio</h4>
        </Link>
        <Link to="/contacto">
          <h4>Contacto</h4>
        </Link>
        <Link to="/destacados">
          <h4>Destacados</h4>
        </Link>
        <button>Cambiar tema</button>
      </div>
    </nav>
  );
};

export default Navbar;

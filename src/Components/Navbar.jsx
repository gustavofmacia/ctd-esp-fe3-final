import { FaRegMoon, FaRegSun } from "react-icons/fa6";
//
import { Link } from "react-router-dom";
//
import { useGlobalStates } from "../Context/global-context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useGlobalStates();

  return (
    <nav>
      <Link to="/">
        <h2>DH Odontología</h2>
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <Link to="/">
          <h4>Inicio</h4>
        </Link>
        <Link to="/contacto">
          <h4>Contacto</h4>
        </Link>
        <Link to="/destacados">
          <h4>Destacados</h4>
        </Link>
        <button
          onClick={() =>
            dispatch({
              type: "TOGGLE THEME DARK",
            })
          }
          className="toggle-theme"
        >
          {state.themeDark ? (
            <FaRegSun style={{ fontSize: "20px" }} />
          ) : (
            <FaRegMoon style={{ fontSize: "20px" }} />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

import PropTypes from "prop-types";
//
import { useLocation, useNavigate, Link } from "react-router-dom";
//
import doctor from "../assets/images/doctor.jpg";
//
import { useGlobalStates } from "../Context/global-context";
//
import { FaRegStar, FaTrashCan } from "react-icons/fa6";

Card.propTypes = {
  dentist: PropTypes.object,
};

export default function Card({ dentist }) {
  const { favs, setFavs } = useGlobalStates();
  const { pathname } = useLocation();

  const addFav = () => {
    const duplicateDentist = favs.find((fav) => fav.id === dentist.id);

    !duplicateDentist
      ? (setFavs([...favs, dentist]),
        alert("El destista seleccionado ha sido destacado."))
      : alert("El destista seleccionado ya ha sido destacado.");
  };

  const deleteFav = () => {
    const filteredFavs = favs.filter((fav) => fav.id !== dentist.id);

    setFavs([...filteredFavs]);
    alert("El dentista seleccionado ya no aparecerá destacado.");
  };

  return (
    <div className="card">
      {/* Con Link funciona la navegación desde la page home o destacados, ya que la ruta es tomada de forma absoluta. En cambio, con button onClick es tomada de forma relativa, entonces en destacados no funcionaría: */}
      <Link to={`/dentista/${dentist.id}`}>
        <img width={200} src={doctor} alt="Imagen genérica de un dentista" />
        <p>{dentist.name}</p>
        <p>{dentist.username}</p>
      </Link>

      {pathname === "/" && (
        <button onClick={addFav} className="favButton">
          <FaRegStar style={{ fontSize: "18px" }} />
        </button>
      )}
      {pathname === "/destacados" && (
        <button onClick={deleteFav} className="favButton">
          <FaTrashCan style={{ fontSize: "18px" }} />
        </button>
      )}
    </div>
  );
}

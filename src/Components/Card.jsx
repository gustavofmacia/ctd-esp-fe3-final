import PropTypes from "prop-types";
//
import { useLocation, useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  const addFav = (e) => {
    e.stopPropagation();
    const duplicateDentist = favs.find((fav) => fav.id === dentist.id);

    !duplicateDentist
      ? (setFavs([...favs, dentist]),
        alert("El destista seleccionado ha sido destacado."))
      : alert("El destista seleccionado ya ha sido destacado.");
  };

  const deleteFav = (e) => {
    e.stopPropagation();
    const filteredFavs = favs.filter((fav) => fav.id !== dentist.id);

    setFavs([...filteredFavs]);
    alert("El dentista seleccionado ya no aparecerá destacado.");
  };

  return (
    <div className="card" onClick={() => navigate(`/dentista/${dentist.id}`)}>
      <img width={200} src={doctor} alt="Imagen genérica de un dentista" />
      <p>{dentist.name}</p>
      <p>{dentist.username}</p>

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

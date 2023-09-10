import PropTypes from "prop-types";
//
import doctor from "../assets/images/doctor.jpg";

Card.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default function Card({ name, username }) {
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <div className="card">
      <img width={200} src={doctor} alt="imagen de un dentista" />
      <p>{name}</p>
      <p>{username}</p>

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
}

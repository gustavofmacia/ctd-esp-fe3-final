import PropTypes from "prop-types";
//
import { useNavigate } from "react-router-dom";
//
import doctor from "../assets/images/doctor.jpg";

Card.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default function Card({ name, username, id }) {
  const navigate = useNavigate();
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <div className="card" onClick={() => navigate("dentista/" + id)}>
      <img width={200} src={doctor} alt="imagen de un dentista" />
      <p>{name}</p>
      <p>{username}</p>

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">
        ⭐
      </button>
    </div>
  );
}

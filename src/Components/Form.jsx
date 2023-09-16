import { useState } from "react";

const Form = () => {
  const [user, setUser] = useState({
    fullname: "",
    email: "",
  });
  const [fullnameSent, setFullnameSent] = useState("");

  const [showInfo, setShowInfo] = useState(false);
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/u;

    if (user.fullname.length > 5 && emailRegex.test(user.email)) {
      setFullnameSent(user.fullname);
      setShowInfo(true);
      setError(false);
    } else {
      setShowInfo(false);
      setError(true);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          type="text"
          placeholder="Ingresa tu nombre completo"
          onChange={(e) => setUser({ ...user, fullname: e.target.value })}
        />

        <input
          type="text"
          placeholder="Ingresa tu casilla de correo electrónico"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <button style={{ cursor: "pointer" }}>Enviar</button>
      </form>
      {showInfo && (
        <div style={{ textAlign: "center" }}>
          <h2>{`Gracias ${fullnameSent} por escribirnos!`}</h2>
          <h2>En menos de 48 horas te contactaremos.</h2>
        </div>
      )}
      {error && (
        <div style={{ color: "red", fontWeight: "500", textAlign: "center" }}>
          <p>Por favor chequea que la información ingresada sea correcta.</p>
          <p>
            Tu nombre completo debe tener una longitud mayor a 5 caracteres.
          </p>
        </div>
      )}
    </>
  );
};

export default Form;

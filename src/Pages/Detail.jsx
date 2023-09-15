//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import { useParams } from "react-router-dom";
//
import { useState, useEffect } from "react";
//
import LoadingText from "../Components/LoadingText";

export default function Detail() {
  const [dentist, setDentist] = useState();
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((res) => res.json())
      .then((data) => setDentist(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  });

  return (
    <main style={{ margin: "10vh 0px 30vh" }}>
      {dentist && !loading ? (
        <>
          <h1 style={{ fontSize: "24px", textAlign: "left" }}>
            Detalle del dentista n.° {dentist.id}{" "}
          </h1>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Teléfono</th>
                <th>Sitio Web</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{dentist.name}</td>
                <td>{dentist.email}</td>
                <td>{dentist.phone}</td>
                <td>{dentist.website}</td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <LoadingText />
      )}
    </main>
  );
}

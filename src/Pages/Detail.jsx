//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import { useParams } from "react-router-dom";
//
import { useState, useEffect } from "react";

export default function Detail() {
  const [dentist, setDentist] = useState();
  const [loading, setLoading] = useState(true);
  const params = useParams();

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const getDentist = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    const data = await res.json();
    setDentist(data);
    setLoading(false);
  };

  useEffect(() => {
    getDentist();
  });

  return (
    <main>
      {dentist && !loading ? (
        <>
          <h1>Detalle del dentista n.° {dentist.id} </h1>
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
        <p style={{ fontSize: "2rem" }}>Cargando detalle del dentista...</p>
      )}
    </main>
  );
}

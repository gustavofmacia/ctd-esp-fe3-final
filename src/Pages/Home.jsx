import { useEffect, useState } from "react";
//

//
import Card from "../Components/Card";
// import { useGlobalStates } from "../Context/global-context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export default function Home() {
  const [dentists, setDentists] = useState();
  const [loading, setLoading] = useState(true);

  const getDentists = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setDentists(data);
    setLoading(false);
  };

  useEffect(() => {
    getDentists();
  }, []);

  return (
    <main>
      <div>
        <h1>Inicio</h1>
      </div>

      {dentists && !loading ? (
        <div className="card-grid">
          {dentists.map((dentist) => (
            <Card
              key={dentist.id}
              id={dentist.id}
              name={dentist.name}
              username={dentist.username}
            />
          ))}
        </div>
      ) : (
        <p style={{ fontSize: "2rem" }}>Cargando dentistas...</p>
      )}
    </main>
  );
}

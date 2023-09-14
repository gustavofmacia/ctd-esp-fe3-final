import { useGlobalStates } from "../Context/global-context";
//
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export default function Home() {
  const { dentists, loading } = useGlobalStates();

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
        <p style={{ fontSize: "2rem", margin: "30vh" }}>
          Cargando dentistas...
        </p>
      )}
    </main>
  );
}

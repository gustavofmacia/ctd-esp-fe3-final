import Card from "../Components/Card";
import { useGlobalStates } from "../Context/global-context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { favs, loading } = useGlobalStates();

  return (
    <main>
      {favs && !loading ? (
        <div className="card-grid">
          {favs.map((dentist) => (
            <Card key={dentist.id} dentist={dentist} />
          ))}
        </div>
      ) : (
        <p style={{ fontSize: "2rem", margin: "30vh" }}>
          Cargando dentistas...
        </p>
      )}
      {favs.length < 1 && !loading && (
        <p style={{ fontSize: "2rem", margin: "30vh" }}>
          Aún no has destacado dentistas.
        </p>
      )}
    </main>
  );
};

export default Favs;

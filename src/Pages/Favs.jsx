import Card from "../Components/Card";
import LoadingText from "../Components/LoadingText";
import { useGlobalStates } from "../Context/global-context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { favs, loading } = useGlobalStates();

  return (
    <main>
      <div>
        <h1>Dentistas destacados</h1>
      </div>

      {loading && <LoadingText />}

      {favs.length > 0 && !loading && (
        <div className="card-grid" style={{ marginBottom: "20vh" }}>
          {favs.map((dentist) => (
            <Card key={dentist.id} dentist={dentist} />
          ))}
        </div>
      )}

      {favs.length < 1 && !loading && (
        <p style={{ fontSize: "2rem", margin: "10vh 0 40vh 20vh" }}>
          Aún no has destacado dentistas.
        </p>
      )}
    </main>
  );
};

export default Favs;

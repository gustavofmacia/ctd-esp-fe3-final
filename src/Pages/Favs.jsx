import Card from "../Components/Card";
import LoadingText from "../Components/LoadingText";
import { useGlobalStates } from "../Context/global-context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state, isLoadingFavs } = useGlobalStates();

  return (
    <main>
      <div>
        <h1>Dentistas destacados</h1>
      </div>

      {isLoadingFavs && <LoadingText />}

      {state.favs.length > 0 && !isLoadingFavs && (
        <div className="card-grid" style={{ marginBottom: "20vh" }}>
          {state.favs.map((dentist) => (
            <Card key={dentist.id} dentist={dentist} />
          ))}
        </div>
      )}

      {state.favs.length < 1 && !isLoadingFavs && (
        <p style={{ fontSize: "2rem", margin: "10vh 0 40vh 20vh" }}>
          Aún no has destacado dentistas.
        </p>
      )}
    </main>
  );
};

export default Favs;

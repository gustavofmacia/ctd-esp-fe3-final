import Card from "../Components/Card";
import { useGlobalStates } from "../Context/global-context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useGlobalStates();

  return (
    <main>
      <div>
        <h1>Dentistas destacados</h1>
      </div>

      {state.favs.length > 0 && (
        <div className="card-grid" style={{ marginBottom: "27vh" }}>
          {state.favs.map((dentist) => (
            <Card key={dentist.id} dentist={dentist} />
          ))}
        </div>
      )}

      {state.favs.length < 1 && (
        <p style={{ fontSize: "2rem", margin: "10vh 0 52vh 20vh" }}>
          Aún no has destacado dentistas.
        </p>
      )}
    </main>
  );
};

export default Favs;

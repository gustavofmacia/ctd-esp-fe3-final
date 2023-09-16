import { useGlobalStates } from "../Context/global-context";
//
import Card from "../Components/Card";
import LoadingText from "../Components/LoadingText";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export default function Home() {
  const { state, isLoadingDentists } = useGlobalStates();

  return (
    <main>
      <div>
        <h1>Inicio</h1>
      </div>

      {isLoadingDentists ? (
        <LoadingText />
      ) : (
        <div className="card-grid">
          {state.dentists.map((dentist) => (
            <Card key={dentist.id} dentist={dentist} />
          ))}
        </div>
      )}
    </main>
  );
}

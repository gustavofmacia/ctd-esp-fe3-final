import Form from "../Components/Form";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <main>
      <h1 style={{ marginBottom: "80px" }}>Contacto</h1>
      <div style={{ marginBottom: "38vh" }}>
        <Form />
      </div>
    </main>
  );
};

export default Contact;

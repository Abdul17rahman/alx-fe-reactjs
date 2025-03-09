import "./App.css";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

function App() {
  return (
    <>
      <h3>Normal form</h3>
      <RegistrationForm />
      <h3>Formik form</h3>
      <FormikForm />
    </>
  );
}

export default App;

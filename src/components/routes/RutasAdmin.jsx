import { Route, Routes } from "react-router-dom";
import PaginaAdministrador from "../pages/PaginaAdministrador";
import FormularioHabitacion from "../pages/habitacion/FormularioHabitacion";

const RutasAdmin = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<PaginaAdministrador></PaginaAdministrador>}
        >
          {" "}
        </Route>
        <Route
          exact
          path="/agregarHabitacion"
          element={<FormularioHabitacion></FormularioHabitacion>}
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdmin;

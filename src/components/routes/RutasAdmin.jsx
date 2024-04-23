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
          element={<FormularioHabitacion editar={false} titulo="Nueva Habitacion"></FormularioHabitacion>}
        ></Route>
        <Route
          exact
          path="/editar/:id"
          element={<FormularioHabitacion editar={true} titulo="Editar Habitacion" />}
        />
      </Routes>
    </>
  );
};

export default RutasAdmin;

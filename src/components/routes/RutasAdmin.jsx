import { Route, Routes } from "react-router-dom";
import PaginaAdministrador from "../pages/PaginaAdministrador";
import FormularioHabitacion from "../pages/habitacion/FormularioHabitacion";
import FormularioReservas from "../pages/Reservas/FormularioReservas";
import Registro from "../pages/Registro.jsx"

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
          element={
            <FormularioHabitacion
              editar={false}
              titulo="Nueva habitacion"
            ></FormularioHabitacion>
          }
        ></Route>
        <Route
          exact
          path="/editar/:id"
          element={
            <FormularioHabitacion editar={true} titulo="Editar Habitacion" />
          }
        />
        <Route
          exact
          path="/crearReserva"
          element={
            <FormularioReservas
              editar={false}
              titulo="Nueva Reserva"
            ></FormularioReservas>
          }
        ></Route>
        <Route
          exact
          path="/editarReserva/:id"
          element={<FormularioReservas editar={true} titulo="Editar Reserva" />}
        />

        {/* <Route
          exact
          path="/registro/editar/:id"
          element={<Registro editar={true} titulo="Editar Usuario"></Registro>}
        ></Route> */}
      </Routes>
    </>
  );
};

export default RutasAdmin;

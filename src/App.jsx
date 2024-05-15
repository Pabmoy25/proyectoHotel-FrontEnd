import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import PaginaPrincipal from "./components/pages/PaginaPrincipal/PaginaPrincipal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GaleriaImagenes from "./components/pages/GaleriaImagenes";
import SobreNosotros from "./components/pages/SobreNosotros";
import Login from "./components/pages/Login";
import { useState } from "react";
import Error404 from "./components/pages/Error404";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdmin from "./components/routes/RutasAdmin";
import CatalogoHabitacion from "./components/pages/habitacion/CatalogoHabitacion";
import Registro from "./components/pages/Registro";
import Contacto from "./components/pages/Contacto";
import Propuestas from "./components/pages/Propuestas";
import DetalleHabitacion from "./components/pages/DetalleHabitacion";
import ReservaUsuario from "./components/pages/Reservas/ReservaUsuario";

function App() {
  const usuario = JSON.parse(sessionStorage.getItem("InicioSesionHaku")) || {};

  const [logueado, setLogueado] = useState(usuario);

  return (
    <BrowserRouter>
      <Menu></Menu>

      <Routes>
        <Route exact path="/" element={<PaginaPrincipal></PaginaPrincipal>}>
          {" "}
        </Route>

        <Route
          exact
          path="/login"
          element={<Login setLogueado={setLogueado}></Login>}
        >
          {" "}
        </Route>

        <Route
          exact
          path="/administrador/*"
          element={
            <RutasProtegidas>
              <RutasAdmin></RutasAdmin>
            </RutasProtegidas>
          }
        >
          {" "}
        </Route>

        <Route
          exact
          path="/galeria"
          element={<GaleriaImagenes></GaleriaImagenes>}
        >
          {" "}
        </Route>
        <Route path="/nosotros" element={<SobreNosotros></SobreNosotros>}>
          {" "}
        </Route>
        <Route path="/Propuestas" element={<Propuestas></Propuestas>}>
          {" "}
        </Route>

        <Route
          exact
          path="/CatalogoHabitaciones"
          element={<CatalogoHabitacion></CatalogoHabitacion>}
        >
          {" "}
        </Route>

        <Route
          exact
          path="/registro"
          element={<Registro editar={false} titulo="REGISTRATE"></Registro>}
        ></Route>
        <Route
          exact
          path="/registro/editar/:id"
          element={<Registro editar={true} titulo="Editar Usuario"></Registro>}
        ></Route>

        <Route exact path="/contacto" element={<Contacto></Contacto>}></Route>
        <Route
          exact
          path="/DetalleHabitacion/:id"
          element={<DetalleHabitacion></DetalleHabitacion>}
        ></Route>
        <Route
          exact
          path="/reserva/:id"
          element={
            <ReservaUsuario
              reservar={true}
              titulo="Reservar Habitacion"
            ></ReservaUsuario>
          }
        ></Route>

        <Route path="*" element={<Error404 />}>
          {" "}
        </Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import PaginaPrincipal from "./components/pages/PaginaPrincipal";
import PaginaAdministrador from "./components/pages/PaginaAdministrador";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GaleriaImagenes from "./components/pages/GaleriaImagenes";
import SobreNosotros from "./components/pages/SobreNosotros";
import Login from "./components/pages/Login";
import { useState } from "react";
import Error404 from "./components/pages/Error404";
import FormularioHabitacion from "./components/pages/habitacion/FormularioHabitacion";



function App() {
  const usuario = JSON.parse(sessionStorage.getItem("usuarioHakuHuasi")) || "";

  const [logueado, setLogueado] = useState(usuario);

  return (
    <BrowserRouter>
    <>
      <Menu logueado={logueado} setLogueado={setLogueado}></Menu>
      <Container className="container-fluid">
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
            element={<PaginaAdministrador></PaginaAdministrador>}
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
          <Route
            path="/nosotros"
            element={<SobreNosotros></SobreNosotros>}
          >
            {" "}
          </Route>
          <Route
           path="/error404" 
           element={<Error404 />}
          >
            {" "}
          </Route>
          {/*<Route
              exact
              path="/agregarHabitacion"
              element={
                <FormularioHabitacion></FormularioHabitacion>
              }
            ></Route>*/}

        </Routes>
      </Container>
      <Footer></Footer>
      </>
    </BrowserRouter>

  );
}

export default App;

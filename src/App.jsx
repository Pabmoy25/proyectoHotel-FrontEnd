import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import PaginaPrincipal from "./components/pages/PaginaPrincipal";
import PaginaAdministrador from "./components/pages/PaginaAdministrador";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SobreNosotros from "./components/pages/SobreNosotros";
import Login from "./components/pages/Login";
import Error404 from "./components/pages/Error404";
import FormularioHabitacion from "./components/pages/habitacion/FormularioHabitacion";


function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Container className="container-fluid">
        <Routes>
          <Route exact path="/" element={<PaginaPrincipal></PaginaPrincipal>}>
            {" "}
          </Route>

          <Route exact path="/login" element={<Login></Login>}>
            {" "}
          </Route>

          <Route
            exact
            path="/administrador"
            element={<PaginaAdministrador></PaginaAdministrador>}
          >
            {" "}
          </Route>

          <Route
            exact
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
          <Route
              exact
              path="/administrador/agregarHabitacion"
              element={
                <FormularioHabitacion></FormularioHabitacion>
              }
            ></Route>

        </Routes>
      </Container>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;

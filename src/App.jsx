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

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Container className="container-fluid">
        <Routes>
          <Route exact path="/" element={<PaginaPrincipal></PaginaPrincipal>}>
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
            path="/galeria"
            element={<GaleriaImagenes></GaleriaImagenes>}
          >
            {" "}
          </Route>

        </Routes>
      </Container>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;

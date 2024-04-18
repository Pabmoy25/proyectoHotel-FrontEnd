import { Button, Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import logoHotel from "../../assets/logoHotel.png";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Menu = ({ logueado, setLogueado }) => {

  const navegacion = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("InicioSesionHaku");

    setLogueado({});

    navegacion("/");
  };

  return (
    <Navbar expand="lg" className="menu">
      <Container>
        <NavbarBrand as={Link} to={"/"}>
          <img
            src={logoHotel}
            alt="logo Hotel Haku Wasi"
            className="img-fluid"
            width={170}
          ></img>
        </NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className="nav-link" to={"/"}>
              Inicio
            </NavLink>
            <NavLink end className="nav-link" to={"/nosotros"}>
              Nosotros
            </NavLink>
            <NavLink end className="nav-link" to={"/error404"}>
              Contacto
            </NavLink>
            <NavLink end className="nav-link" to={"/galeria"}>
              Galeria
            </NavLink>
            {/*<NavLink end className="nav-link" to={"/administrador"}>
              Administrador
            </NavLink>*/}
            {logueado.length > 0 ? (
              <>
                <NavLink end className="nav-link" to={"/administrador"}>
                  Administrador
                </NavLink>
                <Button variant="link" onClick={logout} className="nav-link text-start end">
                  Logout
                </Button>
              </>
            ) : (
              <NavLink end className="nav-link" to={"/login"}>
                Login
              </NavLink>
            )}

            {/*<NavLink end className="nav-link" to={"/login"}>
              Login
          </NavLink>*/}
            <NavLink end className="nav-link" to={"/registro"}>
              Registro
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;

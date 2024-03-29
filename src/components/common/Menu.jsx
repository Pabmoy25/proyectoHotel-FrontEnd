import { Container, Nav, NavLink, Navbar, NavbarBrand } from "react-bootstrap";
import logoHotel from "../../assets/logoHotel.png";

const Menu = () => {
    return (
        
        <Navbar expand="lg" className="bg-violeta">
          <Container>
            <NavbarBrand href="#home">
            <img src={logoHotel} alt="logo Hotel Haki Wasi" className="img-fluid" width={160}></img>
            </NavbarBrand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link className="text-light" href="#home">Inicio</Nav.Link>
                <Nav.Link className="text-light" href="#link">Nosotros</Nav.Link>
                <Nav.Link className="text-light" href="#link">Administrador</Nav.Link>
                <Nav.Link className="text-light" href="#link">Login</Nav.Link>
                <Nav.Link className="text-light" href="#link">Registro</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
       
      );
    }

export default Menu;
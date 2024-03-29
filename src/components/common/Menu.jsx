import { Container, Nav, Navbar } from "react-bootstrap";
import logoHotel from "../../assets/logoHotel.png";




const Menu = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <img src={logoHotel} alt="logo Hotel Haki Wasi" className="img-fluid" width={150}></img>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#link">Nosotros</Nav.Link>
                <Nav.Link href="#link">Administrador</Nav.Link>
                <Nav.Link href="#link">Login</Nav.Link>
                <Nav.Link href="#link">Registro</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }

export default Menu;
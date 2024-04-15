import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import logoHotel from "../../assets/logoHotel.png";
import { Link, NavLink } from "react-router-dom";


const Menu = () => {
    return (
        
        <Navbar expand="lg" className="menu">
          <Container>
            <NavbarBrand as={Link} to={"/"} >
            <img src={logoHotel} alt="logo Hotel Haki Wasi" className="img-fluid" width={170}></img>
            </NavbarBrand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">

                <NavLink end className=" nav-link text-light" to={'/'}>Inicio</NavLink>
                <NavLink end className="nav-link text-light" to={'/nosotros'}>Nosotros</NavLink>
                <NavLink end className="nav-link text-light" to={'/contacto'}>Contacto</NavLink>
                <NavLink end className="nav-link text-light" to={'/administrador'}>Administrador</NavLink>
                <NavLink end className="nav-link text-light" to={'/galeria'}>Galeria</NavLink>
                <NavLink end className="nav-link text-light" to={'/login'}>Login</NavLink>
                <NavLink end className="nav-link text-light" to={'/registro'}>Registro</NavLink>

                <NavLink end className="nav-link" to={'/'}>Inicio</NavLink>
                <NavLink end className="nav-link" to={'/nosotros'}>Nosotros</NavLink>
                <NavLink end className="nav-link" to={'/error404'}>Contacto</NavLink>
                <NavLink end className="nav-link" to={'/administrador'}>Administrador</NavLink>
                <NavLink end className="nav-link" to={'/login'}>Login</NavLink>
                <NavLink end className="nav-link" to={'/registro'}>Registro</NavLink>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
       
      );
    }

export default Menu;
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logoHotel from "../../assets/logoHotel.png";
import logoTripAdvisor from "../../assets/tripAdvisor.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-violeta text-light py-4">
      <div className="container">
        <section className="row">
          <div className="col-lg-3 mt-3 d-flex flex-column align-items-center">
            <h4>Hotel Haku Huasi</h4>
            <p><span className="sutbtitulofooter">Dirección:</span> Ruta 340 - Km 23, San Quintín</p>
            <p><span className="sutbtitulofooter">Codigo Postal:</span> 4101</p>
            <p><span className="sutbtitulofooter">Localidad:</span> San Quintín, Yerba Buena</p>
            <p><span className="sutbtitulofooter">Provincia:</span> País: Argentina</p>
            <br />
            <h4>Contacto en Argentina</h4>
            <p><span className="sutbtitulofooter">Tel./Fax:</span> (+54 9) (0381) 4924444 / 4925555</p>
            <p><span className="sutbtitulofooter">Móvil:</span>(+54 9) (0381) 155-333333</p>
            <p><span className="sutbtitulofooter">e-mail: </span> hakuhuasihotel@gmail.com.ar</p>
           
          </div>
          <div className="col-lg-3 mt-3 d-flex flex-column align-items-center">
            <h4>Seguínos</h4>
            <Link to="/error404" className="icono-link me-lg-3">
              <FaInstagram className="icono-instagram" />
            </Link>
            <Link to="/error404" className="icono-link me-lg-3">
              <FaFacebook className="icono-facebook" />
            </Link>
            <Link to="/error404" className="icono-link me-lg-3">
              <FaTwitter className="icono-twitter" />
            </Link>
          </div>

          <div className="col-lg-3 mt-3 d-flex flex-column text-center text-lg-end">
            <h4>Secciones</h4>
            <Link
              to="/error404"
              className="footer-link text-decoration-none me-2 fs-5"
            >
              Habitaciones
            </Link>
            <Link
              to="/error404"
              className="footer-link text-decoration-none me-2 fs-5"
            >
              Galería
            </Link>
            <Link
              to="/error404"
              className="footer-link text-decoration-none me-2 fs-5"
            >
              Quiénes somos
            </Link>
            <Link
              to="/error404"
              className="footer-link text-decoration-none me-2 fs-5"
            >
              Contacto
            </Link>
            <Link
              to="/error404"
              className="footer-link text-decoration-none me-2 fs-5"
            >
              Ubicación
            </Link>
            <Link
              to="/error404"
              className="footer-link text-decoration-none me-2 fs-5"
            >
              Login
            </Link>
          </div>
          <div className="col-lg-3 mt-3 d-flex justify-content-center">
            <Link to="/error404">
              <img
                src={logoTripAdvisor}
                alt="logo de trip advisor"
                className="img-fluid"
                width={120}
              />
            </Link>
          </div>
        </section>
      </div>
      <p className="text-center">&copy; Todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import logoTripAdvisor from "../../assets/tripAdvisor.jpg";
import logoTucuman from "../../assets/logo-marca-tucuman.jpg";
import logobooking from "../../assets/Booking-Logo.jpg";
import destinoArgentino from "../../assets/Destino-Argentina-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-violeta text-light">
      <div className="container">
        <section className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 mt-3 d-flex flex-column align-items-center">
            <h4>Hotel Haku Huasi</h4>
            <div className="align-items-start">
              <p>
                <span className="sutbtitulofooter">Dirección:</span> Ruta 340 -
                Km 23, San Quintín
              </p>
              <p>
                <span className="sutbtitulofooter">Código Postal:</span> 4101
              </p>
              <p>
                <span className="sutbtitulofooter">Localidad:</span> San
                Quintín, Yerba Buena
              </p>
              <p>
                <span className="sutbtitulofooter">Provincia:</span> Tucumán
              </p>
              <p>
                <span className="sutbtitulofooter">País: </span>
                Argentina
              </p>
            </div>
            <h4>Contacto en Argentina</h4>
            <div>
              <p>
                <span className="sutbtitulofooter">Tel./Fax:</span> (+54 9)
                (0381) 4924444 / 4925555
              </p>
              <p>
                <span className="sutbtitulofooter">Móvil:</span>(+54 9) (0381)
                155-333333
              </p>
              <p>
                <span className="sutbtitulofooter">E-mail: </span>{" "}
                hakuhuasihotel@gmail.com.ar
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-3 d-flex flex-column align-items-center">
            <h4>Secciones</h4>
            <div className="d-flex flex-column align-items-start">
              <Link
                to="/CatalogoHabitaciones"
                className="footer-link text-decoration-none mb-2 fs-6"
              >
                Habitaciones
              </Link>
              <Link
                to="/galeria"
                className="footer-link text-decoration-none mb-2 fs-6"
              >
                Galería
              </Link>
              <Link
                to="/nosotros"
                className="footer-link text-decoration-none mb-2 fs-6"
              >
                Quiénes somos
              </Link>
              <Link
                to="/contacto"
                className="footer-link text-decoration-none mb-2 fs-6"
              >
                Contacto
              </Link>
              <Link
                to="/error404"
                className="footer-link text-decoration-none mb-2 fs-6"
              >
                Ubicación
              </Link>
              <Link
                to="/login"
                className="footer-link text-decoration-none mb-2 fs-6"
              >
                Login
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-3 d-flex flex-column align-items-center">
            <h4>Sitios relacionados</h4>
            <div className="d-flex flex-wrap justify-content-center text-center">
              <a href="https://www.tripadvisor.com.ar" className="m-1">
                <img
                  src={logoTripAdvisor}
                  alt="logo de trip advisor"
                  className="img-fluid"
                  width={120}
                />
              </a>
              <a href="https://www.tucumanturismo.gob.ar" className="m-1">
                <img
                  src={logoTucuman}
                  alt="logo de Tucumán turismo"
                  className="img-fluid"
                  width={120}
                />
              </a>
              <a href="https://www.booking.com" className="m-1">
                <img
                  src={logobooking}
                  alt="logo de booking"
                  className="img-fluid"
                  width={120}
                />
              </a>
              <a href="https://www.destinoargentina.com.ar" className="m-1">
                <img
                  src={destinoArgentino}
                  alt="logo destino Argentino"
                  className="img-fluid"
                  width={120}
                />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 mt-3 d-flex flex-column align-items-center">
            <h4>Síguenos</h4>
            <div className="d-flex flex-row justify-content-center">
              <Link
                to="https://www.instagram.com/hakuhuasihotel?igsh=NHI5eDhod24zaTdz"
                className="icono-link mx-2"
              >
                <FaInstagram
                  className="icono-instagram"
                  style={{ fontSize: "30px" }}
                />
              </Link>
              <Link to="/error404" className="icono-link mx-2">
                <FaFacebook
                  className="icono-facebook"
                  style={{ fontSize: "30px" }}
                />
              </Link>
              <Link to="/error404" className="icono-link mx-2">
                <FaTwitter
                  className="icono-twitter"
                  style={{ fontSize: "30px" }}
                />
              </Link>
              <Link to="/error404" className="icono-link mx-2">
                <FaLinkedin
                  className="icono-linkedin"
                  style={{ fontSize: "30px" }}
                />
              </Link>
              <Link to="/error404" className="icono-link mx-2">
                <FaYoutube
                  className="icono-youtube"
                  style={{ fontSize: "30px" }}
                />
              </Link>
            </div>
          </div>
        </section>
      </div>
      <p className="text-center">
        &copy; 2024 Hotel Haku Huasi - Todos los derechos reservados
      </p>
    </footer>
  );
};

export default Footer;

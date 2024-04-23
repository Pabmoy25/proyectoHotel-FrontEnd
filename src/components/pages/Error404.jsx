import React from "react";
import { Link } from "react-router-dom";
import error404 from "../../assets/error404.jpg";
import { Container } from "react-bootstrap";
import "../../App.css";

const Error404 = () => {
  return (
    <div className="error404-container">
      <div className="background-image"></div>
      <Container className="container-fluid overlay">
        <div className="main-container">
          <section className="cuadro1">
            <h1 className="text-center mt-4 tituloAdmin">
              <strong>¡Ups! La página que estás buscando no existe 😔</strong>
            </h1>
          </section>

          <section className="cuadro2">
            <h2 className="text-center mt-3 mb-3 tituloAdmin">
              <strong> Error 404: Página no encontrada</strong>
            </h2>
            <h5 className="text-center">
              ¡Hola! Gracias por visitar la página de Haku Huasi, es un honor
              recibirte 😊 <br />
              Tal parece que la página que buscas no existe pero, no te
              preocupes, te invitamos a seguir navegando por el resto de
              nuestras secciones.
            </h5>
            <h5 className="text-center mt-3">
              ¡El mejor alojamiento para tu próximo viaje te espera en nuestro
              hotel!
            </h5>
            <div className="text-center mb-4 mt-5">
              <Link to="/" className="btnequipo btn-volver">
                Volver al inicio
              </Link>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default Error404;

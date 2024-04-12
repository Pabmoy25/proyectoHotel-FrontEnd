import React from "react";
import { Link } from "react-router-dom";
import error404 from "../../assets/error404.jpg"; // Importar la imagen

const Error404 = () => {
  return (
    <>
      <section className="container cuadroNosotros mt-4">
        <h2 className="text-center mt-4 tituloAdmin">
          ¡Ups! La página que estás buscando no existe 😔
        </h2>
      </section>

      <section className="mainpage">
        <div className="row align-items-center my-4">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <h2 className="tituloAdmin text-center">
              Error 404: Página no encontrada
            </h2>
            <p className="text-center">
              ¡Hola! Gracias por visitar la página de Haku Wasi, es un honor
              recibirte 😊 <br></br>
              Tal parece que la página que buscas no existe pero, no te
              preocupes, te invitamos a seguir navegando por el resto de
              nuestras secciones. ¡El mejor alojamiento para tu próximo viaje te
              espera en nuestro hotel!
            </p>
            <div className="text-center">
              <Link to="/" className="btnequipo btn-volver">
                Volver al inicio
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center ">
            <img
              src={error404}
              alt="Error 404"
              className="img-fluid "
              width={350}
            ></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error404;

import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
   <>
   <section class="container cuadroNosotros mt-4">
        <h2 class="text-center mt-4 tituloAdmin">
        ¡Ups! La página que estás buscando no existe 😔
        </h2>
        </section>
  
    <section>
        <div class="row align-items-center my-4">
          <div class="col-lg-6 col-md-12 col-sm-12">
            <h2 className="tituloAdmin text-center">Error 404: Página no encontrada</h2>        
            <p className="text-center">
              ¡Hola! Gracias por visitar la página de Haku Wasi, es un honor recibirte 😊 <br></br>
              Tal parece que la página que buscas no existe pero, no te peocupes, te invitamos a seguir navegando por el resto de nuestras secciones. ¡El mejor alojamiento para tu príxmo viaje te espera en nuestro hotel! 
            </p>
  {/*<Link to="/">inicio</Link>.*/}
          </div>
          
        </div>
      </section>


    </>
  );
}

export default Error404;


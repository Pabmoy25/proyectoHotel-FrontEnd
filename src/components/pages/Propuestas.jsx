import React from "react";
import Boda from "../../assets/Boda.png";
import Actvidad from "../../assets/Actividad.png";
import Habitaciones from "../../assets/Habitaciones.png";

const Propuestas = () => {
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-lg-6">
          <img src={Boda} alt="Imagen 1" className="img-fluid" />
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center bg-color-propuesta">
          <div className="texto-propuesta">
            <p className="titulo-propuesta">El comienzo de una Nueva Etapa!!</p>
            <p className="descripcion-propuesta">Incluye:</p>
            <ul className="descripcion-propuesta">
              <li>
                Una noche de alojamiento para dos personas en nuestra Suite
                preparada para la ocasión.
              </li>
              <li>Early check-in a las 12 horas.</li>
              <li>Late check-out a las 16 horas.</li>
              <li>Desayuno en la habitación o en el Restaurante El Mercado.</li>
              <li>Vino espumante y bombones.</li>
              <li>Espacios para sesión Fotográfica de Novias y Familia.</li>
            </ul>
          </div>
        </div>

        <div className="col-lg-6">
          <img src={Actvidad} alt="Imagen 2" className="img-fluid" />
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center bg-color-propuesta">
          <div className="texto-propuesta">
            <p className="titulo-propuesta">
              Disfruta de una Experiencia Inolvidable con Nuestras Actividades
              Especiales:
            </p>
            <ul className="descripcion-propuesta">
              <li>
                Experimenta la emoción de volar mientras admiras vistas
                panorámicas que quitan el aliento. Incluye equipo completo y
                guía profesional.
              </li>
              <li>
                Explora senderos pintorescos y descubre la belleza natural que
                rodea nuestro hotel.
              </li>
              <li>
                Sumérgete en la magia del cielo estrellado con nuestra actividad
                de observación astronómica. Telescopios profesionales te
                permitirán descubrir la belleza del universo.
              </li>
            </ul>
          </div>
        </div>

        <div className="col-lg-6">
          <img src={Habitaciones} alt="Imagen 1" className="img-fluid" />
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center bg-color-propuesta">
          <div className="texto-propuesta">
            <p className="titulo-propuesta">
              Descubre el Confort y la Elegancia en Nuestras Habitaciones:
            </p>
            <ul className="descripcion-propuesta">
              <li>
                Sumérgete en un oasis de tranquilidad y sofisticación en nuestra
                Suite de Lujo. Disfruta de amplios espacios y una decoración
                elegante
              </li>
              <li>
                Relájate y recarga energías en nuestras confortables
                Habitaciones Superiores.
              </li>
              <li>
                Para aquellos que buscan una opción cómoda y accesible, nuestras
                Habitaciones Estándar son la elección perfecta. Disfruta de un
                ambiente acogedor y funcional.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Propuestas;

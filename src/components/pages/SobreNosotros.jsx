import { Link } from "react-router-dom";
import NosotrosHistoria from "../../assets/NosotrosHistoria.jpg";
import FotoAnto from "../../assets/FotoAnto.jpg";
import Pablo from "../../assets/Pablo.jpg"

const SobreNosotros = () => {
  return (
    <>
      <section className="container cuadroNosotros mt-4">
        <h2 className="text-center mt-4 tituloAdmin">
          Bienvenido a Haku Wasi - Tu Refugio de Cinco Estrellas
        </h2>
        <p className="text-center ">
          En Haku Wasi, nos enorgullece ofrecerte una experiencia excepcional de
          relajación y descanso en un entorno de lujo incomparable. Situado en
          medio de exuberantes paisajes naturales, nuestro hotel boutique de
          cinco estrellas está diseñado para ser tu refugio ideal lejos del
          bullicio de la vida cotidiana. Desde nuestro impecable servicio hasta
          nuestras instalaciones de primer nivel, todo en Haku Wasi está
          cuidadosamente diseñado para garantizar que cada momento de tu
          estancia sea inolvidable.
        </p>
      </section>

      <section>
        <h2 className=" text-center mt-4 tituloAdmin mb-4">Nuestros Servicios</h2>
        <section className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="itemcard">
                <div className="layer">
                  <h3 className="text-center">Alojamiento de lujo</h3>
                  <p>
                    Nuestras habitaciones y suites están elegantemente decoradas
                    con comodidades modernas y vistas impresionantes,
                    proporcionando el entorno perfecto para relajarte y
                    descansar.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="itemcard">
                <div className="layer">
                  <h3 className="text-center">Gastronomía Exquisita</h3>
                  <p>
                    Disfruta de una deliciosa cocina gourmet en nuestros
                    restaurantes de clase mundial, donde cada plato está
                    preparado con los ingredientes más frescos y sabores
                    exquisitos..
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="itemcard">
                <div className="layer">
                  <h3 className="text-center">Spa y Bienestar</h3>
                  <p>
                    Sumérgete en un mundo de serenidad y rejuvenecimiento en
                    nuestro spa de primer nivel, donde podrás disfrutar de una
                    amplia gama de tratamientos rejuvenecedores y terapias
                    relajantes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section>
        <div className="row align-items-center my-4">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <h2 className="tituloAdmin text-center">Nuestra Historia</h2>
            <p className="text-center">
              Fundado con una pasión por ofrecer experiencias inolvidables y un
              compromiso con la excelencia, Haku Wasi ha sido un destino de
              primer nivel para viajeros exigentes desde su apertura.Nuestra
              historia está marcada por un legado de hospitalidad excepcional y
              un enfoque inquebrantable en la satisfacción del cliente.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center ">
            <img
              src={NosotrosHistoria}
              alt="Hotel"
              className="img-fluid "
              width={350}
            ></img>
          </div>
        </div>
      </section>

      <section className="container">
        <h2 className="text-center tituloAdmin">Nuestro Equipo</h2>
        <p className="text-center ">
          Compuesto por individuos talentosos y apasionados, nuestro equipo está
          dedicado a hacer que cada momento de tu estadía sea inolvidable.
        </p>
      </section>

      <section className="container">
  <section className="row justify-content-center">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="card cardEquipo">
        <div className="imageEquipo">
          <img
            src={FotoAnto}
            alt="Hotel"
            className="img-fluid"
            width={350}
          />
        </div>
        <div className="detailsEquipo">
          <div className="centerEquipo">
            <h2 className="tituloequipo">Ortega Antonella</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, debitis?.
            </p>
            <div className="social-buttons">
              <a
                href="https://ar.linkedin.com"
                target="_blank"
                className="btnequipo btn-linkedin my-4"
              >
                LinkedIn
              </a>
              <a href="https://github.com/antoortega18072023" target="_blank" className="btnequipo btn-github">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="card cardEquipo">
        <div className="imageEquipo">
          <img
            src={Pablo}
            alt="Miembro Plablo Moyano"
            className="img-fluid"
            width={350}
          />
        </div>
        <div className="detailsEquipo">
          <div className="centerEquipo">
            <h2 className="tituloequipo">Pablo Moyano</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              accusantium ea quibusdam aspernatur voluptas cumque aut eos vel
              saepe adipisci.
            </p>
            <div className="social-buttons">
              <a
                href=""
                target="_blank"
                className="btnequipo btn-linkedin my-4"
              >
                LinkedIn
              </a>
              <a href="" target="_blank" className="btnequipo btn-github">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="card cardEquipo">
        <div className="imageEquipo">
          <img
            src={FotoAnto}
            alt="Hotel"
            className="img-fluid"
            width={350}
          />
        </div>
        <div className="detailsEquipo">
          <div className="centerEquipo">
            <h2 className="tituloequipo">Ortega Antonella</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              accusantium ea quibusdam aspernatur voluptas cumque aut eos vel
              saepe adipisci.
            </p>
            <div className="social-buttons">
              <a
                href=""
                target="_blank"
                className="btnequipo btn-linkedin my-4"
              >
                LinkedIn
              </a>
              <a href="" target="_blank" className="btnequipo btn-github">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="card cardEquipo">
        <div className="imageEquipo">
          <img
            src={FotoAnto}
            alt="Hotel"
            className="img-fluid"
            width={350}
          />
        </div>
        <div className="detailsEquipo">
          <div className="centerEquipo">
            <h2 className="tituloequipo">Ortega Antonella</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              accusantium ea quibusdam aspernatur voluptas cumque aut eos vel
              saepe adipisci.
            </p>
            <div className="social-buttons">
              <a
                href=""
                target="_blank"
                className="btnequipo btn-linkedin my-4"
              >
                LinkedIn
              </a>
              <a href="" target="_blank" className="btnequipo btn-github">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</section>


     

    </>
  );
};

export default SobreNosotros;
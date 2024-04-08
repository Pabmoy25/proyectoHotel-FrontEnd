import Menu from "../common/Menu";
import Footer from "../common/Footer";
import { Link } from "react-router-dom";

const SobreNosotros = () => {
    return (
        <>
        <section class="container-fluid">
        <div class="row">
          <div class="col-md-12 col-lg-12 col-sm-12 mb-sm-4 cuadroNosotros mt-4">
              <h2 class="texto-principal text-center">Bienvenido a Haku Wasi - Tu Refugio de Cinco Estrellas</h2>
              <p className="text-center">
              En Haku Wasi, nos enorgullece ofrecerte una experiencia excepcional de relajación y descanso en un entorno de lujo incomparable. Situado en medio de exuberantes paisajes naturales, nuestro hotel boutique de cinco estrellas está diseñado para ser tu refugio ideal lejos del bullicio de la vida cotidiana. Desde nuestro impecable servicio hasta nuestras instalaciones de primer nivel, todo en Haku Wasi está cuidadosamente diseñado para garantizar que cada momento de tu estancia sea inolvidable.
              </p>
            </div>
          </div>
        </section>
        </>
    );
};

export default SobreNosotros;
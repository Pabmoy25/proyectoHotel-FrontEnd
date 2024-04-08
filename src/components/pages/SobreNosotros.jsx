import Menu from "../common/Menu";
import Footer from "../common/Footer";
import { Link } from "react-router-dom";

const SobreNosotros = () => {
    return (
        <>
        <section class="container cuadroNosotros mt-4">
              <h2 class="text-center mt-4">Bienvenido a Haku Wasi - Tu Refugio de Cinco Estrellas</h2>
              <p className="text-center ">
              En Haku Wasi, nos enorgullece ofrecerte una experiencia excepcional de relajación y descanso en un entorno de lujo incomparable. Situado en medio de exuberantes paisajes naturales, nuestro hotel boutique de cinco estrellas está diseñado para ser tu refugio ideal lejos del bullicio de la vida cotidiana. Desde nuestro impecable servicio hasta nuestras instalaciones de primer nivel, todo en Haku Wasi está cuidadosamente diseñado para garantizar que cada momento de tu estancia sea inolvidable.
              </p>
        </section>

        <section>
        <h2 class=" text-center mt-4 tituloAdmin mb-4">Nuestros Servicios</h2>
            <section className="container-fluid">
                < div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="itemcard">
                    <div className="layer">
                        <h3 className="text-center">Alojamiento de lujo</h3>
                        <p>Nuestras habitaciones y suites están elegantemente decoradas con comodidades modernas y vistas impresionantes, proporcionando el entorno perfecto para relajarte y descansar.</p>
                    </div>
                     </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="itemcard">
                    <div className="layer">
                        <h3 className="text-center">Gastronomía Exquisita</h3>
                        <p>Disfruta de una deliciosa cocina gourmet en nuestros restaurantes de clase mundial, donde cada plato está preparado con los ingredientes más frescos y sabores exquisitos..</p>
                    </div>
                     </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="itemcard">
                    <div className="layer">
                        <h3 className="text-center">Spa y Bienestar</h3>
                        <p>Sumérgete en un mundo de serenidad y rejuvenecimiento en nuestro spa de primer nivel, donde podrás disfrutar de una amplia gama de tratamientos rejuvenecedores y terapias relajantes.</p>
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
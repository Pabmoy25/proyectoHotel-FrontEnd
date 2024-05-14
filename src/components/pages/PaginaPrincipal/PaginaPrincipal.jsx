import SliderCarrusel from "../PaginaPrincipal/SliderCarrusel";
import "./PaginaPrincipal.css";
import CardsInfo from "../PaginaPrincipal/CardsInfo";
import { Col, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import cuotasimple from "../../../assets/cuotasimple.png";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Boda from "../../../assets/Boda.png";
import Actividad from "../../../assets/Actividad.png";
import Habitaciones from "../../../assets/Habitaciones.png";
import Pet from "../../../assets/ImgPagPrincipal/Pet.jpg";
import { Link } from "react-router-dom";

const PaginaPrincipal = () => {
  return (
    <>
      <SliderCarrusel />
      <section className="w-100 my-3">
        <Row className="fila m-0">
          <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="col p-0">
            <div className="ImagenPetFriendly p-4">
              <img
                src="https://images.pexels.com/photos/8939517/pexels-photo-8939517.jpeg"
                className="PetfriendlyImg mb-1"
              />
            </div>
            <div className="ImagenPetFriendly p-4">
              <img
                src={Pet}
                className="d-md-block d-lg-none w-100"
                alt="Imagen adicional"
              />
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="col p-0">
            <div className="TextoDescripcion px-5">
              <h1 className="my-3">HAKU HUASI HOTEL</h1>
              <h3>SOMOS PET-FRIENDLY</h3>
              <p className="mt-4">
                {" "}
                Te contamos que Haku Huasi es un hotel pet friendly. Todo su
                espacio, tanto interior como exterior, está pensado y diseñado
                especialmente para que puedas compartir cómodamente con toda tu
                familia completa. No dudes en venir con tu mejor amigo a
                disfrutar de tus vacaciones!
              </p>
            </div>
          </Col>
        </Row>
      </section>
      <CardsInfo />
      <Accordion className="custom-accordion my-3" defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Política de Cancelación:</Accordion.Header>
          <Accordion.Body>
            Las reservas canceladas dentro de las 24 horas previas a la llegada
            estarán sujetas a un cargo equivalente a una noche de estadía.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Política de Mascotas (Pet-Friendly):
          </Accordion.Header>
          <Accordion.Body>
            <li>
              Se permiten mascotas en el hotel, sujeto a disponibilidad de
              habitaciones designadas para mascotas.
            </li>
            <li>
              Se proporcionará un kit de bienvenida para mascotas, que puede
              incluir una cama para mascotas, tazones para comida y agua, y
              golosinas.
            </li>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Política de Privacidad:</Accordion.Header>
          <Accordion.Body>
            El hotel respeta la privacidad de sus huéspedes y protege la
            información personal de acuerdo con las leyes aplicables.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <h2 className="my-3 tituloAdmin text-center">Nuestras Propuestas</h2>

      <section>
        <Row className="m-0 d-flex justify-content-around">
          <Col sm={12} md={4} lg={4} className=" d-flex justify-content-center">
            <Card className="custom-card w-30">
              <Card.Img variant="top" src={Boda} className="custom-img" />
              <Card.Body>
                <Card.Title>Noche de bodas Únicas</Card.Title>
                <Card.Text>El resto de tu vida comienza aquí.</Card.Text>
                <Link
                  className="search-button text-decoration-none"
                  to={"/Propuestas"}
                >
                  Mas info
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4} lg={4} className=" d-flex justify-content-center">
            <Card className="custom-card w-30">
              <Card.Img variant="top" src={Actividad} className="custom-img" />
              <Card.Body>
                <Card.Title>Actividades al aire libre</Card.Title>
                <Card.Text>Sé aventurero y conoce la ciudad.</Card.Text>
                <Link
                  className="search-button text-decoration-none"
                  to={"/Propuestas"}
                >
                  Mas info
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4} lg={4} className=" d-flex justify-content-center">
            <Card className="custom-card w-30">
              <Card.Img
                variant="top"
                src={Habitaciones}
                className="custom-img"
              />
              <Card.Body>
                <Card.Title>Nuestras Habitaciones</Card.Title>
                <Card.Text>Comodidades para todo los gustos</Card.Text>
                <Link
                  className="search-button text-decoration-none"
                  to={"/CatalogoHabitaciones"}
                >
                  Mas info
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      <div className="main-section">
        <div className="background-overlay"></div>
        <img
          className="background-image"
          src="https://www.lanacion.com.ar/resizer/v2/woman-at-the-supermarket-checkout-she-is-paying-X6NNODLTHJFOXISHIQ33SRIKGY.jpg?auth=b7f4209935f4005e1d69d99ae8a71d37774e08683b8cdc40e7be124275823305&width=420&height=280&quality=70&smart=true"
          alt="Imagen de fondo"
        />
        <div className="overlay-text disclainer-text">
          <h1 className="text-sm text-md">SEGUI DISFRUTANDO!!</h1>
          <p className="disclaimer-text text-sm">
            Reservá tu alojamiento con nosotros usando CUOTA SIMPLE*
          </p>
          <div className="logos-container">
            <img src={cuotasimple} alt="Logo 1" className="logo" />
          </div>
          <p className="disclaimer-text text-sm">
            El plan cuota simple es únicamente válido para todo lo referente a
            Alojamiento
          </p>
        </div>
      </div>
      <section className="container mb-4">
        <h3 className=" my-4 Comentarios">Comentarios de nuestros huéspedes</h3>
      <div class="row mt-4">
        <div class="col-lg-4 col-md-4 col-sm-12">
          <div class="comments-grid">
            <div class="comment">
              <div class="rating"></div>
              <p>
                Excelente todo!! Tuve una estadía de excelente calidad con toda mi familia. Viajamos con mi perro y el hotel nos brindó todo el servicio y la atención correspondiente.
              </p>
              <p class="author">Autor: Armando Casas</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-4 col-sm-12">
          <div class="comments-grid">
            <div class="comment">
              <div class="rating"></div>
              <p>
                Me encantó hospedarme en Haku Huasi! Tuve una gran experiencia en este lugar rodeado de naturaleza y tranquilidad. Sin dudas un hotel para desconectarse de la rutina del trabajo y de la ciudad. 
              </p>
              <p class="author">Autor: Susana Oria</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-4 col-sm-12">
          <div class="comments-grid">
            <div class="comment">
              <div class="rating"></div>
              <p>
                Haku Huasi y todo el personal, me atendieron super bien a mi y a mi familia. Encontramos el mejor lugar para vacacionar,descansar y seguir conociendo. 100% Recomendado!
              </p>
              <p class="author">Autor: Elsa Pallo</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    </>
  );
};

export default PaginaPrincipal;

import { Container, Row, Col } from "react-bootstrap";
import { Carousel, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const DetalleHabitacion = () => {
  return (
    <>
      <div className="portadaHabitaciones  text-center py-1">
        <div className=" Banner Pagina Detalles py-1" />
        <div>
          <h1 className="Titulo detalles text-white">
            DETALLES DE LA HABITACIÓN
          </h1>
        </div>
      </div>

      <Container className="mt-5 mb-4">
        <Row>
          <Col md={6}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.pexels.com/photos/7623568/pexels-photo-7623568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="First slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.pexels.com/photos/14859259/pexels-photo-14859259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.pexels.com/photos/15195270/pexels-photo-15195270/free-photo-of-relajacion-hotel-cama-habitacion.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col md={6}>
          <div>
  <h2 className="Titulo Pregunta text-center">
    ¿Qué incluye la habitación?
  </h2>
  <div className="row">
    <div className="col">
      <ul className="parrafo amenities text-start ">
        <li>Hidromasaje para 2 personas</li>
        <li>Escritorios de trabajo</li>
        <li>Diseño exclusivo</li>
        <li>Personal bar</li>
        <li>Cafetera Nespresso</li>
        <li>Batas y pantuflas</li>
        <li>2 Smart TV</li>
        <li>Teléfono inalámbrico</li>
        <li>Conexión wi-fi sin cargo</li>
        <li>Secador de pelo</li>
      </ul>
    </div>
    <div className="col">
      <ul className="parrafo amenities text-start ">
        <li>Plancha de pelo (a pedido)</li>
        <li>Amenities exclusivos</li>
        <li>Caja de seguridad para notebook</li>
        <li>Control de temperatura individual</li>
        <li>Equipo de yoga (a pedido)</li>
        <li>Mate & Tea Kit</li>
        <li>Accessorios varios para mascotas</li>
      </ul>
    </div>
  </div>
</div>
            <Row>
                <Col md={8}>
                  <Card.Title>Reserva tu Habitación</Card.Title>
                  <Card.Text>
                    ¡Asegura tu estancia ahora! Disfruta de nuestras increíbles
                    instalaciones y servicios.
                  </Card.Text>
                </Col>
                <Col md={4} className="d-flex align-items-center justify-content-center">
                <Link
                  className="search-button text-decoration-none"
                  to={"/detalle"}
                >
                  Reservar
                </Link>
                </Col>
              </Row>
          </Col>
        </Row>

      </Container>
    </>
  );
};

export default DetalleHabitacion;
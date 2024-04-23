import { Container, Row, Col } from "react-bootstrap";
import { Carousel, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";




const DetalleHabitacion = () => {
  return (
    <>
      <div className="portadaHabitaciones mb-5 text-center py-1">
        <div className=" Banner Pagina Detalles py-1" />
        <div>
          <h1 className="Titulo detalles text-white">
            DETALLES DE LA HABITACIÓN
          </h1>
        </div>
      </div>
      

      <Container className="mt-5"> 
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
        </Row>

       
     

       
   <Col md={6} className="order-md-last mt-md- mt-4">
          <div>
            <h2 className="Titulo Pregunta text-center">
              ¿Qué incluye la habitación?
            </h2>
            <p className="parrafo amenities text-start ">
              Hidromasaje para 2 personas, Escritorios de trabajo, Diseño
              exclusivo, Personal bar, Cafetera Nespresso, Batas y pantuflas, 2
              Smart TV, Teléfono inalámbrico, Conexión wi-fi sin cargo, Secador
              de pelo, Plancha de pelo (a pedido), Amenities exclusivos, Caja de
              seguridad para notebook, Control de temperatura individual, Equipo
              de yoga (a pedido). Mate & Tea Kit. Accessorios varios para
              mascotas.
            </p>
          </div>
        </Col>
      </Container>

      <Row>

<Col md={6} className="order-md-first">
  <aside className="sidebar-left">

      <Card>

        <Card.Body>
          <Card.Title>Reserva tu Habitación</Card.Title>
          <Card.Text>
            ¡Asegura tu estancia ahora! Disfruta de nuestras increíbles instalaciones y servicios.
          </Card.Text>
          
            <Link to="/Contacto" className="btn btn-primary">Reservar Habitación</Link>
        
        </Card.Body>
      </Card>
      </aside>
    </Col>


</Row>
      
    </>
  );
};

export default DetalleHabitacion;

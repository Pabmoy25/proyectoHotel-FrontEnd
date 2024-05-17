import {
  Col,
  Card,
  Button,
  Modal,
  Container,
  Row,
  Carousel,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { leerReservas } from "../../../helpers/queriesReserva";
import {
  faWifi,
  faPaw,
  faTv,
  faMugHot,
  faSnowflake,
  faShower,
  faCookieBite,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardHabitacion = ({ cardHabitacion, filtroDisponibilidad }) => {
  const [reservas, setReservas] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const traerReservas = async () => {
      try {
        const listaReservas = await leerReservas();
        setReservas(listaReservas);
      } catch (error) {
        console.error("Error al leer las reservas:", error);
      }
    };
    traerReservas();
  }, []);

  const habitacionReservada = reservas.some(
    (reserva) => reserva.habitacion === cardHabitacion.habitacion
  );

  const mostrarHabitacion = () => {
    if (filtroDisponibilidad === "todos") {
      return true;
    } else if (filtroDisponibilidad === "disponible") {
      return !habitacionReservada;
    } else {
      return habitacionReservada;
    }
  };

  return mostrarHabitacion() ? (
    <Col md={4} lg={3} className="my-4 d-flex justify-content-center">
      <div className="card-container">
        <Card className="h-100 card-custom-rounded">
          <div className="container">
            <img
              src={cardHabitacion.imagen}
              alt={cardHabitacion.tipoDeHabitacion}
              className="card-img-top-nueva redondearImgCard"
            />
          </div>
          <Card.Body>
            <Card.Title>
              Habitación: {cardHabitacion.tipoDeHabitacion}
            </Card.Title>
            <Card.Text>
              {cardHabitacion.descripcion_breve}
              <br className="mb-2" />
            </Card.Text>
          </Card.Body>

          <Button className="search-button fw-semibold" onClick={handleShow}>
            VER DETALLES
          </Button>
          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header
              closeButton
              className="modalHabitacionTexto fondoModal"
            >
              <Modal.Title className="titulos fs-2">
                {cardHabitacion.tipoDeHabitacion}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="fondoModal">
              <Container>
                <Row>
                  <Col xs={12}>
                    <Carousel>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src="https://images.pexels.com/photos/7623568/pexels-photo-7623568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="First slide"
                        />
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
                <Row>
                  <Col xs={12} className="text-center mt-4">
                    <h5 className="tituloServicios mb-4">
                      Servicios que Incluye
                    </h5>
                   </Col>

                   <Row className="text-center mb-4">
        <Col xs={12} md={4}>
          <div className="iconContainer">
            <FontAwesomeIcon icon={faWifi} className="iconColor" />
            <span className="iconName">Wifi</span>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className="iconContainer">
            <FontAwesomeIcon icon={faTv} className="iconColor" />
            <span className="iconName">TV</span>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className="iconContainer">
            <FontAwesomeIcon icon={faMugHot} className="iconColor" />
            <span className="iconName">Desayuno</span>
          </div>
        </Col>
      </Row>

                  <Row className="text-center mb-4">
        <Col xs={12} md={4}>
          <div className="iconContainer">
            <FontAwesomeIcon icon={faSnowflake} className="iconColor" />
            <span className="iconName">Aire AA</span>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className="iconContainer">
            <FontAwesomeIcon icon={faShower} className="iconColor" />
            <span className="iconName">Ducha</span>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className="iconContainer">
            <FontAwesomeIcon icon={faPaw} className="iconColor" />
            <span className="iconName">Mascotas</span>
          </div>
        </Col>
      </Row>
                   
                  
                  <Col xs={12}>
                    <p className="palabraHabitacion">
                      <span className="fs-5">Habitacion: </span>
                      {cardHabitacion.habitacion}
                    </p>
                  </Col>
                  <Col xs={12}>
                    <p className="textoDescripcion">
                      <span className=" fw-bold">Descripción: </span>
                      {cardHabitacion.descripcion_amplia}
                    </p>
                  </Col>
                  <Col xs={12}>
                    <p className="textoPrecioNoche">
                      <span className="fs-5">Precio por Noche: $ </span>
                      {cardHabitacion.precio}
                    </p>
                  </Col>
                </Row>
              </Container>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleClose} className="btnCerrarModal">
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>

          <div className="text-center">
            {habitacionReservada ? (
              <Button
                className="opacity-50 mt-3 border-0"
                variant="dark"
                disabled
              >
                No disponible
              </Button>
            ) : (
              <Button
                className="mt-3"
                variant="outline-secondary"
                id="btnAdmin"
                as={Link}
                to={`/reserva/${cardHabitacion._id}`}
              >
                <i className="bi bi-file-earmark-plus"> Reservar</i>
              </Button>
            )}
          </div>
        </Card>
      </div>
    </Col>
  ) : null;
};

export default CardHabitacion;

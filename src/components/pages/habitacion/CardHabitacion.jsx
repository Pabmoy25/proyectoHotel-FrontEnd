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
  faWaterLadder,
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
                  <Col xs={12}>
                    <div className="text-start mx-lg-5 mt-4 text-center modalHabitacionTexto">
                      <h5 className="titulos fw-semibold">
                        Servicios que Incluye
                      </h5>
                      <div>
                        <span>
                          <FontAwesomeIcon icon={faWifi} /> Wifi
                        </span>
                        <span className="mx-4">
                          <FontAwesomeIcon icon={faWaterLadder} /> Piscina
                        </span>

                        <span className="mx-4">
                          <FontAwesomeIcon icon={faPaw} /> PetFriendly
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <p className="textos my-3 fw-bold ">
                      <span className="fs-5">Habitacion: </span>
                      {cardHabitacion.habitacion}
                    </p>
                  </Col>
                  <Col xs={12}>
                    <p className="textos fw-bold ">
                      <span className="fs-5">Descripción: </span>
                      {cardHabitacion.descripcion_amplia}
                    </p>
                  </Col>
                  <Col xs={12}>
                    <p className="textos fw-bold ">
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

import {
  Col,
  Card,
  ListGroup,
  Button,
  Modal,
  Container,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { leerReservas } from "../../../helpers/queriesReserva";
import {
  faDumbbell,
  faWifi,
  faSquareParking,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardHabitacion = ({ cardHabitacion }) => {
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
  console.log(habitacionReservada);

  return (
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

          <Button
            className="search-button fw-semibold"
            onClick={handleShow}
          >
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
            <Modal.Body className="modalHabitacionTexto fondoModal">
              <Container>
                <Row>
                  <Col xs={12}>
                    <img
                      src={cardHabitacion.imagen}
                      className="imagenDetalleHabitacion"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col xs={12}>
                    <div className="text-start mx-lg-5 mt-4 text-center">
                      <h5 className="titulos fw-semibold">
                        Servicios que Incluye
                      </h5>
                      <div>
                        <span>
                          <FontAwesomeIcon icon={faWifi} /> Wifi
                        </span>
                        <span className="mx-4">
                          <FontAwesomeIcon icon={faSquareParking} />{" "}
                          Estacionamiento
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faDumbbell} /> Gimnasio
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <p className="textos my-3 fw-bold modalHabitacionTexto">
                      <span className="fs-5">Descripción: </span>
                      {cardHabitacion.descripcion_breve}
                    </p>
                  </Col>
                </Row>
              </Container>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleClose} className="btnCerrarModal">
                CERRAR
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
  );
};

export default CardHabitacion;

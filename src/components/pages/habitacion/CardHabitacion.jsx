import { Col, Card, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { leerReservas } from "../../../helpers/queriesReserva";

const CardHabitacion = ({ cardHabitacion }) => {
  const [reservas, setReservas] = useState([]);

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
          <Link
            className="search-button text-decoration-none"
            to={"/detalleHabitacion/" + cardHabitacion._id}
          >
            Ver Habitación
          </Link>

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

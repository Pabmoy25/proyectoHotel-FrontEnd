import { Col, Card } from "react-bootstrap";
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
            className="search-button "
            to={"/detalleHabitacion/" + cardHabitacion._id}
          >
            Ver Habitación
          </Link>
          
        </Card>
      </div>
    </Col>
  );
};

export default CardHabitacion;

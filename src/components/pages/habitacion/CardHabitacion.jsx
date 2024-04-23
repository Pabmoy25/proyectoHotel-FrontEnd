import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardHabitacion = ({ cardHabitacion }) => {
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
            <Card.Title>Habitación: {cardHabitacion.tipoDeHabitacion}</Card.Title>
            <Card.Text>
              {cardHabitacion.descripcion_breve}
              <br className="mb-2" />
            </Card.Text>
          </Card.Body>
          <Link className="search-button " to={""}>
            Ver Habitación
          </Link>
        </Card>
      </div>
    </Col>
  );
};

export default CardHabitacion;


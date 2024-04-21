import { Col, Card} from "react-bootstrap";
import { Link } from "react-router-dom";

const CardHabitacion = ({cardHabitacion}) => {
    return (
        <Col md={4} lg={3} className="mb-3">
          <Card className="h-100">
            <div>
              <img src={cardHabitacion.imagen} alt={cardHabitacion.tipoDeHabitacion} className="card-img-top-nueva" />
            </div>
            <Card.Body>
            <Card.Title>Habitacion: {cardHabitacion.tipoDeHabitacion}</Card.Title>
            <Card.Text>
            {cardHabitacion.descripcion_breve}<br className="mb-2"/> 
             </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Link className='btn btn-secondary me-2' to={""}>Ver Habitación</Link>
            </Card.Footer>
          </Card>
        </Col>
      );
    };


export default CardHabitacion;
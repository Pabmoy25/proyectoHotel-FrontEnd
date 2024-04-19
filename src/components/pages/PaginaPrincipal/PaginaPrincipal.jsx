import SliderCarrusel from "../PaginaPrincipal/SliderCarrusel";
import "./PaginaPrincipal.css";
import CardsInfo from "../PaginaPrincipal/CardsInfo";
import { Col, Row } from "react-bootstrap";

const PaginaPrincipal = () => {
  return (
    <>
      <SliderCarrusel />

      <section className="w-100 my-3 ">
        <Row className="fila mx-0">
          <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="col p-0">
            <div className="ImagenPetFriendly p-3">
              <img
                src="https://images.pexels.com/photos/8939517/pexels-photo-8939517.jpeg"
                className="PetfriendlyImg mb-3"
              />
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="col p-0">
            <div className="TextoDescripcion p-3">
              
                <h2>HAKU HUASI HOTEL</h2>
                <h3>SOMOS PET-FRIENDLY</h3>
                <p>
                  {" "}
                  Te contamos que Haku Huasi es un hotel pet friendly. Todo su
                  espacio, tanto interior como exterior, está pensado y diseñado
                  especialmente para que puedas compartir cómodamente con toda
                  tu familia completa. No dudes en venir con tu mejor amigo a
                  disfrutar de tus vacaciones!
                </p>
              
            </div>
          </Col>
        </Row>
       
      </section>

      <CardsInfo />
    </>
  );
};

export default PaginaPrincipal;

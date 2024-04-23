import SliderCarrusel from "../PaginaPrincipal/SliderCarrusel";
import "./PaginaPrincipal.css";
import CardsInfo from "../PaginaPrincipal/CardsInfo";
import { Col, Row } from "react-bootstrap";
import { leerHabitaciones } from "../../../helpers/queriesHabitaciones";
import { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import cuotasimple from "../../../assets/cuotasimple.png";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Boda from "../../../assets/Boda.png";
import Actividad from "../../../assets/Actividad.png";
import Habitaciones from "../../../assets/Habitaciones.png";

const PaginaPrincipal = () => {
  return (
    <>
      <SliderCarrusel />
      <section className="w-100 my-3 ">
        <Row className="fila mx-0">
          <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="col p-0">
            <div className="ImagenPetFriendly p-4">
              <img
                src="https://images.pexels.com/photos/8939517/pexels-photo-8939517.jpeg"
                className="PetfriendlyImg mb-3"
              />
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="col p-0">
            <div className="TextoDescripcion px-5">
              <h1 className="my-3">HAKU HUASI HOTEL</h1>
              <h3>SOMOS PET-FRIENDLY</h3>
              <p className="mt-4">
                {" "}
                Te contamos que Haku Huasi es un hotel pet friendly. Todo su
                espacio, tanto interior como exterior, está pensado y diseñado
                especialmente para que puedas compartir cómodamente con toda tu
                familia completa. No dudes en venir con tu mejor amigo a
                disfrutar de tus vacaciones!
              </p>
            </div>
          </Col>
        </Row>
      </section>
      <CardsInfo />
      <Accordion className="custom-accordion my-3" defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Política de Cancelación:</Accordion.Header>
          <Accordion.Body>
            Las reservas canceladas dentro de las 24 horas previas a la llegada
            estarán sujetas a un cargo equivalente a una noche de estadía.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Política de Mascotas (Pet-Friendly):
          </Accordion.Header>
          <Accordion.Body>
            <li>
              Se permiten mascotas en el hotel, sujeto a disponibilidad de
              habitaciones designadas para mascotas.
            </li>
            <li>
              Se proporcionará un kit de bienvenida para mascotas, que puede
              incluir una cama para mascotas, tazones para comida y agua, y
              golosinas.
            </li>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Política de Privacidad:</Accordion.Header>
          <Accordion.Body>
            El hotel respeta la privacidad de sus huéspedes y protege la
            información personal de acuerdo con las leyes aplicables.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <h2 className="my-3 tituloAdmin text-center">Nuestras Propuestas</h2>

      <section className="row justify-content-center">
        <div className="col-lg-8">
          <div className="row">
            <div className="col">
              <Card className="custom-card">
                <Card.Img variant="top" src={Boda} className="custom-img" />
                <Card.Body>
                  <Card.Title>Noche de bodas</Card.Title>
                  <Card.Text>El resto de tu vida comienza aquí.</Card.Text>
                  <Button variant="primary">Más info</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card className="custom-card">
                <Card.Img
                  variant="top"
                  src={Actividad}
                  className="custom-img"
                />
                <Card.Body>
                  <Card.Title>Actividades al aire libre</Card.Title>
                  <Card.Text>
                    Sé aventurero y conoce la ciudad.
                  </Card.Text>
                  <Button variant="primary">Más info</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col">
              <Card className="custom-card">
                <Card.Img
                  variant="top"
                  src={Habitaciones}
                  className="custom-img"
                />
                <Card.Body>
                  <Card.Title>Nuestras Habitaciones</Card.Title>
                  <Card.Text>
                    Comodidades para todo los gustos
                  </Card.Text>
                  <Button variant="primary">Más info</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <div className="main-section">
        <div className="background-overlay"></div>{" "}
        {/* Div para superposición de color rosa */}
        <img
          className="background-image"
          src="https://www.lanacion.com.ar/resizer/v2/woman-at-the-supermarket-checkout-she-is-paying-X6NNODLTHJFOXISHIQ33SRIKGY.jpg?auth=b7f4209935f4005e1d69d99ae8a71d37774e08683b8cdc40e7be124275823305&width=420&height=280&quality=70&smart=true"
          alt="Imagen de fondo"
        />
        <div className="overlay-text disclainer-text">
          <h1>SEGUI DISFRUTANDO!!</h1>
          <p className="disclaimer-text">
            Reservá tu alojamiento con nosotros usando CUOTA SIMPLE*
          </p>
          <div className="logos-container">
            <img src={cuotasimple} alt="Logo 1" className="logo" />
          </div>
          <p className="disclaimer-text">
            El plan cuota simple es únicamente válido para todo lo referente a
            Alojamiento
          </p>
        </div>
      </div>
    </>
  );
};

export default PaginaPrincipal;

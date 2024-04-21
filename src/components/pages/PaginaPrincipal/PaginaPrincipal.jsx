import SliderCarrusel from "../PaginaPrincipal/SliderCarrusel";
import "./PaginaPrincipal.css";
import CardsInfo from "../PaginaPrincipal/CardsInfo";
import { Col, Row } from "react-bootstrap";
import { leerHabitaciones } from "../../../helpers/queriesHabitaciones";
import { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";

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
      <Accordion className="custom-accordion" defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Política de Cancelación:</Accordion.Header>
          <Accordion.Body>
          Las reservas canceladas dentro de las 24 horas previas a la llegada estarán sujetas a un cargo equivalente a una noche de estadía.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Política de Mascotas (Pet-Friendly):</Accordion.Header>
          <Accordion.Body>
          <li>Se permiten mascotas en el hotel, sujeto a disponibilidad de habitaciones designadas para mascotas.</li>
          <li>Se proporcionará un kit de bienvenida para mascotas, que puede incluir una cama para mascotas, tazones para comida y agua, y golosinas.</li>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Política de Privacidad:</Accordion.Header>
          <Accordion.Body>
          El hotel respeta la privacidad de sus huéspedes y protege la información personal de acuerdo con las leyes aplicables.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      );
    </>
  );
};

export default PaginaPrincipal;

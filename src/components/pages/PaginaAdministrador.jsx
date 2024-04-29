import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Habitacion from "./habitacion/Habitacion";
import {
  leerHabitaciones,
  borrarHabitacion,
} from "../../helpers/queriesHabitaciones";
import { leerUsuarios } from "../../helpers/queriesUsuarios";
import UsuariosHuesped from "./usuario/UsuariosHuesped";
import Reserva from "./Reservas/Reserva";
import Accordion from "react-bootstrap/Accordion";
import { leerReservas } from "../../helpers/queriesReserva";

const PaginaAdministrador = () => {
  const [habitacion, setHabitaciones] = useState([]);
  const [usuario, setUsuarios] = useState([]);
  const [reserva, setReservas] = useState([]);

  useEffect(() => {
    traerHabitaciones();
    traerUsuarios();
    traerReservas();
  }, []);

  const traerHabitaciones = async () => {
    try {
      const listaHabitaciones = await leerHabitaciones();
      setHabitaciones(listaHabitaciones);
    } catch (error) {
      console.log(error);
    }
  };

  const borrarHabitaciones = async (id) => {
    try {
      await borrarHabitacion(id);
      setHabitaciones(habitacion.filter((habitacion) => habitacion._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const traerUsuarios = async () => {
    try {
      const listaUsuarios = await leerUsuarios();
      console.log(listaUsuarios);
      setUsuarios(listaUsuarios);
    } catch (error) {
      console.log(error);
    }
  };

  const traerReservas = async () => {
    try {
      const listaReservas = await leerReservas();
      console.log(listaReservas);
      setReservas(listaReservas);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="my-3">
      <div>
        <h1 className="mt-5 bold tituloAdminForm tituloAdmin">ADMINISTRADOR</h1>
        <hr />
      </div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h2 className="d-flex justify-content-between align-items-center subtAdmin">
              Habitaciones
            </h2>
          </Accordion.Header>
          <Accordion.Body>
            <Button
              variant="outline-secondary"
              id="btnAdmin"
              as={Link}
              to={"/administrador/agregarHabitacion"}
            >
              <i className="bi bi-file-earmark-plus"> Habitación</i>
            </Button>

            <Table
              responsive="sm"
              striped
              bordered
              hover
              id="tabla"
              className="mb-5"
            >
              <thead className="text-center ">
                <tr>
                  <th>N° de habitación</th>
                  <th>Descripción Breve</th>
                  <th>Tipo</th>
                  <th>Url Imagen</th>
                  <th>Estado</th>
                  <th>Tarifa</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody>
                {habitacion.map((habitacion) => (
                  <Habitacion
                    key={habitacion._id}
                    habitacion={habitacion}
                    eliminarHabitacion={borrarHabitaciones}
                  ></Habitacion>
                ))}
              </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h2 className="d-flex justify-content-between align-items-center subtAdmin">
              Usuarios
            </h2>
          </Accordion.Header>
          <Accordion.Body>
            <Table
              responsive="sm"
              striped
              bordered
              hover
              id="tabla"
              className="mb-5"
            >
              <thead className="text-center">
                <tr>
                  <th>Nombre completo</th>
                  <th>Email</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody>
                {usuario.map((usuario) => (
                  <UsuariosHuesped
                    key={usuario._id}
                    usuario={usuario}
                  ></UsuariosHuesped>
                ))}
              </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h2 className="d-flex justify-content-between align-items-center subtAdmin">
              Reservas
            </h2>
          </Accordion.Header>
          <Accordion.Body>
            <Button
              className="my-3"
              variant="outline-secondary"
              id="btnAdmin"
              as={Link}
              to={"/administrador/crearReserva"}
            >
              <i className="bi bi-file-earmark-plus">Reserva</i>
            </Button>

            <Table
              responsive="sm"
              striped
              bordered
              hover
              id="tabla"
              className="mb-5"
            >
              <thead className="text-center">
                <tr>
                  <th>N° de habitación</th>
                  <th>Tipo de habitación</th>
                  <th>Nombre completo</th>
                  <th>Email</th>
                  <th>N° de contacto</th>
                  <th>Fecha de checkin</th>
                  <th>Fecha de checkout</th>
                  <th>Total de días</th>
                  <th>Precio por noche</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody>
                {reserva.map((reserva) => (
                <Reserva key={reserva._id} reserva={reserva}></Reserva>
                ))}
              </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default PaginaAdministrador;

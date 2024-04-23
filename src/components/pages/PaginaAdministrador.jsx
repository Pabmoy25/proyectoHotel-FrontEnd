
import React, { useEffect, useState } from "react";
import { Table, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Habitacion from "./habitacion/Habitacion";
import Usuarios from "./usuarioHuesped/Usuario";
import { leerHabitaciones, borrarHabitacion } from "../../helpers/queriesHabitaciones";
import { leerUsuarios } from "../../helpers/queriesUsuarios";

const PaginaAdministrador = () => {
  const [habitacion, setHabitaciones] = useState([]);
  const [huesped, setHuesped] = useState([]);

  useEffect(() => {
    traerHabitaciones();
    traerHuesped();
  }, []);

  const traerHabitaciones = async () => {
    try {
      const listaHabitaciones = await leerHabitaciones();
      setHabitaciones(listaHabitaciones);
    } catch (error) {
      console.log(error);
    }
  };

  const traerHuesped = async () => {
    try {
      const listaHuesped = await leerUsuarios();
      setHuesped(listaHuesped);
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

  const handleEditarHabitacion = async (habitacionId) => {
    try {
      const habitacion = await obtenerHabitacion(habitacionId);
      console.log("Detalles de la habitación a editar:", habitacion);
    } catch (error) {
      console.error("Error al cargar los detalles de la habitación:", error);
    }
  };

  return (
    <Container className="container-fluid">
      <div>
        <h1 className="mt-5 bold tituloAdmin">Administrador</h1>
        <hr />
      </div>
      <div className="d-flex justify-content-between align-items-center subtAdmin">
        <h2 className="my-4">Habitaciones</h2>
        <Button
          variant="outline-secondary"
          id="btnAdmin"
          as={Link}
          to={"/administrador/agregarHabitacion"}
        >
          <i className="bi bi-file-earmark-plus"> Habitación</i>
        </Button>
      </div>
      <Table responsive="sm" striped bordered hover id="tabla" className="mb-5">
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

      <div className="d-flex justify-content-between align-items-center subtAdmin">
        <h2 className="my-4">Huéspedes</h2>
      </div>
      <Table responsive="sm" striped bordered hover className="tabla">
        <thead className="text-center">
          <tr>
            <th>Nombre completo</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {huesped.map((huesped) => (
            <Usuarios
              key={huesped._id}
              huesped={huesped}
            ></Usuarios>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default PaginaAdministrador;

import { Table, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Habitacion from "./habitacion/Habitacion";
import {
  leerHabitaciones,
  borrarHabitacion,
} from "../../helpers/queriesHabitaciones";
import { leerUsuarios } from "../../helpers/queriesUsuarios";
import Usuarios from "./usuarioHuesped/Usuario.jsx"

const PaginaAdministrador = () => {
  const [habitacion, setHabitaciones] = useState([]);
  useEffect(() => {
    traerHabitaciones();
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

  const [huesped, setHuesped] = useState([]);
  useEffect(() => {
    traerHuesped();
  }, []);

  const traerHuesped = async () => {
    try {
      const listaHuesped = await leerUsuarios();
      setHuesped(listaHuesped);
    } catch (error) {
      console.log(error);
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

      {/* <Button
          variant="outline-secondary"
          id="btnAdmin"
          as={Link}
          to={"/administrador/agregarhuesped"}
        >
          <i className="bi bi-file-earmark-plus"> Huésped</i>
        </Button>
        </div>*/}
      <Table responsive="sm" striped bordered hover className="tabla">
        <thead className="text-center">
          <tr>
            <th>Nombre completo</th>
            <th>Email</th>
            {/*<th>N° de contacto</th>
            <th>Fecha de checkin</th>
            <th>Fecha de checkout</th>
        <th>Opciones</th>*/}
          </tr>
        </thead>
        <tbody>
          {huesped.map((huesped) => (
            <Usuarios
              key={huesped._id}
              huesped={huesped}
              setHuesped={setHuesped}
            ></Usuarios>
          ))}
          {/* {(huesped.map((huesped) => (
            <ItemHuesped
              key={huesped.id}
              huesped={huesped}
              setHuesped={setHuesped}
            ></ItemHuesped>
          )))}*/}
          <tr>
            <td>Juan Perez</td>
            <td>juanp@gmail.com</td>

            <td className="d-flex justify-content-center">
              <Button id="btnEditar">
                <i className="bi bi-pencil-square"></i>
              </Button>
              <Button id="btnBorrar">
                <i className="bi bi-trash-fill"></i>
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default PaginaAdministrador;

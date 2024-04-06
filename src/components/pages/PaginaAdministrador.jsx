import React from "react";
import { Table, Button } from "react-bootstrap";

import { Link } from "react-router-dom";


const PaginaAdministrador = () => {
  return (
    <section>
      <div><h1 className="mt-3">Administrador</h1><hr /></div>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="my-4">Habitaciones</h2>
        <Button variant="outline-light" id="btnAdmin" as={Link} to={"/administrador/agregarhabitacion"}>
          <i className="bi bi-file-earmark-plus"> Agregar habitación</i>
        </Button>
      </div>
      <Table responsive="sm" striped bordered hover>
        <thead className="text-center">
          <tr>
            <th>N° de habitación</th>
            <th>Descripción</th>
            <th>Tipo</th>
            <th>Url Imagen</th>
            <th>Categoria</th>
            <th>Tarifa</th>
            <th>Estado</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {/*{habitaciones.map((habitacion) => (
            <ItemHabitacion
              key={habitacion.id}
             habitacion={habitacion}
              setHabitacion={setHabitacion}
            ></ItemHabitacion>
          ))}*/}
          <tr>
            <td>1</td>
            <td>1</td>
            <td>Individual</td>
            <td>1</td>
            <td></td>
            <td>$</td>
            <td>Libre</td>
            <td className="flex justify-content-between"><Button className="btnEditar"><i className="bi bi-pencil-square"></i></Button>
            <Button className="btnBorrar"><i className="bi bi-trash-fill"></i></Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="my-4">Huéspedes</h2>

        <Button variant="outline-secondary" id="btnAdmin" as={Link} to={"/administrador/agregarhuesped"}>
          <i className="bi bi-file-earmark-plus"> Agregar huésped</i>
        </Button>
      </div>
      <Table responsive="sm" striped bordered hover>
        <thead className="text-center">
          <tr>
            <th>N° de habitación</th>
            <th>Nombre completo</th>
            <th>Email</th>
            <th>N° de contacto</th>
            <th>Fecha de checkin</th>
            <th>Fecha de checkout</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {/*{huespedes.map((huesped) => (
            <ItemHuesped
              key={huesped.id}
              huesped={huesped}
              setHuesped={setHuesped}
            ></ItemHuesped>
          ))}*/}
          <tr>
            <td>1</td>
            <td>Juan Perez</td>
            <td>juanp@gmail.com</td>
            <td>11111111</td>
            <td></td>
            <td></td>
            <td className="flex justify-content-between"><Button className="btnEditar"><i className="bi bi-pencil-square"></i></Button>
            <Button className="btnBorrar"><i className="bi bi-trash-fill"></i></Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </section>
  );
};

export default PaginaAdministrador;

import React from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PaginaAdministrador = () => {
  return (
    <section>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="my-4">Habitaciones</h2>
        {/*<Button as={Link} to={"/administrador/crear"}>
          <i className="bi bi-file-earmark-plus-fill"></i>
        </Button>*/}
        <Button>
          <i className="bi bi-file-earmark-plus-fill">Agregar habitación</i>
        </Button>
      </div>
      <Table striped bordered hover>
        <thead className="text-center">
          <tr>
            <th>N° de habitación</th>
            <th>Descripción</th>
            <th>Tipo</th>
            <th>Url Imagen</th>
            <th>Categoria</th>
            <th>Estado</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {/*{productos.map((producto) => (
            <ItemProducto
              key={producto.id}
              producto={producto}
              setProductos={setProductos}
            ></ItemProducto>
          ))}*/}
        </tbody>
      </Table>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="my-4">Huéspedes</h2>

        <Button>
          <i className="bi bi-file-earmark-plus-fill">Agregar huésped</i>
        </Button>
      </div>
      <Table striped bordered hover>
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
          {/*{productos.map((producto) => (
            <ItemProducto
              key={producto.id}
              producto={producto}
              setProductos={setProductos}
            ></ItemProducto>
          ))}*/}
        </tbody>
      </Table>
    </section>
  );
};

export default PaginaAdministrador;

import React from "react";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap/lib/InputGroup";
import { Link } from "react-bootstrap/lib/Navbar";


const PaginaAdministrador = () => {
  return (
    <section>
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="my-4">Habitaciones</h1>
        <Button as={Link} to={"/administrador/crear"}>
          <i className="bi bi-file-earmark-plus-fill"></i>
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
    </section>
  );
};

export default PaginaAdministrador;

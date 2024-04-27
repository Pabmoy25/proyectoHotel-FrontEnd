import { Container, Table, Button, Accordion, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Habitacion from "./habitacion/Habitacion";
import { leerHabitaciones, borrarHabitacion } from "../../helpers/queriesHabitaciones";
import { leerUsuarios } from "../../helpers/queriesUsuarios";
import UsuariosHuesped from "./usuario/UsuariosHuesped";




const PaginaAdministrador = () => {
  const [habitacion, setHabitaciones] = useState([]);
  const [usuario, setUsuarios] = useState([]);

  useEffect(() => {
    traerHabitaciones();
    traerUsuarios();
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

  return (
    <Container>
      <div>
        <h1 className="mt-5 bold tituloAdminForm tituloAdmin">ADMINISTRADOR</h1>
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
        <h2 className="my-4">Usuarios</h2>
      </div>

      <Table responsive="sm" striped bordered hover id="tabla" className="mb-5">
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
              usuario={usuario}>
          </UsuariosHuesped>
          ))}
          
        </tbody>
      </Table>

      <div className="d-flex justify-content-between align-items-center subtAdmin">
        <h2 className="my-4">Reservas</h2>
        <Button
          variant="outline-secondary"
          id="btnAdmin"
          as={Link}
          to={"/administrador/agregarHabitacion"}
        >
          <i className="bi bi-file-earmark-plus">Reserva</i>
        </Button>
      </div>

      <Table responsive="sm" striped bordered hover id="tabla" className="mb-5">
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
        {usuario.map((usuario) => (
            <UsuariosHuesped
              key={usuario._id}
              usuario={usuario}>
          </UsuariosHuesped>
          ))}
         
        </tbody>
      </Table>


      

        



   
    </Container>
    
  );
};

export default PaginaAdministrador;

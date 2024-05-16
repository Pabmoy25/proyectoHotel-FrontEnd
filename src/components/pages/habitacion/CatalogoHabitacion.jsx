import CardHabitacion from "../habitacion/CardHabitacion";
import { leerHabitaciones } from "../../../helpers/queriesHabitaciones";
import { Row, Form } from "react-bootstrap";
import { useEffect, useState } from "react";

const CatalogoHabitacion = () => {
  const [habitacion, setHabitacion] = useState([]);
  const [filtroDisponibilidad, setFiltroDisponibilidad] = useState("todos");
  useEffect(() => {
    traerHabitaciones();
  }, []);

  const traerHabitaciones = async () => {
    try {
      const listaHabitaciones = await leerHabitaciones();
      if (!listaHabitaciones || listaHabitaciones.length === 0) {
        return setHabitacion([]);
      }
      setHabitacion(listaHabitaciones);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div className="portadaHabitaciones mb-5 text-center">
        <img
          className="banner"
          src="https://www.sanjavierturismo.com.ar/gestor/wp-content/uploads/2023/07/san-javier-5.png"
        />
        <div className="titulos tituloPrincipal">
          <h1 className="">HABITACIONES</h1>
        </div>
      </div>

      <Form>
        <div className="text-center mb-3">
          <div className="mb-2 eligeOpcion">Elige una opción:</div>
          <Form.Select
            className="custom-select-style mx-auto w-25"
            value={filtroDisponibilidad}
            onChange={(e) => setFiltroDisponibilidad(e.target.value)}
          >
            <option value="todos">Todos</option>
            <option value="disponible">Disponible</option>
            <option value="noDisponible">No disponible</option>
          </Form.Select>
        </div>
      </Form>
      <div className="container-fluid">
        <Row>
          {habitacion.map((habitacion) => (
            <CardHabitacion
              key={habitacion._id}
              cardHabitacion={habitacion}
              filtroDisponibilidad={filtroDisponibilidad}
            ></CardHabitacion>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default CatalogoHabitacion;

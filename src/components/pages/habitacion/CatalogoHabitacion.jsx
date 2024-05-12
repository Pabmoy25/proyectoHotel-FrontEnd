import CardHabitacion from "../habitacion/CardHabitacion";
import { leerHabitaciones } from "../../../helpers/queriesHabitaciones";
import { Row,Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import DatePicker from "../Reservas/DatePicker";

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
  <div className="d-flex align-items-center mb-3">
    <div className="mr-2 ms-3">Elige una opción:</div>
    <Form.Select
       className="custom-select-style"
      value={filtroDisponibilidad}
      onChange={(e) => setFiltroDisponibilidad(e.target.value)}
    >
      <option value="todos">Todos</option>
      <option value="disponible">Disponible</option>
      <option value="noDisponible">No disponible</option>
    </Form.Select>
  </div>
</Form>

      <Row>
        {habitacion.map((habitacion) => (
          <CardHabitacion
            key={habitacion._id}
            cardHabitacion={habitacion}
            filtroDisponibilidad={filtroDisponibilidad}
          ></CardHabitacion>
        ))}
      </Row>
    </section>
  );
};

export default CatalogoHabitacion;

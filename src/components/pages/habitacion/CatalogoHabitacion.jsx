import CardHabitacion from "../habitacion/CardHabitacion";
import { leerHabitaciones } from "../../../helpers/queriesHabitaciones";
import { Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import DatePicker from "../Reservas/DatePicker";

const CatalogoHabitacion = () => {
  const [habitacion, setHabitacion] = useState([]);
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

      <div>
        <DatePicker></DatePicker>
      </div>

      <Row>
        {habitacion.map((habitacion) => (
          <CardHabitacion
            key={habitacion._id}
            cardHabitacion={habitacion}
          ></CardHabitacion>
        ))}
      </Row>
    </section>
  );
};

export default CatalogoHabitacion;

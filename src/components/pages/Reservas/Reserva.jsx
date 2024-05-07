import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { borrarReserva } from "../../../helpers/queriesReserva";
import Swal from "sweetalert2";


const Reserva = ({reserva, eliminarReserva}) => {
  const borrarReservas = () => {
    Swal.fire({
      title: "¿Está seguro de eliminar esta reserva?",
      text: "No puedes revertir este proceso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarReserva(reserva._id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "La reserva fue eliminada",
            text: `La reserva fue eliminada`,
            icon: "success",
          });
          eliminarReserva(reserva._id);
        } else {
          Swal.fire({
            title: "Ocurrió un error",
            text: `La reserva no fue eliminada, intentelo de nuevo en unos minutos`,
            icon: "success",
          });
        }
      }
    });
  };
    return (
        <tr>
          <td className="text-center">{reserva.habitacion}</td>
          <td className="text-center">{reserva.tipoDeHabitacion}</td>
          <td className="text-center">{reserva.nombreCompleto}</td>
          <td className="text-center">{reserva.email}</td>
          <td className="text-center">{reserva.telefono}</td>
          <td className="text-center">{reserva.fechaEntrada}</td>
          <td className="text-center">{reserva.fechaSalida}</td>
          <td className="text-center">{reserva.totalDeDias}</td>
          <td className="text-center">{reserva.precio}</td>
          <td className="d-flex justify-content-center">
            <Link
              className="btn"
              id="btnEditar"
              /* to={`/registro/editar/${reserva._id}`} */
            >
              <i className="bi bi-pencil-square"></i>
            </Link>
            <Button id="btnBorrar"  onClick={borrarReservas}>
              {" "}
              {/*</td>onClick={borrarReservas}>*/}
              <i className="bi bi-trash-fill"></i>
            </Button>
          </td>
        </tr>
      );
    };

export default Reserva;
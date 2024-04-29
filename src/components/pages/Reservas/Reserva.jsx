import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Reserva = ({reserva}) => {
    return (
        <tr>
          <td className="text-center">{reserva.nombreCompleto}</td>
          <td className="text-center">{reserva.email}</td>
          <td className="d-flex justify-content-center">
            <Link
              className="btn"
              id="btnEditar"
              /* to={`/registro/editar/${reserva._id}`} */
            >
              <i className="bi bi-pencil-square"></i>
            </Link>
            <Button id="btnBorrar">
              {" "}
              {/*</td>onClick={borrarReservas}>*/}
              <i className="bi bi-trash-fill"></i>
            </Button>
          </td>
        </tr>
      );
    };

export default Reserva;
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Usuario = (huesped) => {
  return (
    <>
      <tr>
        <td className="text-center"></td> 
        <td className="text-center"></td> 
        <td className="text-center"></td> 
        <td className="text-center"></td>
        <td className="text-center">{huesped.nombreCompleto}</td>
        <td className="text-center">{huesped.email}</td>
        
        <td className="d-flex justify-content-center">
          <Link
            className="btn"
            id="btnEditar"
            //to={`/administrador/editar/${huesped._id}`} corregir
          >
            <i className="bi bi-pencil-square"></i>
          </Link>
          <Button id="btnBorrar"> {/*</td>onClick={borrarHabitaciones}>*/}
            <i className="bi bi-trash-fill"></i>
          </Button>
        </td>
      </tr>
    </>
  );
};

export default Usuario;

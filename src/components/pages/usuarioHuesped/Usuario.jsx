import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Usuario = (usuario) => {
  return (
    <>
      <tr>
        <td className="text-center"></td>
        <td className="text-center"></td>
        <td className="text-center"></td>
        <td className="text-center"></td>
        <td className="text-center">{usuario.nombreCompleto}</td>
        <td className="text-center">{usuario.email}</td>

        <td className="d-flex justify-content-center">
          <Link className="btn" id="btnEditar">
            <i className="bi bi-pencil-square"></i>
          </Link>
          <Button id="btnBorrar">
            <i className="bi bi-trash-fill"></i>
          </Button>
        </td>
      </tr>
    </>
  );
};

export default Usuario;

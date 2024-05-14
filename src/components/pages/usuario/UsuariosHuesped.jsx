import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const UsuariosHuesped = ({ usuario }) => {
  return (
    <tr>
      <td className="text-center">{usuario.nombreCompleto}</td>
      <td className="text-center">{usuario.email}</td>
      <td className="d-flex justify-content-center">
        <Link
          className="btn"
          id="btnEditar"
          to={`/registro/editar/${usuario._id}`}
        >
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button id="btnBorrar">
          {" "}
          {/*</td>onClick={borrar}>*/}
          <i className="bi bi-trash-fill"></i>
        </Button>
      </td>
    </tr>
  );
};

export default UsuariosHuesped;

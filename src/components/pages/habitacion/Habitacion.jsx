import { Button } from "react-bootstrap";
import Swal from "sweetalert2";


const Habitacion = (habitacion) => {
    return (
        <tr>
      <td className="text-center">hola</td>
      <td>hola</td>
      <td className="text-center">
        <img
          src="{habitacion.imagen}"
          className="img-thumbnail w-25"
          alt="imagen de arroz con leche"
        ></img>
      </td>
      <td>hola</td>
      <td className="d-flex justify-content-center">
              <Button id="btnEditar">
                <i className="bi bi-pencil-square"></i>
              </Button>
              <Button id="btnBorrar">
                <i className="bi bi-trash-fill"></i>
              </Button>
            </td>
    </tr>
    );
};

export default Habitacion;
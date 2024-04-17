import { Button } from "react-bootstrap";


const Habitacion = ({habitacion}) => { 
    return (
        <tr>
            <td>{habitacion.habitacion}</td>
            <td></td>
            <td>Individual</td>
            <td>1</td>
            <td>1</td>
            <td>$</td>
            <td>Libre</td>
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
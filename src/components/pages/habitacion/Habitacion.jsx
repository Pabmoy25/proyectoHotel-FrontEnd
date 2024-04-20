import { Button } from "react-bootstrap";


const Habitacion = ({habitacion}) => { 
    return (
        <tr>
            <td className="text-center">{habitacion.habitacion}</td>
            <td className="text-center">{habitacion.descripcion_breve}</td>
            <td className="text-center">{habitacion.tipoDeHabitacion}</td>
            <td className="text-center">
        <img
          src={habitacion.imagen}
          className="img-thumbnail w-25"
          alt="imagen de habitacion"
        ></img>
      </td>
      <td className="text-center">{habitacion.estado}</td>
      <td className="text-center">$ {habitacion.precio}</td>
          
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
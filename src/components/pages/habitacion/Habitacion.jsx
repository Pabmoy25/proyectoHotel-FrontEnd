import { Button } from "react-bootstrap";


const Habitacion = ({habitacion, onEditar}) => { 
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
              <Button onClick={()=>onEditar(habitacion)}>
                <i className="bi bi-pencil-square"></i>
              </Button>
              
              <Button variant="danger" onClick={borrarHabitacion} className="me-lg-2 mt-2">
          <i className="bi bi-trash"></i>
        </Button>
            </td>
    </tr>
    );
  };




 const borrarHabitacion = ({habitacion, eliminarHabitacion}) => {
    Swal.fire({
      title: "¿Está seguro de eliminar esta habitación?",
      text: "No puedes revertir este proceso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {

      const respuesta = borrarHabitacion(habitacion._id);
if (respuesta.status === 200) {
        Swal.fire({
          title: "La habitación fue eliminada",
          text: `La habitación "${habitacion.habitacion}" fue eliminada`,
          icon: "success",
        });
        eliminarHabitacion(habitacion._id);
      }else {
        Swal.fire({
          title: "Ocurrió un error",
          text: `La habitación "${habitacion.habitacion}" no fue eliminada, intentelo de nuevo en unos minutos`,
          icon: "success",
        });
            }
      }
    });
  };

  

export default Habitacion;
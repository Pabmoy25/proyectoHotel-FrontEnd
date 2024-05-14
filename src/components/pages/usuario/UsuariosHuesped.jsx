import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { borrarUsuario } from "../../../helpers/queriesUsuarios";
import Swal from "sweetalert2";


const UsuariosHuesped = ({ usuario, eliminarUsuario }) => {
  const borrarUsuarios = () => {
    Swal.fire({
      title: "¿Está seguro de eliminar este usuario?",
      text: "No puedes revertir este proceso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarUsuario(usuario._id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "El usuario fue eliminada",
            text: `El usuario "${usuario.email}" fue eliminada`,
            icon: "success",
          });
          eliminarUsuario(usuario._id);
        } else {
          Swal.fire({
            title: "Ocurrió un error",
            text: `El usuario "${usuario.email}" no fue eliminada, intentelo de nuevo en unos minutos`,
            icon: "success",
          });
        }
      }
    });
  };
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
        <Button id="btnBorrar" onClick={borrarUsuarios}>
          <i className="bi bi-trash-fill"></i>
        </Button>
      </td>
    </tr>
  );
};

export default UsuariosHuesped;

import { Navigate } from "react-router-dom";

const RutasProtegidas = ({ children }) => {
  const usuario =
    JSON.parse(sessionStorage.getItem("InicioSesionHaku")) || null;

  if (!usuario) {
    return <Navigate to={"/login"}></Navigate>;
  } else {
    if (usuario.email === "admin@hakuhuasi.com.ar") {
      return children;
    } else {
      return <Navigate to={"/"}></Navigate>;
    }
  }
};

export default RutasProtegidas;

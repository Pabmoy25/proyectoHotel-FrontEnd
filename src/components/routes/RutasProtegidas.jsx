import { Navigate } from "react-router-dom";

const RutasProtegidas = ({children}) => {
  
  const admin= JSON.parse(sessionStorage.getItem('InicioSesionHaku'))  || null

  if(!admin){
    return <Navigate to={'/login'}></Navigate>
  }else{//se deberia agregar la preg del rol para distinguirlo de otros usuarios tambien
    return children //si es admin devuelvo la lista de rutas proteg
  }
};

export default RutasProtegidas;
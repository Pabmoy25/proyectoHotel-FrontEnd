import { Navigate } from "react-router-dom";



const RutasProtegidas = ({children}) => {
  
  const admin= JSON.parse(sessionStorage.getItem('InicioSesionHaku'))  || null

  //se deberia agregar la preg del rol para distinguirlo de otros usuarios tambien

  if(!admin){
    return <Navigate to={'/login'}></Navigate>
  }else{
    return children //si es admin devuelvo la lista de rutas proteg
  }
};

export default RutasProtegidas;
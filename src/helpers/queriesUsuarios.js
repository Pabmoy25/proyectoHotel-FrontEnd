const URI_USUARIOS = import.meta.env.VITE_API_USUARIOS;

console.log(URI_USUARIOS)
/*const admin = {
  email: "admin@hakuhuasi.com.ar",
  password: "Haku123h",
};*/

/*export const login = (usuario) => {
  if (usuario.email === admin.email && usuario.password === admin.password) {
    sessionStorage.setItem("InicioSesionHaku", JSON.stringify(usuario.email));
    return true;
  } else return false;
};*/

export const crearUsuario = async (nuevoUsuario) => {
  try {
    const respuesta = await fetch(URI_USUARIOS, { //`${URI_USUARIOS}/crear`
      method: "POST",
      headers: { "Content-Type": "application/json" },
      
      body: JSON.stringify(nuevoUsuario),
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};


export const leerUsuarios = async () => {
  try {
    const respuesta = await fetch(URI_USUARIOS);//`${URI_USUARIOS}/leer`
    const listaUsuarios = await respuesta.json();
    return listaUsuarios;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (usuario) => {
  try {
    const respuesta = await fetch(URI_USUARIOS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario),
    });

    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
    return null
  }
};

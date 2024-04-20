const admin = {
  email: "admin@hakuhuasi.com.ar",
  password: "Haku123h",
};

export const login = (usuario) => {
  if (usuario.email === admin.email && usuario.password === admin.password) {
    sessionStorage.setItem("InicioSesionHaku", JSON.stringify(usuario.email));
    return true;
  } else return false;
};

export const leerUsuarios = async () => {
  try {
    const respuesta = await fetch(URI_USUARIOS);
    const listaUsuarios = await respuesta.json();
    return listaUsuarios;
  } catch (error) {
    console.log(error);
  }
};
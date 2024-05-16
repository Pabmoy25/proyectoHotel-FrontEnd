const URI_USUARIOS = import.meta.env.VITE_API_USUARIOS;

export const crearUsuario = async (nuevoUsuario) => {
  try {
    const respuesta = await fetch(URI_USUARIOS + "/crear", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
    const respuesta = await fetch(URI_USUARIOS + "/listar");
    const listaUsuarios = await respuesta.json();
    return listaUsuarios;
  } catch (error) {
    console.log(error);
  }
};

export const editarUsuarios = async (id, usuario) => {
  try {
    const { password, ...usuarioSinPassword } = usuario;
    const respuesta = await fetch(`${URI_USUARIOS}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("InicioSesionHaku")).token,
      },
      body: JSON.stringify(usuarioSinPassword),
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerUsuarios = async (id) => {
  try {
    const respuesta = await fetch(`${URI_USUARIOS}/${id}`);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarUsuario = async (id) => {
  try {
    const respuesta = await fetch(`${URI_USUARIOS}/${id}`, {
      method: "DELETE",
      headers: {
        "x-token": JSON.parse(sessionStorage.getItem("InicioSesionHaku")).token,
      },
    });
    console.log(respuesta);
    return respuesta;
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
  }
};

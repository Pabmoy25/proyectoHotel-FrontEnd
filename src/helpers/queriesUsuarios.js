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
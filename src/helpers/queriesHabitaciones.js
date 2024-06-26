const URI_HABITACIONES = import.meta.env.VITE_API_HABITACIONES;

export const leerHabitaciones = async () => {
  try {
    const respuesta = await fetch(URI_HABITACIONES);
    const listaHabitaciones = await respuesta.json();
    return listaHabitaciones;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerHabitacion = async (id) => {
  try {
    const respuesta = await fetch(`${URI_HABITACIONES}/${id}`);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const crearHabitacion = async (nuevaHabitacion) => {
  try {
    const respuesta = await fetch(URI_HABITACIONES, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("InicioSesionHaku")).token,
      },
      body: JSON.stringify(nuevaHabitacion),
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const editarHabitacion = async (id, habitacion) => {
  try {
    const respuesta = await fetch(`${URI_HABITACIONES}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("InicioSesionHaku")).token,
      },
      body: JSON.stringify(habitacion),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarHabitacion = async (id) => {
  try {
    const respuesta = await fetch(`${URI_HABITACIONES}/${id}`, {
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

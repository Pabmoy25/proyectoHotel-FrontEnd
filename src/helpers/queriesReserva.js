const URI_RESERVAS = import.meta.env.VITE_API_RESERVAS;

export const leerReservas = async () => {
  try {
    const respuesta = await fetch(URI_RESERVAS);
    const listaReservas = await respuesta.json();
    return listaReservas;
  } catch (error) {
    console.log(error);
  }
};

export const crearReservas = async (nuevaReserva) => {
  try {
    const respuesta = await fetch(URI_RESERVAS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify(nuevaReserva),
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerReserva = async (id) => {
  try {
    const respuesta = await fetch(`${URI_RESERVAS}/${id}`);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarReserva = async (id) => {
  try {
    const respuesta = await fetch(`${URI_RESERVAS}/${id}`, {
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

export const editarReserva = async (id, reserva) => {
  try {
    const respuesta = await fetch(`${URI_RESERVAS}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("InicioSesionHaku")).token,
      },
      body: JSON.stringify(reserva),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

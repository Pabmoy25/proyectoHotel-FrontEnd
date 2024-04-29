const URI_RESERVAS = import.meta.env.VITE_API_RESERVAS;

console.log(URI_RESERVAS);


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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevaReserva),
      });
      console.log(respuesta);
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };
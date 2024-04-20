const URI_HABITACIONES = import.meta.env.VITE_API_HABITACIONES;

console.log(URI_HABITACIONES);


export const leerHabitaciones = async () => {
    try {
      const respuesta = await fetch(URI_HABITACIONES);
      const listaHabitaciones = await respuesta.json();
      return listaHabitaciones;
    } catch (error) {
      console.log(error);
    }
  };

  
  export const crearHabitacion = async (nuevaHabitacion) => {
    try {
      const respuesta = await fetch(URI_HABITACIONES, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        //'x-token': JSON.parse(sessionStorage.getItem()).token}, antes de crear habitacion se ingresara token
        body: JSON.stringify(nuevaHabitacion),
      });
      console.log(respuesta);
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };


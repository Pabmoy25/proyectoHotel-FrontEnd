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


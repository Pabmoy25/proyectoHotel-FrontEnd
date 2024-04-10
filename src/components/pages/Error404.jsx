import React from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link

const Error404 = () => {
  return (
    <section>
      <h1>Error 404: Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      {/* Utiliza Link para crear el enlace */}
      <p>Vuelve al <Link to="/">inicio</Link>.</p>
    </section>
  );
}

export default Error404;


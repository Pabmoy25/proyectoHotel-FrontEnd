import React, { useState } from "react";
import swal from 'sweetalert2';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombreContacto: "",
    emailContacto: "",
    consultaContacto: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    enviarFormulario();
  };

  const enviarFormulario = () => {
    swal.fire("¡Consulta enviada!", "Su consulta ha sido correctamente enviada.", "success")
      .then((result) => {
        if (result.isConfirmed) {
          setFormData({
            nombreContacto: "",
            emailContacto: "",
            consultaContacto: ""
          });
        }
      });
  };

  return (
    <div>
      <h1 className="tituloAdmin text-center mt-4">Contactate con Hotel Haku Wasi</h1>
      <h5 className="text-center mt-4 mb-5">Complete el formulario y le responderemos a la mayor brevedad posible. Desde ya, muchas gracias.</h5>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="nombreContacto" className="form-label tx-Intermedio fs-5">
                  Nombre:
                </label>
                <input
                  type="text"
                  className="form-control loginInput tx-parrafo"
                  id="nombreContacto"
                  name="nombreContacto"
                  placeholder="Ingrese su nombre"
                  maxLength="60"
                  minLength="3"
                  value={formData.nombreContacto}
                  onChange={handleChange}
                  required
                />
                <i className="bi bi-person-vcard text-light position-absolute end-0"></i>
              </div>
              <div className="mb-3">
                <label htmlFor="emailContacto" className="form-label tx-Intermedio fs-5">
                  E-mail:
                </label>
                <input
                  type="email"
                  className="form-control loginInput tx-parrafo"
                  id="emailContacto"
                  name="emailContacto"
                  placeholder="usuariorandom@email.com"
                  maxLength="320"
                  minLength="10"
                  value={formData.emailContacto}
                  onChange={handleChange}
                  required
                />
                <i className="bi bi-envelope-at text-light position-absolute end-0"></i>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="consultaContacto" className="form-label tx-Intermedio fs-5">
                  Consulta:
                </label>
                <textarea
                  className="form-control resizeContacto loginInput tx-parrafo"
                  id="consultaContacto"
                  name="consultaContacto"
                  rows="4"
                  placeholder="Ingrese su consulta"
                  minLength="15"
                  maxLength="250"
                  value={formData.consultaContacto}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mb-4">
              <div className="text-center mb-4 mt-4">
                <button 
                type="submit" className="btnequipo btn-volver">Enviar consulta</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contacto;

import React, { useState, useRef } from "react";
import swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombreContacto: "",
    emailContacto: "",
    consultaContacto: "",
  });

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    enviarFormulario();
  };

  const enviarFormulario = () => {
    swal
      .fire(
        "¡Consulta enviada!",
        "Su consulta ha sido correctamente enviada.",
        "success"
      )
      .then((result) => {
        if (result.isConfirmed) {
          setFormData({
            nombreContacto: "",
            emailContacto: "",
            consultaContacto: "",
          });
          sendEmail();
        }
      });
  };

  const sendEmail = () => {
    emailjs.sendForm("service_gseh43o", "template_p430uw9", form.current, {
      publicKey: "rzSFKooKPHw-SU_P2",
    });
  };

  return (
    <div className="background-container">
      <div className="blur-container">
        <h1 className="tituloAdmin text-center mt-4">
          <strong>Contactate con Hotel Haku Wasi</strong>
        </h1>
        <h5 className="text-center mt-4 mb-5">
          <strong>
            Complete el formulario y le responderemos a la mayor brevedad
            posible. Desde ya, muchas gracias.
          </strong>
        </h5>
        <form onSubmit={handleSubmit} ref={form}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="mb-3">
                  <label
                    htmlFor="nombreContacto"
                    className="form-label tx-Intermedio fs-5"
                  >
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
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="emailContacto"
                    className="form-label tx-Intermedio fs-5"
                  >
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
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="mb-3">
                  <label
                    htmlFor="consultaContacto"
                    className="form-label tx-Intermedio fs-5"
                  >
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
                  <button type="submit" className="btnequipo btn-volver">
                    Enviar consulta
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d10370.39822055393!2d-65.372251882829!3d-26.77271575080301!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sus!4v1713717254060!5m2!1ses-419!2sus"
          height="200"
          width="100%"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contacto;

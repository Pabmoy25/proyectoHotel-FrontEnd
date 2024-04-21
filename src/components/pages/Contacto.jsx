import React, { useState } from "react";
import { Link } from "react-router-dom";


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
        // Aquí puedes manejar el envío del formulario
        console.log(formData);
      };
    
      return (
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
              <div className="col-md-12">
                <button
                  type="submit"
                  className="btn bgAzulClaro text-light tx-titulo w-75 rounded-5 my-5 boton"
                >
                  Enviar
                </button>
              </div>
            </div>
          
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d10370.39822055393!2d-65.372251882829!3d-26.77271575080301!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sus!4v1713717254060!5m2!1ses-419!2sus"
            height="200"
            width="100%"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </form>
      );
    };
    
  
    
  export default Contacto;

 
import React from "react";
import Fondo from "../../assets/Registr.png";

const Registro = () => {
  return (
    <div className="container-registro my-4 Background-registro">
      <div className="form_area-registro">
        <p className="title-registro">REGISTRATE</p>
        <form action="">
          <div className="form_group-registro">
            <label className="sub_title-registro" for="name">
              Nombre
            </label>
            <input
              placeholder="Juan"
              className="form_style-registro"
              type="text"
              required=""
            ></input>
          </div>
          <div className="form_group-registro">
            <label className="sub_title-registro" for="name">
              Apellido
            </label>
            <input
              placeholder="Perez"
              className="form_style-registro"
              type="text"
              required=""
            ></input>
          </div>
          <div className="form_group-registro">
            <label className="sub_title-registro" for="email">
              Email
            </label>
            <input
              placeholder="JuanPerez@gmail.com"
              id="email"
              className="form_style-registro"
              type="email"
              required=""
            ></input>
          </div>
          <div className="form_group-registro">
            <label className="sub_title-registro" for="password">
              Contraseña
            </label>
            <input
              placeholder="**********"
              id="password"
              className="form_style-registro"
              type="password"
            ></input>
          </div>
          <div className="form_group-registro">
            <label className="sub_title-registro" for="password">
              Confirmar Contraseña
            </label>
            <input
              placeholder="**********"
              id="password"
              className="form_style-registro"
              type="password"
            ></input>
          </div>
          <div>
            <button className="btn-registro">REGISTRAR</button>
            <p>
              Ya tienes una cuenta?{" "}
              <a className="link-registro" href="">
                Inicia Sesion
              </a>
            </p>
            <a className="link-registro" href=""></a>
          </div>
          <a className="link-registro" href=""></a>
        </form>
      </div>
      <a class="link-registro" href=""></a>
      </div>
  );
};

export default Registro;

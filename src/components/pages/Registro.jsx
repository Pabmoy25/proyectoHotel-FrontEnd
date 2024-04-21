import React from "react";
import Fondo from "../../assets/Registr.png";

const Registro = () => {
  return (

    
    <div class="container-registro my-4">
    <div class="form_area-registro">
        <p class="title-registro">REGISTRATE</p>
        <form action="">
            <div class="form_group-registro">
                <label class="sub_title-registro" for="name">Nombre</label>
                <input placeholder="Juan" class="form_style-registro" type="text" required=""></input>
            </div>
            <div class="form_group-registro">
                <label class="sub_title-registro" for="name">Apellido</label>
                <input placeholder="Perez" class="form_style-registro" type="text" required=""></input>
            </div>
            <div class="form_group-registro">
                <label class="sub_title-registro" for="email">Email</label>
                <input placeholder="JuanPerez@gmail.com" id="email" class="form_style-registro" type="email" required=""></input>
            </div>
            <div class="form_group-registro">
                <label class="sub_title-registro" for="password">Contraseña</label>
                <input placeholder="**********" id="password" class="form_style-registro" type="password"></input>
            </div>
            <div class="form_group-registro">
                <label class="sub_title-registro" for="password">Confirmar Contraseña</label>
                <input placeholder="**********" id="password" class="form_style-registro" type="password"></input>
            </div>
            <div>
                <button class="btn-registro">REGISTRAR</button>
                <p>Ya tienes una cuenta? <a class="link-registro" href="">Inicia Sesion</a></p><a class="link-registro" href="">
            </a></div><a class="link-registro" href="">
        
    </a></form></div><a class="link-registro" href="">
</a></div>
  );
};

export default Registro;

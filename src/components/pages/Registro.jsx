import React from "react";
import Fondo from "../../assets/Registr.png";

const Registro = () => {
  return (
    <form class="form-registro">
      <p class="title-registro">Register </p>
      <p class="message-registro">Signup now and get full access to our app. </p>
      <div class="flex-registro">
        <label>
          <input class="input-registro" type="text" placeholder="" required=""></input>
          <span>Firstname</span>
        </label>

        <label>
          <input class="input-registro" type="text" placeholder="" required=""></input>
          <span>Lastname</span>
        </label>
      </div>

      <label>
        <input class="input-registro" type="email" placeholder="" required=""></input>
        <span>Email</span>
      </label>

      <label>
        <input class="input-registro" type="password" placeholder="" required=""></input>
        <span>Password</span>
      </label>
      <label>
        <input class="input-registro" type="password" placeholder="" required=""></input>
        <span>Confirm password</span>
      </label>
      <button class="submit-registro">Submit</button>
      <p class="signin-registro">
        Already have an acount ? <a href="#">Signin</a>{" "}
      </p>
    </form>
  );
};

export default Registro;

import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <>
      <div className="containerInicio" id="containerInicio">
        <div className="form-container sing-up">
          <form action="#">
            <h1>Crea Tu Cuenta</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                {" "}
                <i className=" bx bxl-facebook"></i>
              </a>
            </div>

            <samp>o ysa tu email para registrarte</samp>
            <input type="text" placeholder="Nombre" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Contraseña" />
            <button>Registrarse</button>
          </form>
        </div>

        <div className="form-container sing-in">
          <form action="#">
            <h1>Inicia Sesion</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                {" "}
                <i className=" bx bxl-facebook"></i>
              </a>
            </div>
            <samp>o usa tu email</samp>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Contraseña" />
            <a href="#" className="fp">
              ¿Olvidate tu Contraseña?
            </a>
            <button>Iniciar Sesion</button>
          </form>
        </div>

        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Bienvenido de Nuevo</h1>
              <p>
                ingrese sus datos personales para utilizar todas las funciones
                del sitio
              </p>
              <button className="hidden" id="login">
                Iniciar Sesion
              </button>
            </div>

            <div className="toggle-panel toggle-right">
              <h1>Hola Amigo!</h1>
              <p>
                Regístrese con sus datos personales para utilizar todas las
                funciones del sitio
              </p>
              <button className="hidden" id="registrer">
                Registrarse
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;

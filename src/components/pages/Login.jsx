import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../helpers/queriesUsuarios.js";
import Swal from "sweetalert2";

const Login = ({ setLogueado }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navegacion = useNavigate();

  const onSubmit = async (usuario) => {
    try {
      const respuesta = await login(usuario);

      if (respuesta.status === 200) {
        Swal.fire({
          title: `¡Bienvenido ${usuario.email}!`,
          text: "Sesión iniciada exitosamente",
          icon: "success",
        });

        const dato = await respuesta.json();

        if (dato.email === "admin@hakuhuasi.com.ar") {
          sessionStorage.setItem(
            "InicioSesionHaku",
            JSON.stringify({
              email: dato.email,
              rol: dato.roleAdmin,
              nombre: dato.nombreCompleto,
              token: dato.token,
            })
          );
          setLogueado(
            dato.email,
            dato.roleAdmin,
            dato.nombreCompleto,
            dato.token
          );
          navegacion("/administrador");
        } else {
          sessionStorage.setItem(
            "InicioSesionHaku",
            JSON.stringify({
              email: dato.email,
              rol: dato.roleAdmin,
              nombre: dato.nombreCompleto,
            })
          );
          setLogueado(dato.email, dato.roleAdmin, dato.nombreCompleto);
          navegacion("/");
        }
      } else {
        Swal.fire({
          title: "Error en login",
          text: "E-mail o password incorrectos",
          icon: "error",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="container-registro Background-login">
      <Form
        onSubmit={handleSubmit(onSubmit)}
        id="formRegistro"
        className="my-4 custom-form rounded"
      >
        <div>
          <h1 className="title-registro">Iniciar sesión</h1>
          <hr />
        </div>
        <Form.Group className="mb-3" controlId="emailLogin">
          <Form.Label className="sub_title-registro">E-mail</Form.Label>
          <Form.Control
            className="formLogin"
            type="email"
            placeholder="name@example.com"
            {...register("email", {
              required: "El e-mail es obligatorio",
              minLength: {
                value: 15,
                message: "El e-mail debe tener al menos 15 caracteres",
              },
              maxLength: {
                value: 40,
                message: "El e-mail no debe superar los 40 caracteres",
              },
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,

                message: "Ingresar dirección de mail válida",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="passwordLogin">
          <Form.Label className="sub_title-registro">Contraseña</Form.Label>

          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "La contraseña es obligatoria",
              minLength: {
                value: 3,
                message: "Ingrese un mínimo de 3 caracteres",
              },
              maxLength: {
                value: 100,
                message: "debe ingresar 8 caracteres",
              },
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,8}$/,
                message:
                  "Ingresar al menos una letra mayùscula,una minùscula y un nùmero",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.password?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="d-flex justify-content-center my-4 sub_title-registro">
          <Button
            className="text-center nav-link"
            variant="link"
            as={Link}
            to="*"
          >
            <h6>
              Recuperar <br />
              contraseña
            </h6>
          </Button>{" "}
          <div className=" px-3">
            <h6> | </h6>
          </div>
          <Button
            className="text-center nav-link"
            variant="link"
            as={Link}
            to="/registro"
          >
            <h6> Registrarme</h6>
          </Button>
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button type="submit" className="mb-3" id="btnIngresar">
            Ingresar
          </Button>
        </div>
        <div className="d-flex justify-content-center">
          <Button id="btnGoogle" className="" as={Link} to="*">
            <i className="bi bi-google"></i>
          </Button>
          <Button id="btnFaceb" className="" as={Link} to="*">
            <i className="bi bi-facebook"></i>
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default Login;

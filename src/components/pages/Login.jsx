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
  } = useForm();

  const navegacion = useNavigate();

  const onSubmit = (usuario) => {
    console.log(usuario);

    if (login(usuario)) {
      Swal.fire({
        title: "Usuario logueado",
        text: `El usuario ${usuario.email} fue logueado correctamente`,
        icon: "success",
      });
      setLogueado(usuario.email);
      navegacion("/administrador");
    } else {
      Swal.fire({
        title: "Error en login",
        text: "El email o password son incorrectos",
        icon: "error",
      });
    }
  };

  return (
    <section className="contenLogin my-5">
      <div>
        <h1 className="tituloAdmin">Iniciar sesión</h1>
        <hr />
      </div>
      <Form onSubmit={handleSubmit(onSubmit)} id="formLogin">
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            {...register("email", {
              required: "El e-mail es obligatorio",
              minLength: {
                value: 15,
                message: "El email debe tener al menos 15 caracteres",
              },
              maxLength: {
                value: 40,
                message: "El email no debe superar los 40 caracteres",
              },
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,

                message: "Ingresar dirección de mail válida",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Contraseña</Form.Label>

          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "La contraseña es obligatoria",
              minLength: {
                value: 6,
                message: "Ingrese un mínimo de 6 caracteres",
              },
              maxLength: {
                value: 10,
                message: "Ingrese un máximo de 10 caracteres",
              },
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                message:
                  "Ingresar al menos una letra mayùscula,una minùscula y un nùmero",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.password?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="d-flex justify-content-center subtAdmin my-4">
          <h6 className="text-center" as={Link} to={""}>
            Recuperar contraseña
          </h6>{" "}
          <div className=" px-3">
            <h6> | </h6>
          </div>
          <h6 className="text-center" as={Link} to={"/registro"}>
            {" "}
            Registrarme
          </h6>
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button type="submit" className="mb-3" id="btnIngresar">
            Ingresar
          </Button>
        </div>
        <div className="d-flex justify-content-center">
          <Button id="btnGoogle">
            <i className="bi bi-google"></i>
          </Button>
          <Button id="btnFaceb">
            <i className="bi bi-facebook"></i>
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default Login;
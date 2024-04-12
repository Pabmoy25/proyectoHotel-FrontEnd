import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <section>
      <div className="mt-5">
        <h1>Iniciar sesión</h1>
        <hr />
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            {...register("email", {
              required: "El email es obligatorio",
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
              minLength: { value: 6, message: "Ingrese un mínimo de 6 caracteres" },
              maxLength: { value: 10, message: "Ingrese un máximo de 10 caracteres" },
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                message: "Mayusc, minusc y num",
              },
            })}
          />
        </Form.Group>
        <Form.Group className="d-flex justify-content-center">
          <h6 className="mb-4 subtAdmin" as={Link} to={""}>
            Recuperar contraseña
          </h6>{" "}
          <h6 className="mb-4 subtAdmin" as={Link} to={"/registro"}>
            {" "}
            | Registrarme
          </h6>
        </Form.Group>
        <Button variant="primary" type="submit" className="mb-5">
          Ingresar
        </Button>
      </Form>
    </section>
  );
};

export default Login;

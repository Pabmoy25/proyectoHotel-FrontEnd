import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../helpers/queriesUsuarios.js";
import Swal from "sweetalert2";
import Fondo from "../../assets/Registr.png";

const Registro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <div className="container-registro my-4 Background-registro">
        <Form
          onSubmit={handleSubmit()}
          id="formRegistro"
          className="form_area-registro text-start"
        >
          <div>
            <p className="title-registro">REGISTRATE</p>
          </div>
          <Form.Group className="mb-3" controlId="formNombre">
            <Form.Label className="sub_title-registro">Nombre</Form.Label>
            <Form.Control className="mb-2"
              type="text"
              placeholder="Nombre"
              {...register("nombre", {
                required: "El nombre es obligatorio",
                minLength: {
                  value: 3,
                  message: "Debe ingresar al menos 3 caracteres",
                },
                maxLength: {
                  value: 50,
                  message: "Debe ingresar como máximo 50 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.nombre?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formApellido">
            <Form.Label className="sub_title-registro">Apellido</Form.Label>
            <Form.Control className="mb-2"
              type="text"
              placeholder="Apellido"
              {...register("apellido", {
                required: "El apellido es obligatorio",
                minLength: {
                  value: 3,
                  message: "Debe ingresar al menos 3 caracteres",
                },
                maxLength: {
                  value: 50,
                  message: "Debe ingresar como máximo 50 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.apellido?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label className="sub_title-registro">E-mail</Form.Label>
            <Form.Control className="mb-2"
              type="email"
              placeholder="nombre@gmail.com"
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
            <Form.Text className="text-danger">
              {errors.email?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label className="sub_title-registro">Contraseña</Form.Label>

            <Form.Control className="mb-2"
              type="password"
              placeholder="Contraseña"
              {...register("password", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 6,
                  message: "Ingrese un mínimo de 6 caracteres",
                },
                maxLength: {
                  value: 100,
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
          <Form.Group className="mb-3" controlId="formConfirmPassword">
            <Form.Label className="sub_title-registro">
              Confirmar contraseña
            </Form.Label>

            <Form.Control className="mb-2"
              type="password"
              placeholder="Contraseña"
              {...register("password", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 6,
                  message: "Ingrese un mínimo de 6 caracteres",
                },
                maxLength: {
                  value: 100,
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
          <Form.Group className="">
            <div className="d-flex flex-row">
              <p>Ya tienes una cuenta?</p>
              <Button
                variant="link"
                className="nav-link fw-bold"
                as={Link}
                to={"/login"}
              >
                {" "}
                Inicia sesión
              </Button>
            </div>
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button type="submit" className="mb-3" id="btn-registro">
              Ingresar
            </Button>
          </div>
        </Form>
        </div>

        {/*<div className="form_area-registro">
          <p className="title-registro">REGISTRATE</p>
          <form action="">
            <div className="form_group-registro">
              <label className="sub_title-registro" htmlFor="name">
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
              <label className="sub_title-registro" htmlFor="apellido">
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
              <label className="sub_title-registro" htmlFor="email">
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
              <label className="sub_title-registro" htmlFor="password">
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
              <label className="sub_title-registro" htmlFor="confirmarPassword">
                Confirmar Contraseña
              </label>
              <input
                placeholder="**********"
                id="confirmarPassword"
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
        <a className="link-registro" href=""></a>
            </div>*/}
    </>
  );
};

export default Registro;

import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { crearUsuario, editarUsuarios, login, obtenerUsuarios } from "../../helpers/queriesUsuarios.js";
import Swal from "sweetalert2";
import Fondo from "../../assets/Registr.png";
import { useEffect } from "react";

const Registro = ({editar}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { id } = useParams();
  const navegacion = useNavigate();

  useEffect(() => {
    if (editar) {
      cargarDatosUsuario();
    }
  }, []);

  const cargarDatosUsuario = async () => {
    const respuesta = await obtenerUsuarios(id);
    if (respuesta.status === 200) {
      const usuarioBuscado = await respuesta.json();
      //  Mostrar datos en el formulario:
      setValue("usuario", usuarioBuscado.nombreCompleto);
      setValue("email", usuarioBuscado.email);
      setValue("password", usuarioBuscado.password);
    } else {
      Swal.fire({
        title: "Ocurrió un error",
        text: "Intente realizar esta operación en unos minutos.",
        icon: "error",
      });
    }
  };

   const usuarioValidado = async (usuario) => {
    try {
      if (editar) {
        const respuesta = await editarUsuarios(id, usuario);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Usuario editado",
            text: `El usuario ${usuario.email} fue modificado con exito.`,
            icon: "success",
          });

          navegacion("/administrador");
        } else {
          Swal.fire({
            title: "Ocurrió un error",
            text: "Intente modificar el usuario en unos minutos.",
            icon: "error",
          });
        }
      } else {
        const respuesta = await crearUsuario(usuario);

        if (respuesta.status === 201) {
          Swal.fire({
            title: "Huésped creado",
            text: `El Huésped: ${usuario.email} fue creado con éxito`,
            icon: "success",
          });
          navegacion("/administrador");
          reset();
        } else {
          Swal.fire({
            title: "Ocurrió un error",
            text: "Intente ingresar en unos minutos",
            icon: "error",
          });
        }
      }
      } catch (error) {
        console.log(error);
      }
    };
   

  return (
    <>
      <div className="container-registro my-4 Background-registro">
      <Form
          className="my-4 custom-form rounded"
          onSubmit={handleSubmit(usuarioValidado)}
          id="formHabitacion"
        >
          <div>
            <p className="title-registro">REGISTRATE</p>
          </div>
          <Form.Group className="mb-3" controlId="formNombre">
            <Form.Label className="sub_title-registro">
              Nombre y apellido
            </Form.Label>
            <Form.Control
              className="mb-2"
              type="text"
              placeholder="Nombre"
              {...register("nombreCompleto", {
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
              {errors.nombreCompleto?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label className="sub_title-registro">E-mail</Form.Label>
            <Form.Control
              className="mb-2"
              type="email"
              placeholder="nombre@gmail.com"
              {...register("email", {
                required: "El e-mail es obligatorio",
                minLength: {
                  value: 10,
                  message: "El e-mail debe tener al menos 10 caracteres",
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

            <Form.Control
              className="mb-2"
              type="password"
              placeholder="Contraseña"
              {...register("password", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 3,
                  message: "Ingrese un mínimo de 3 caracteres",
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

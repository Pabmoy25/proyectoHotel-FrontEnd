import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  editarUsuarios,
  obtenerUsuarios,
  crearUsuario,
} from "../../helpers/queriesUsuarios.js";
import Swal from "sweetalert2";
import { useEffect } from "react";

const Registro = ({ editar, titulo }) => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm();

  const { id } = useParams();
  const navegacion = useNavigate();

  useEffect(() => {
    if (editar) {
      cargarDatosUsuario();
    }
  }, [editar]);

  const cargarDatosUsuario = async () => {
    const respuesta = await obtenerUsuarios(id);
    if (respuesta.status === 200) {
      const usuarioBuscado = await respuesta.json();

      setValue("nombreCompleto", usuarioBuscado.nombreCompleto);
      setValue("email", usuarioBuscado.email);
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
        // Si estás editando un usuario, elimina el campo de contraseña del objeto usuario
        delete usuario.password;
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
        // Si estás creando un nuevo usuario, realiza la solicitud POST con el objeto usuario completo
        const respuesta = await crearUsuario(usuario);
        if (respuesta.status === 201) {
          Swal.fire({
            title: "Huésped creado",
            text: `El Huésped: ${usuario.email} fue creado con éxito`,
            icon: "success",
          });
          navegacion("/");
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
      <div className="container-registro Background-registro">
        <Form
          className="my-4 custom-form rounded"
          onSubmit={handleSubmit(usuarioValidado)}
          id="formRegistro"
        >
          <div>
            <p className="title-registro">{titulo}</p>
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

          {!editar && (
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
          )}
          <Form.Group className="mb-3" controlId="formPasswordRepeat">
            <Form.Label className="sub_title-registro">
              Reiterar contraseña
            </Form.Label>
            <Form.Control
              className="mb-2"
              type="password"
              placeholder="Contraseña"
              {...register("passwordRepeat", {
                required: "Reiterar su contraseña es obligatorio",
                /*minLength: {
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
                  },*/
              })}
            />{" "}
            {watch("passwordRepeat") !== watch("password") &&
            getValues("passwordRepeat") ? (
              <p>Las contraseñas no coinciden</p>
            ) : null}
            <Form.Text className="text-danger">
              {errors.password?.message}
            </Form.Text>
          </Form.Group>
          <div className="d-flex flex-row sub_title-registro ">
            <p>¿Ya tienes una cuenta? &nbsp;</p>

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
          <div className="d-flex justify-content-center">
            <Button type="submit" className="mb-5" id="btn-registro">
              Ingresar
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Registro;

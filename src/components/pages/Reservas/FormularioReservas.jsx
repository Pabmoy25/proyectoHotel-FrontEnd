import { Form, Button, Row, Col } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { crearReservas } from "../../../helpers/queriesReserva";

const FormularioReservas = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const reservaValidada = async (reserva) => {
    const respuesta = await crearReservas(reserva);
    if (respuesta.status === 201) {
      Swal.fire({
        title: "reserva creada",
        text: `La reserva fue creada con exito`,
        icon: "success",
      });
      reset();
    } else {
      Swal.fire({
        title: "Ocurrio un error",
        text: "Intente crear la reserva en unos minutos",
        icon: "error",
      });
    }
  };

  return (
    <>
      <div className="container-registro Background-registro">
        <Form
          className="custom-form rounded my-3 w-50"
          onSubmit={handleSubmit(reservaValidada)}
          id="formHabitacion"
        >
          <div>
            <p className="title-registro">Reservar</p>
          </div>
          <Row>
            <Col md={4}>
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
            </Col>
            <Col md={4}>
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
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="formRegistroTelefono">
                <Form.Label className="sub_title-registro">
                  Número de Contacto:
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ej: 3816810178"
                  {...register("telefono", {
                    required: "El telefono de contacto es obligatorio",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message:
                        "Ingresa un número de teléfono válido (10 dígitos)",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.telefono?.message}
                </Form.Text>
              </Form.Group>
            </Col>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="formNumeroHabitacion">
                  <Form.Label className="sub_title-registro">
                    Numero de Habitación*
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="A101"
                    {...register("habitacion", {
                      required: "El número de habitacion es obligatorio",
                      minLength: {
                        value: 2,
                        message:
                          "Debe ingresar como minimo 2 caracteres para el número de habitación",
                      },
                      maxLength: {
                        value: 5,
                        message:
                          "Debe ingresar como maximo 5 caracteres para el número de habitación",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.habitacion?.message}
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="formTipo">
                  <Form.Label className="sub_title-registro">
                    Tipo de Habitación*
                  </Form.Label>
                  <Form.Select
                    {...register("tipoDeHabitacion", {
                      required: "Debe seleccionar una categoria de habitación",
                    })}
                  >
                    <option value="">Seleccione una opcion</option>
                    <option value="Estándar">Estándar</option>
                    <option value="Doble">Doble</option>
                    <option value="Deluxe">Deluxe</option>
                    <option value="Suite">Suite</option>
                  </Form.Select>
                  <Form.Text className="text-danger">
                    {errors.tipoDeHabitacion?.message}
                  </Form.Text>
                </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="formPrecio">
                    <Form.Label className="sub_title-registro">Tarifa por noche*</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="20000"
                      {...register("precio", {
                        required: "El precio es obligatorio",
                        min: {
                          value: 10000,
                          message: "El precio minimo es de $10.000",
                        },
                        max: {
                          value: 100000,
                          message: "El precio maximo es de $100.000",
                        },
                      })}
                    />
                    <Form.Text className="text-danger">
                      {errors.precio?.message}
                    </Form.Text>
                  </Form.Group>
              
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="formFechaEntrada">
                  <Form.Label className="sub_title-registro">
                    Fecha de Entrada
                  </Form.Label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    dateFormat="dd/MM/yyyy"
                    className="form-control text-center"
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="formFechaSalida">
                  <Form.Label className="sub_title-registro">
                    Fecha de Salida
                  </Form.Label>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    dateFormat="dd/MM/yyyy"
                    className="form-control text-center"
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="formFechaSalida">
                  <Form.Label className="sub_title-registro">
                    Total de días
                  </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Ej: 7"
                    {...register("TotalDeDias", {
                      required: "Elija un periodo de días",
                      pattern: {
                        value: /^[0-9]{3}$/,
                        message: "Los dias no pueden superar los 3 dígitos)",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.telefono?.message}
                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>
          </Row>
          <div className="d-flex justify-content-center">
            <Button type="submit" className="mb-3" id="btn-registro">
              Confirmar
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default FormularioReservas;

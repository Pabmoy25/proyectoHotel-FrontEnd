import { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { crearHabitacion,editarHabitacion,obtenerHabitacion } from "../../../helpers/queriesHabitaciones";

const FormularioHabitacion = ({editar}) => {
  const { id } = useParams();
  const navegacion = useNavigate();

  useEffect(() => {
    if (editar) {
      cargarDatosEnFormulario();
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const cargarDatosEnFormulario = async () => {
  
    const respuesta = await obtenerHabitacion(id);
    if (respuesta.status === 200) {
      const habitacionBuscada = await respuesta.json();
      //  Mostrar datos en el formulario:
      setValue("numeroHabitacion", habitacionBuscada.habitacion);
      setValue("tipoDeHabitacion", habitacionBuscada.tipoDeHabitacion);
      setValue("precio", habitacionBuscada.precio);
      setValue("estado", habitacionBuscada.estado);
      setValue("imagen", habitacionBuscada.imagen);
      setValue("descripcion_breve", habitacionBuscada.descripcion_breve);
      setValue("descripcion_amplia", habitacionBuscada.descripcion_amplia);
    } else {
      Swal.fire({
        title: "Ocurrió un error",
        text: "Intente realizar esta operación en unos minutos.",
        icon: "error",
      });
    }
  };

  const habitacionValidada = async (habitacion) => {
    try {
      if (editar) {
        const respuesta = await editarHabitacion(id, habitacion);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Habitación editada",
            text: `La habitación número ${habitacion.habitacion} fue modificada exitosamente.`,
            icon: "success",
          });
          // Redireccionar a tabla de Admin una vez termine la edición
          navegacion("/administrador");
        } else {
          Swal.fire({
            title: "Ocurrió un error",
            text: "Intente modificar la habitación en unos minutos.",
            icon: "error",
          });
        }
      } else {
        const respuesta = await crearHabitacion(habitacion);
        if (respuesta.status === 201) {
          Swal.fire({
            title: "Habitación creada",
            text: `La Habitación: ${habitacion.habitacion} fue creada con exito`,
            icon: "success",
          });
          navegacion("/administrador");
        } else {
          Swal.fire({
            title: "Ocurrio un error",
            text: "Intente crear la habitación en unos minutos",
            icon: "error",
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  

  return (
    <Container className="container-fluid">
      <section className="container mainpage contenFormHabitacion my-5">
        <h1 className="display-4 mt-2 titulo-administrador">
          Nueva Habitación
        </h1>
        <hr />

        <Form
          className="my-4"
          onSubmit={handleSubmit(habitacionValidada)}
          id="formHabitacion"
        >
          <Form.Group className="mb-3" controlId="formNumeroHabitacion">
            <Form.Label>Numero de Habitación*</Form.Label>
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

          <Form.Group className="mb-3" controlId="formImagen">
            <Form.Label>Imagen URL*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: https://i.pinimg.com/originals/da/39/ce/da39ceccbd966c17c74c016e311e1ec2.png"
              {...register("imagen", {
                required: "La imagen es obligatoria",
                pattern: {
                  value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/,
                  message: "Debe ingresar una URL valida (jpg|gif|png|jpeg)",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.imagen?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formTipo">
            <Form.Label>Tipo de Habitación*</Form.Label>
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
          <Form.Group className="mb-3" controlId="formImagen">
            <Form.Label>Descripcion breve*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Habitación cómoda, buen baño, excelente desayuno, pileta climatizada y terraza cubierta"
              as="textarea"
              {...register("descripcion_breve", {
                required: "La descripcion breve es obligatoria",
                minLength: {
                  value: 20,
                  message:
                    "Debe ingresar como minimo 20 caracteres para la descripcion",
                },
                maxLength: {
                  value: 100,
                  message:
                    "Debe ingresar como maximo 100 caracteres para la descripcion",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.descripcion_breve?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImagen">
            <Form.Label>Descripcion amplia*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ambiente inolvidable y romántica, decorado con estilo y gusto, baño con ducha de cromoterapia, y jacuzzi.
            • Habitación para dos personas
            • Sala de estar con sofá-cama para dos personas
            • Cuarto de baño con ducha
            • Aire acondicionado
            • Secador de pelo
            • Conexión a Internet de velocidad de línea (gratis)
            • Dispositivo para la auto-calefacción y aire acondicionado
            • Mini-bar
            • Espejo retroiluminado"
              as="textarea"
              {...register("descripcion_amplia", {
                required: "La descripcion amplia es obligatoria",
                minLength: {
                  value: 50,
                  message:
                    "Debe ingresar como minimo 50 caracteres para la descripcion amplia",
                },
                maxLength: {
                  value: 900,
                  message:
                    "Debe ingresar como maximo 500 caracteres para la descripcion amplia",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.descripcion_amplia?.message}
            </Form.Text>
          </Form.Group>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formFechaEntrada">
                <Form.Label>Fecha de Entrada *</Form.Label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  dateFormat="dd/MM/yyyy"
                  className="form-control"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formFechaSalida">
                <Form.Label>Fecha de Salida *</Form.Label>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  dateFormat="dd/MM/yyyy"
                  className="form-control"
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="formPrecio">
            <Form.Label>Tarifa por noche*</Form.Label>
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
          <Form.Group className="mb-3" controlId="formEstado">
            <Form.Label>Estado de la Habitación*</Form.Label>
            <Form.Select
              {...register("estado", {
                required: "Debe seleccionar un estado (Ocupada o Libre)",
              })}
            >
              <option value="">Seleccione una opcion</option>
              <option value="Libre">Libre</option>
              <option value="Ocupada">Ocupada</option>
            </Form.Select>
            <Form.Text className="text-danger">
              {errors.estado?.message}
            </Form.Text>
          </Form.Group>
          <Button type="submit" variant="outline-secondary" id="btnAdmin">
            Guardar
          </Button>
        </Form>
      </section>
    </Container>
  );
};

export default FormularioHabitacion;

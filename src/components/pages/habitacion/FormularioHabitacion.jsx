import React, { useState } from 'react';
import { Form, Button, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const FormularioHabitacion = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

  return (
    <section className="container mainpage">
      <h1 className="display-4 mt-5 titulo-administrador">Nueva Habitación</h1>
      <hr />

      <Form className="my-4">
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Numero de Habitación*</Form.Label>
          <Form.Control type="text" placeholder="A101" />
          <Form.Text className="text-danger">prueba de error</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://i.pinimg.com/originals/da/39/ce/da39ceccbd966c17c74c016e311e1ec2.png"
          />
          <Form.Text className="text-danger">prueba de error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Tipo de Habitación*</Form.Label>
          <Form.Select>
            <option value="">Seleccione una opcion</option>
            <option value="Estándar">Estándar</option>
            <option value="Doble">Doble</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Suite">Suite</option>
          </Form.Select>
          <Form.Text className="text-danger">prueba de error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Descripcion breve*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Habitación cómoda, buen baño, excelente desayuno, pileta climatizada y terraza cubierta"
            as="textarea"
          />
          <Form.Text className="text-danger">prueba de error</Form.Text>
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
          />
          <Form.Text className="text-danger">prueba de error</Form.Text>
        </Form.Group>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formFechaEntrada">
              <Form.Label>Fecha de Entrada *</Form.Label>
              <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
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
                onChange={date => setEndDate(date)}
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
          <Form.Control type="number" placeholder="20000" />
          <Form.Text className="text-danger">prueba de error</Form.Text>
        </Form.Group>


        <Button type="submit" variant="outline-secondary"
          id="btnAdmin">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default FormularioHabitacion;

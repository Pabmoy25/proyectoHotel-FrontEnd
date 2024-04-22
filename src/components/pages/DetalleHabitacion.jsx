import { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { obtenerHabitacion } from "../../helpers/queriesHabitaciones";
import Swal from "sweetalert2";
 
 const DetalleHabitacion = () => {
 const {id}= useParams ();
 const [habitacion, setHabitacion] = useState({});

 useEffect(()=>{
    //buscar el producto que quiero maquetar
    cargarDetalle();
  },[])

  const cargarDetalle = async()=>{
   const respuesta = await obtenerHabitacion(id)
   if(respuesta.status === 200){
     //mostrar el producto en la card
     const datoHabitacion = await respuesta.json();
     setHabitacion(datoHabitacion);
   }else{
     Swal.fire({
       title: "Ocurrio un error",
       text: "Intente realizar esta operacion en unos minutos",
       icon: "error",
     });
   }
 }

 return (
      
   <Container className="my-3 mainpage">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src={habitacion.imagen}
              alt={habitacion.nombrehabitacion}
              className="card-img-top-detalle" 
              />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title className="primary-font"><h3>{habitacion.nombrehabitacion}</h3></Card.Title>
              <hr />
              <Card.Text>
              {habitacion.descripcion_amplia}
              <br/>
              <br/>
              <span className="primary-font fw-semibold ">Categoria:${habitacion.categoria} </span> 
              <br className='mb-3'/>
              <span className="primary-font fw-semibold ">Precio: ${habitacion.precio}</span>
            </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
      
    );
 };
 
 export default DetalleHabitacion;
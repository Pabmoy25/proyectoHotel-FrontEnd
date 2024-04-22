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


 return (
        <div>
            
        </div>
    );
 };
 
 export default DetalleHabitacion;
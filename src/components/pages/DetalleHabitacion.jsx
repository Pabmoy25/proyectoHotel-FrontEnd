import { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { obtenerProductoAPI } from "../../helpers/queries";
import Swal from "sweetalert2";
 
 const DetalleHabitacion = () => {
 const {id}= useParams ();






    return (
        <div>
            
        </div>
    );
 };
 
 export default DetalleHabitacion;
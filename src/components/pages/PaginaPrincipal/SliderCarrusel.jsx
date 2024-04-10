import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./PaginaPrincipal.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css';



const SliderCarrusel = () => {
    const ArraydeImagenes = [

        {
            Imagen:"https://images.pexels.com/photos/3649209/pexels-photo-3649209.jpeg?auto=compress&cs=tinysrgb&w1920=&h=144040&dpr=1",
            Nombre: "" ,
        },
        
        {
            Imagen:"https://images.pexels.com/photos/4577385/pexels-photo-4577385.jpeg?auto=compress&cs=tinysrgb&w=1280&h=960&dpr=1",
            Nombre: "" ,
        },
        {
            Imagen:"https://images.pexels.com/photos/5870893/pexels-photo-5870893.jpeg?auto=compress&cs=tinysrgb&w=1280&h=960&dpr=1",
            Nombre: "" ,
        },
        {
            Imagen:"https://images.pexels.com/photos/18310406/pexels-photo-18310406/free-photo-of-paisaje-hotel-colinas-piscina.jpeg?auto=compress&cs=tinysrgb&w=1280&h=960&dpr=1",
            Nombre: "" ,
        },
       
    ];
    
 return (
    <Carousel className="Carrusel">
    {ArraydeImagenes.map((Element) => {
    return (
        <Carousel.Item className="ItemCarrusel">
            <img className="ImagenCarrusel" src={Element.Imagen}/>
        <Carousel.Caption>
            <h5>{Element.Nombre}</h5>
            <p>Frase presentacion</p>
        </Carousel.Caption>
    </Carousel.Item>
      );
    })}
       </Carousel>
);

};

export default SliderCarrusel;


  

  


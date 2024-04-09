import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


const SliderCarrusel = () => {
    const ArraydeImagenes = [

        {
            Imagen:"https://images.pexels.com/photos/5269803/pexels-photo-5269803.jpeg",
            Nombre: "Foto1" ,
        },
        
        {
            Imagen:"https://unsplash.com/es/fotos/vista-al-mar-dentro-de-la-habitacion-IQKuHc2lils",
            Nombre: "Foto2" ,
        },
        {
            Imagen:"https://unsplash.com/es/fotos/vista-al-mar-dentro-de-la-habitacion-IQKuHc2lils",
            Nombre: "Foto3" ,
        },
    ];
    
 return (
    <Carousel className='Carrusel'>
    {ArraydeImagenes.map((Element) => {
    return (
        <Carousel.Item className="ItemCarrusel">
            <img className="ImagenCarrusel" src={Element.imagen} />
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


  

  


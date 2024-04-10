import React from 'react';
import logoHotel from '../../assets/logoHotel.png'
import movil1 from '../../assets/movil1.jpg'
import movil2 from '../../assets/movil2.jpg'
import movil3 from '../../assets/movil3.jpg'
import movil4 from '../../assets/movil4.jpg'
import movil5 from '../../assets/movil5.jpg'

const GaleriaImagenes = () => {
    return (
        <>
        <section className='container text-center tituloAdmin mt-4'>
            <h1>Galeria de Imagenes</h1>
        </section>
         <div className='galeria-moviles container my-3'>
         <img src={movil1} alt="logo Hotel Haki Wasi" className="img-fluid" ></img>
         <img src={movil2} alt="logo Hotel Haki Wasi" className="img-fluid" ></img>
         <img src={movil3} alt="logo Hotel Haki Wasi" className="img-fluid" ></img>
         <img src={movil4} alt="logo Hotel Haki Wasi" className="img-fluid" ></img>
         <img src={movil5} alt="logo Hotel Haki Wasi" className="img-fluid" ></img>
        </div>
        </>
       
    );
};

export default GaleriaImagenes;
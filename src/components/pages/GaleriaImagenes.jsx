import React from 'react';
import logoHotel from '../../assets/logoHotel.png'

const GaleriaImagenes = () => {
    return (
        <>
         <div className='galeria-moviles container'>
         <img src={logoHotel} alt="logo Hotel Haki Wasi" className="img-fluid" ></img>
         <img src={logoHotel} alt="logo Hotel Haki Wasi" className="img-fluid" ></img>
         <img src={logoHotel} alt="logo Hotel Haki Wasi" className="img-fluid" ></img>
         <img src={logoHotel} alt="logo Hotel Haki Wasi" className="img-fluid" ></img>
         <img src={logoHotel} alt="logo Hotel Haki Wasi" className="img-fluid" ></img>
        </div>
        </>
       
    );
};

export default GaleriaImagenes;
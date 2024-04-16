import React from 'react';
import CardOK from './CardOK';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./PaginaPrincipal.css";
import IconoFood from '../../../assets/ImgPagPrincipal/IconoFood.svg';
import IconoLugar from '../../../assets/ImgPagPrincipal/IconoLugar.svg';
import IconoWifi from '../../../assets/ImgPagPrincipal/IconoWifi.svg';
import IconoGym from '../../../assets/ImgPagPrincipal/IconoGym.svg';
import IconoPerson from '../../../assets/ImgPagPrincipal/IconoPerson.svg';
import IconoAuto from '../../../assets/ImgPagPrincipal/IconoAuto.svg';




const CardsInfo = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
           <CardOK/>
        </div>
        <div className='col-md-4'>
           <CardOK/>
        </div>

      </div>
     </div>

     
  );
};

export default CardsInfo;


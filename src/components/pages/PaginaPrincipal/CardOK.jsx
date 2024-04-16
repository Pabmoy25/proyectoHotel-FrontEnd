import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import IconoFood from '../../../assets/ImgPagPrincipal/IconoFood.svg';
import IconoLugar from '../../../assets/ImgPagPrincipal/IconoLugar.svg';
import IconoWifi from '../../../assets/ImgPagPrincipal/IconoWifi.svg';
import IconoGym from '../../../assets/ImgPagPrincipal/IconoGym.svg';
import IconoPerson from '../../../assets/ImgPagPrincipal/IconoPerson.svg';
import IconoAuto from '../../../assets/ImgPagPrincipal/IconoAuto.svg';

const CardOK = ({title, imageURL}) => {
    return (
        <div className='card text-center'>
            <img src={imageURL} alt=''/>
            <div className='card-body'>
            <h4 className='card-title'>{title}</h4>
            <p className='card-text text secondary text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
            
        </div>
    );
};

export default CardOK;
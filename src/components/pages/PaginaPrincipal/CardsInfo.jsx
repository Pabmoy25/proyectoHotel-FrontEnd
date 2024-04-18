import React from 'react';
import CardOK from './CardOK';
import { Card } from 'react-bootstrap';
import IconoFood from '../../../assets/ImgPagPrincipal/Icono_Food.png';
import IconoLugar from '../../../assets/ImgPagPrincipal/Icono_Lugar.png';
import IconoWifi from '../../../assets/ImgPagPrincipal/Icono_Wifi.png';
import IconoGym from '../../../assets/ImgPagPrincipal/Icono_Gym.png'
import IconoPerson from '../../../assets/ImgPagPrincipal/Icono_Person.png';
import IconoAuto from '../../../assets/ImgPagPrincipal/Icono_Auto.png';



const ArrayCards = [
  {
    id: 1,
    image: IconoFood,
    title: 'Gastronomía',
  },
  {
    id: 2,
    image: IconoLugar,
    title: 'Espacios',
  },
  {
    id: 3,
    image: IconoWifi,
    title: 'Wifi',
  },
  {
    id: 4,
    image: IconoGym,
    title: 'Gym',
  },
  {
    id: 5,
    image: IconoPerson,
    title: 'Personal Capacitado',
  },
  {
    id: 6,
    image: IconoAuto,
    title: 'Traslados',
  },


]


function CardsInfo () {
  return (
    <div className='container d-flex justify-content-center align-items-center'>
      <div className='row'>
        {
          ArrayCards.map(card => (
          <div className='col-md-4' key={card.id}>
           <CardOK title={card.title} imageURL={card.image}/>
           </div>

          ))
        }
       </div>
     </div>

     
  );
};

export default CardsInfo;


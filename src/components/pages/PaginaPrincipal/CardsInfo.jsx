import React from 'react';
import CardOK from './CardOK';
import { Card } from 'react-bootstrap';
import IconoFood from '../../../assets/ImgPagPrincipal/IconoFood.svg';


const ArrayCards = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    title: 'Gastronomía',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150',
    title: 'Espacios',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150',
    title: 'Wifi',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/150',
    title: 'Gym',
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/150',
    title: 'Personal',
  },
  {
    id: 6,
    image: 'https://via.placeholder.com/150',
    title: 'Traslados',
  },


]


function CardsInfo () {
  return (
    <div className='container'>
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


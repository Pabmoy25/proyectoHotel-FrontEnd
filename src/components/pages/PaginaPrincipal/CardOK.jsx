import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const CardOK = ({title, imageURL}) => {
    return (
        <div className='card text-center'>
            <img src={imageURL} width="200" height="200"  alt=''/>
            <div className='card-body'>
            <h4 className='card-title text-center'>{title}</h4>
           
            </div>
            
        </div>
    );
};

export default CardOK;
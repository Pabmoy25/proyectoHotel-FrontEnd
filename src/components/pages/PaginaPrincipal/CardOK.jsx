import 'bootstrap/dist/css/bootstrap.min.css'; 

const CardOK = ({title, imageURL}) => {
    return (
        <div className='card text-center mx-auto'>
            <img src={imageURL} className='card-image'  alt='icono'/>
            <div className='card-body'>
            <h3 className='card-title text-center'>{title}</h3>
           
            </div>
            
        </div>
    );
};

export default CardOK;
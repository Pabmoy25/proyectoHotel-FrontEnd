import SliderCarrusel from "./SliderCarrusel";
import "./PaginaPrincipal.css";
import Petfriendly from "../../../assets/ImgPagPrincipal/petfriendlyOK.jpg";
import Gastronomia from "../../../assets/ImgPagPrincipal/Gastronomia.png";
import PersonalCap from "../../../assets/ImgPagPrincipal/personalcap.png";
import Patio from "../../../assets/ImgPagPrincipal/PatiosImg.png";
import 'react-responsive-image';




const PaginaPrincipal = () => {
    return (
        <>
        <SliderCarrusel/>

        
       <section>
        <div className="Informacion">
        <div className="ImagenPetFriendly">
        <img src="https://images.pexels.com/photos/8939517/pexels-photo-8939517.jpeg"className="PetfriendlyImg"/>
        </div>
       
        <aside>
          <h2>HAKU HUASI HOTEL</h2>
          <h3>SOMOS PET-FRIENDLY</h3>
          <p> Te contamos que Haku Huasi es un hotel pet friendly.
          Todo su espacio, tanto interior como exterior, está pensado y diseñado especialmente para que puedas compartir cómodamente con toda tu familia completa. No dudes en venir con tu mejor amigo a disfrutar de tus vacaciones!</p>
        </aside>
      </div> 
        </section>

        
       


    </>
    )
};

export default PaginaPrincipal;
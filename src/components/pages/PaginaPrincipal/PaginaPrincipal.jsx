import SliderCarrusel from "./SliderCarrusel";
import "./PaginaPrincipal.css";
import 'react-responsive-image';
import { Container, Row, Col } from 'react-bootstrap';
import CardsInfo from "./CardsInfo";




const PaginaPrincipal = () => {
    return (
        <>
        <SliderCarrusel/>

        
       <section>
        <div className="Informacion">
        <div className="ImagenPetFriendly">
        <img src="https://images.pexels.com/photos/8939517/pexels-photo-8939517.jpeg"className="PetfriendlyImg"/>
        </div>
       
       <div className="TextoDescripcion">
         <aside>
          <h2>HAKU HUASI HOTEL</h2>
          <h3>SOMOS PET-FRIENDLY</h3>
          <p> Te contamos que Haku Huasi es un hotel pet friendly.
          Todo su espacio, tanto interior como exterior, está pensado y diseñado especialmente para que puedas compartir cómodamente con toda tu familia completa. No dudes en venir con tu mejor amigo a disfrutar de tus vacaciones!</p>
        </aside>
       </div>
        </div> 
      </section>

        
      <Container className="CardInfo">
        <Row>

        <Col>
        <CardsInfo
          image={cardImage1}
          title="Card 1"
          description="This is a description for Card 1."
        />
        <CardsInfo
          image={cardImage2}
          title="Card 2"
          description="This is a description for Card 2."
        />
        <CardsInfo
          image={cardImage2}
          title="Card 2"
          description="This is a description for Card 3."
        />
       <CardsInfo
          image={cardImage2}
          title="Card 2"
          description="This is a description for Card 4."
        />
        <CardsInfo
          image={cardImage2}
          title="Card 2"
          description="This is a description for Card 5."
        />
               <CardsInfo
          image={cardImage2}
          title="Card 2"
          description="This is a description for Card 6."
        />
       </Col>
        </Row>
   
      </Container>


    </>
    )
};

export default PaginaPrincipal;
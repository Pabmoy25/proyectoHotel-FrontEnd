import SliderCarrusel from "./SliderCarrusel";
import "./PaginaPrincipal.css";




const PaginaPrincipal = () => {
    return (
        <>
        <SliderCarrusel/>

        <section>
        <div className="image-section">
        <img src="assets/ImgPagPrincipal/Gastronomia.png" alt="Main Image" />
        <aside>
          <h3>HAKU HUASI HOTEL</h3>
          <h4>SOMOS PET-FRIENDLY</h4>
          <p>Haku Huasi es un hotel pet friendly.Todo su espacio está pensado y diseñado especialmente para que puedas compartir cómodamente con toda tu familia completa.</p>
        </aside>
      </div> 
        </section>

        
        <div className="card-section">
        <div className="card">
        <img src="assets/ImgPagPrincipal/Gastronomia.png" alt="Main Image" />
          <h2>Card 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
        </div>
        <div className="card">
        <img src="assets/main-image.jpeg" alt="Main Image" />
          <h2>Card 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
        </div>
        <div className="card">
        <img src="assets/main-image.jpeg" alt="Main Image" />
          <h2>Card 3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
        </div>
      </div>
        


    </>
    )
};

export default PaginaPrincipal;
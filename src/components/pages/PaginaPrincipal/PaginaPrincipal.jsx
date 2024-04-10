import SliderCarrusel from "./SliderCarrusel";
import "./PaginaPrincipal.css";


const PaginaPrincipal = () => {
    return (
        <>
        <SliderCarrusel/>
        
        <div className="image-section">
        <img src="assets/main-image.jpeg" alt="Main Image" />
        <aside>
          <h3>HAKU HUASI HOTEL</h3>
          <h4>SOMOS PET-FRIENDLY</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
        </aside>
      </div>
 
        <div className="card-section">
       
        <div className="card">
        <img src="assets/main-image.jpeg" alt="Main Image" />
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
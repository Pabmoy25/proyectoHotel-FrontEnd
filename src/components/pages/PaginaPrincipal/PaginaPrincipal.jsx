import SliderCarrusel from "./SliderCarrusel";
import "./PaginaPrincipal.css";


const PaginaPrincipal = () => {
    return (
        <>
        <SliderCarrusel/>

        <section>
        <div className="image-section">
        <img src="assets/main-image.jpeg" alt="Main Image" />
        <aside>
          <h3>HAKU HUASI HOTEL</h3>
          <h4>SOMOS PET-FRIENDLY</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
        </aside>
      </div> 
        </section>
    </>
    )
};

export default PaginaPrincipal;
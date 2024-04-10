import React, { useState } from 'react';
import logoHotel from '../../assets/logoHotel.png'
import movil1 from '../../assets/movil1.jpg'
import movil2 from '../../assets/movil2.jpg'
import movil3 from '../../assets/movil3.jpg'
import movil4 from '../../assets/movil4.jpg'
import movil5 from '../../assets/movil5.jpg'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'react-bootstrap';


const GaleriaImagenes = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [imagenModal, setImagenModal] = useState(null);

    const toggleModal = (imagen) => {
        setImagenModal(imagen);
        setModalOpen(!modalOpen);
    };

    return (
        <>
        <section className='container text-center tituloAdmin mt-4'>
            <h1>Galeria de Imagenes</h1>
        </section>
         <div className='galeria-moviles container my-3'>
         <img src={movil1} alt="logo Hotel Haki Wasi" className="img-fluid" ></img>
         <img src={movil2} alt="logo Hotel Haki Wasi" className="img-fluid" ></img>
         <img src={movil3} alt="logo Hotel Haki Wasi" className="img-fluid" ></img>
         <img src={movil4} alt="logo Hotel Haki Wasi" className="img-fluid" ></img>
         <img src={movil5} alt="logo Hotel Haki Wasi" className="img-fluid" ></img>
        </div>

        <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <img src={movil1} className="img-fluid galeria-imagen" alt="Imagen 1" onClick={() => toggleModal(movil1)} />
                    </div>
                    <div className="col-md-4">
                        <img src={movil1} className="img-fluid galeria-imagen" alt="Imagen 2" onClick={() => toggleModal(movil1)} />
                    </div>
                    <div className="col-md-4">
                        <img src={movil1} className="img-fluid galeria-imagen" alt="Imagen 2" onClick={() => toggleModal(movil1)} />
                    </div>
                    <div className="col-md-4">
                        <img src={movil1} className="img-fluid galeria-imagen" alt="Imagen 2" onClick={() => toggleModal(movil1)} />
                    </div>
                    <div className="col-md-4">
                        <img src={movil1} className="img-fluid galeria-imagen" alt="Imagen 2" onClick={() => toggleModal(movil1)} />
                    </div>                    {/* Agrega más imágenes según sea necesario */}
                </div>
            </div>

            <Modal show={modalOpen} onHide={toggleModal}>
                <ModalHeader closeButton>
                    Título del Modal
                </ModalHeader>
                <ModalBody>
                    {imagenModal && <img src={movil1} className="img-fluid" alt="Imagen modal" />}
                </ModalBody>
                <ModalFooter>
                    <Button variant="secondary" onClick={toggleModal}>
                        Cerrar
                    </Button>
                </ModalFooter>
            </Modal>
           </>
       
    );
};

export default GaleriaImagenes;
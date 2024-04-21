import React, { useState } from "react";
import logoHotel from "../../assets/logoHotel.png";
import movil1 from "../../assets/GaleriaImagenes/movil1.jpg";
import movil2 from "../../assets/GaleriaImagenes/movil2.jpg";
import movil3 from "../../assets/GaleriaImagenes/movil3.jpg";
import Movil4 from "../../assets/GaleriaImagenes/Movil4.jpg";
import movil5 from "../../assets/GaleriaImagenes/movil5.jpg";
import Modal1 from "../../assets/GaleriaImagenes/Modal1.jpg";
import Modal2 from "../../assets/GaleriaImagenes/Modal2.jpg";
import Modal3 from "../../assets/GaleriaImagenes/Modal3.jpg";
import Modal4 from "../../assets/GaleriaImagenes/Modal4.jpg";
import Modal5 from "../../assets/GaleriaImagenes/Modal5.jpg";
import Modal6 from "../../assets/GaleriaImagenes/Modal6.jpg";
import Modal7 from "../../assets/GaleriaImagenes/Modal7.jpg";
import Modal8 from "../../assets/GaleriaImagenes/Modal8.jpg";
import Modal9 from "../../assets/GaleriaImagenes/Modal9.jpg";

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "react-bootstrap";

const GaleriaImagenes = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [imagenModal, setImagenModal] = useState(null);

  const toggleModal = (imagen) => {
    setImagenModal(imagen);
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <section className="container text-center tituloAdmin mt-4">
        <h1>Galeria de Imagenes</h1>
      </section>
      <div className="galeria-moviles container my-3">
        <img
          src={movil1}
          alt="logo Hotel Haki Wasi"
          className="img-fluid"
        ></img>
        <img
          src={movil2}
          alt="logo Hotel Haki Wasi"
          className="img-fluid"
        ></img>
        <img
          src={movil3}
          alt="logo Hotel Haki Wasi"
          className="img-fluid"
        ></img>
        <img
          src={Movil4}
          alt="logo Hotel Haki Wasi"
          className="img-fluid"
        ></img>
        <img
          src={movil5}
          alt="logo Hotel Haki Wasi"
          className="img-fluid"
        ></img>
      </div>

      <div className="container">
        <div className="row ">
          <div className="col-md-4 mb-3 ">
            <img
              src={Modal1}
              className="img-fluid galeria-imagen"
              alt="Imagen 1"
              onClick={() => toggleModal(Modal1)}
            />
          </div>

          <div className="col-md-4">
            <img
              src={Modal4}
              className="img-fluid galeria-imagen"
              alt="Imagen 2"
              onClick={() => toggleModal(Modal4)}
            />
          </div>
          <div className="col-md-4">
            <img
              src={Modal3}
              className="img-fluid galeria-imagen"
              alt="Imagen 2"
              onClick={() => toggleModal(Modal3)}
            />
          </div>
          <div className="col-md-4">
            <img
              src={Modal2}
              className="img-fluid galeria-imagen"
              alt="Imagen 2"
              onClick={() => toggleModal(Modal2)}
            />
          </div>
          <div className="col-md-4">
            <img
              src={Modal5}
              className="img-fluid galeria-imagen"
              alt="Imagen 2"
              onClick={() => toggleModal(Modal5)}
            />
          </div>

          <div className="col-md-4">
            <img
              src={Modal9}
              className="img-fluid galeria-imagen"
              alt="Imagen 2"
              onClick={() => toggleModal(Modal9)}
            />
          </div>
          <div className="col-md-4">
            <img
              src={Modal7}
              className="img-fluid galeria-imagen"
              alt="Imagen 2"
              onClick={() => toggleModal(Modal7)}
            />
          </div>
          <div className="col-md-4">
            <img
              src={Modal8}
              className="img-fluid galeria-imagen"
              alt="Imagen 2"
              onClick={() => toggleModal(Modal8)}
            />
          </div>
          <div className="col-md-4">
            <img
              src={Modal6}
              className="img-fluid galeria-imagen"
              alt="Imagen 2"
              onClick={() => toggleModal(Modal6)}
            />
          </div>
          
        </div>
      </div>

      <Modal show={modalOpen} onHide={toggleModal}>
        <ModalBody>
          {imagenModal && (
            <img src={imagenModal} className="img-fluid" alt="Imagen modal" />
          )}
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

import React, { useState } from "react";
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
import Modal10 from "../../assets/GaleriaImagenes/Modal10.jpg";
import Modal11 from "../../assets/GaleriaImagenes/Modal11.jpg";
import Modal12 from "../../assets/GaleriaImagenes/Modal12.jpg";
import Modal13 from "../../assets/GaleriaImagenes/Modal13.jpg";
import Modal14 from "../../assets/GaleriaImagenes/Modal14.jpg";

import { Modal, ModalBody, ModalFooter, Button } from "react-bootstrap";

const GaleriaImagenes = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [imagenModal, setImagenModal] = useState(null);

  const toggleModal = (imagen) => {
    setImagenModal(imagen);
    setModalOpen(!modalOpen);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(9); // Cantidad de imágenes por página

  const modalImages = [
    Modal1,
    Modal4,
    Modal3,
    Modal2,
    Modal9,
    Modal5,
    Modal6,
    Modal7,
    Modal8,
    Modal10,
    Modal13,
    Modal14,
    Modal11,
    Modal12,
  ];

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = modalImages.slice(indexOfFirstImage, indexOfLastImage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <section className="container text-center tituloAdmin mt-4">
        <h1>Galeria de Imagenes</h1>
      </section>
      <div className="galeria-moviles container my-3">
        <img src={movil1} alt="Vista de fuera" className="img-fluid"></img>
        <img src={movil2} alt="Suite" className="img-fluid"></img>
        <img src={movil3} alt="Cabañas" className="img-fluid"></img>
        <img src={Movil4} alt="Pileta exterior" className="img-fluid"></img>
        <img src={movil5} alt="Pileta Interior" className="img-fluid"></img>
      </div>

      <div className="container">
        <div className="row">
          {currentImages.map((image, index) => (
            <div key={index} className="col-md-4">
              <img
                src={image}
                alt={`Imagen ${index}`}
                className="img-fluid galeria-imagen imagen-con-margen"
                onClick={() => toggleModal(image)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Paginación */}
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 && "disabled"}`}>
            <button
              className="page-link custom-pagination-button"
              onClick={() => paginate(currentPage - 1)}
            >
              Previous
            </button>
          </li>
          {[...Array(Math.ceil(modalImages.length / imagesPerPage)).keys()].map(
            (number) => (
              <li
                key={number}
                className={`page-item ${
                  currentPage === number + 1 && "active"
                }`}
              >
                <button
                  className="page-link custom-pagination-button"
                  onClick={() => paginate(number + 1)}
                >
                  {number + 1}
                </button>
              </li>
            )
          )}
          <li
            className={`page-item ${
              currentPage === Math.ceil(modalImages.length / imagesPerPage) &&
              "disabled"
            }`}
          >
            <button
              className="page-link custom-pagination-button"
              onClick={() => paginate(currentPage + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>

      <Modal show={modalOpen} onHide={toggleModal} size="lg">
        <ModalBody>
          {imagenModal && (
            <img src={imagenModal} className="img-fluid" alt="Imagen modal" />
          )}
        </ModalBody>
        <ModalFooter className="justify-content-center">
          <button
            className="btn btn-dark d-block d-md-none"
            onClick={toggleModal}
          >
            {" "}
            {/* Botón de Bootstrap visible solo en dispositivos pequeños y medianos */}
            Cerrar
          </button>
          <button
            className=" custom-button d-none d-md-inline-block"
            onClick={toggleModal}
          >
            {" "}
            {/* Botón personalizado visible solo en dispositivos grandes */}
            Cerrar
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default GaleriaImagenes;

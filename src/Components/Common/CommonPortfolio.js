import React, { useState } from "react";
import { CommonHead } from "../Common/CommonComponent";
import { useLocation } from "react-router-dom";
import { GallaryImage } from "../Common/CommonComponent";
import "./Gallery.css";

const CommonPortfolio = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const albumType = pathSegments[pathSegments.length - 1];
  const title = albumType.charAt(0).toUpperCase() + albumType.slice(1);
  const selectedGallery = GallaryImage.find(item => item.type === albumType);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = index => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const showNextImage = () => {
    setCurrentImageIndex(
      prevIndex => (prevIndex + 1) % selectedGallery.images.length
    );
  };

  const showPrevImage = () => {
    setCurrentImageIndex(
      prevIndex =>
        (prevIndex - 1 + selectedGallery.images.length) %
        selectedGallery.images.length
    );
  };

  return (
    <>
      <div style={{ minHeight: "55vh" }}>
        <CommonHead title={title} />
      </div>
      <div style={{ backgroundColor: "rgb(255 255 255 / 33%)" }}>
        <div className="container py-5 gallery">
          {selectedGallery ? (
            selectedGallery.images.map((image, index) => (
              <div
                className="pics"
                key={index}
                onClick={() => openModal(index)}
              >
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  style={{ width: "100%" }}
                />
              </div>
            ))
          ) : (
            <p>No images found for this album.</p>
          )}
        </div>
      </div>

      {/* Modal for viewing images */}
      {isModalOpen && (
        <div className="modal show" style={{ display: "block" }}>
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content transparent-modal">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <div className="modal-body">
                <div className="image-container">
                  <button
                    className="prev"
                    onClick={showPrevImage}
                    disabled={currentImageIndex === 0}
                  >
                    &lt;
                  </button>
                  <img
                    src={selectedGallery.images[currentImageIndex]}
                    alt={`Gallery Image ${currentImageIndex + 1}`}
                    className="modal-image"
                  />
                  <button
                    className="next"
                    onClick={showNextImage}
                    disabled={
                      currentImageIndex === selectedGallery.images.length - 1
                    }
                  >
                    &gt;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CommonPortfolio;

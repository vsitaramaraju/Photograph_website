import React from "react";

const ImageModal = ({
  images,
  currentImageIndex,
  closeModal,
  showNextImage,
  showPrevImage
}) => {
  return (
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
                src={images[currentImageIndex]}
                alt={`Gallery Image ${currentImageIndex + 1}`}
                className="modal-image"
              />
              <button
                className="next"
                onClick={showNextImage}
                disabled={currentImageIndex === images.length - 1}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;

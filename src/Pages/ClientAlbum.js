import React, { useState } from "react";
import { Clients, CommonHead } from "../Components/Common/CommonComponent";

const ClientAlbum = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Function to open the modal with selected client's photos
  const openModal = client => {
    setSelectedClient(client);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedClient(null);
    setSelectedImageIndex(null); // Reset the selected image index
  };

  // Function to show the next image
  const showNextImage = () => {
    setSelectedImageIndex(
      prevIndex => (prevIndex + 1) % selectedClient.gallery.length
    );
  };

  // Function to show the previous image
  const showPrevImage = () => {
    setSelectedImageIndex(
      prevIndex =>
        (prevIndex - 1 + selectedClient.gallery.length) %
        selectedClient.gallery.length
    );
  };

  // Function to select a specific image when a thumbnail is clicked
  const selectImage = index => {
    setSelectedImageIndex(index);
  };

  return (
    <>
      {/* Page Header */}
      <div style={{ minHeight: "55vh" }}>
        <CommonHead title="Client Album" />
      </div>

      {/* Client Album Section */}
      <div style={{ backgroundColor: "#ffffff85" }}>
        <div className="container py-5">
          <div className="row">
            {Clients.map(client => (
              <div className="col-md-4 mb-4" key={client.id}>
                <div
                  className="client-card"
                  onClick={() => openModal(client)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="client-info-overlay">
                    <div className="client-info">
                      <h5 className="client-name">{client.name}</h5>
                      <p className="event-date">{client.eventDate}</p>
                    </div>
                  </div>
                  <img
                    src={client.profileImg}
                    alt={client.name}
                    className="img-fluid client-img"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for showing client's photos */}
      {isModalOpen && selectedClient && (
        <div className="modal show" style={{ display: "block" }}>
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-white">
                  {selectedClient.name}'s ALBUM
                </h5>
                <button type="button" className="close" onClick={closeModal}>
                  &times;
                </button>
              </div>

              <div className="modal-body" style={{ backgroundColor: "white" }}>
                {selectedImageIndex !== null && (
                  <div className="selected-image-view text-center">
                    <img
                      src={selectedClient.gallery[selectedImageIndex]}
                      alt={`${selectedClient.name} Image ${
                        selectedImageIndex + 1
                      }`}
                      className="img-fluid large-image"
                    />
                    <div className="image-nav mt-3">
                      <button
                        className="btn btn-secondary"
                        onClick={showPrevImage}
                        disabled={selectedImageIndex === 0}
                      >
                        Previous
                      </button>
                      <button
                        className="btn btn-secondary ms-2"
                        onClick={showNextImage}
                        disabled={
                          selectedImageIndex ===
                          selectedClient.gallery.length - 1
                        }
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}

                <div className="row mt-5">
                  {selectedClient.gallery.map((image, index) => (
                    <div
                      className="col-md-4 mb-3"
                      key={index}
                      onClick={() => selectImage(index)}
                    >
                      <img
                        src={image}
                        alt={`${selectedClient.name} Image ${index + 1}`}
                        className={`img-fluid modal-img ${
                          index === selectedImageIndex ? "selected-img" : ""
                        }`}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ClientAlbum;

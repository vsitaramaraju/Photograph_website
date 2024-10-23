import React, { useState, useCallback, memo } from "react";
import {
  ClientCard,
  Clients,
  CommonHead
} from "../Components/Common/CommonComponent";
import ImageModal from "../Components/Common/ImageModal";

const ClientAlbum = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isSingleImageModalOpen, setIsSingleImageModalOpen] = useState(false);

  const openModal = useCallback(client => {
    setSelectedClient(client);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedClient(null);
    setSelectedImageIndex(null);
  }, []);

  const openSingleImageModal = useCallback(index => {
    setSelectedImageIndex(index);
    setIsSingleImageModalOpen(true);
  }, []);

  const closeSingleImageModal = useCallback(() => {
    setIsSingleImageModalOpen(false);
    setSelectedImageIndex(null);
  }, []);

  const showNextImage = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        prevIndex => (prevIndex + 1) % selectedClient.gallery.length
      );
    }
  }, [selectedClient, selectedImageIndex]);

  const showPrevImage = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        prevIndex =>
          (prevIndex - 1 + selectedClient.gallery.length) %
          selectedClient.gallery.length
      );
    }
  }, [selectedClient, selectedImageIndex]);

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
              <ClientCard key={client.id} client={client} onOpen={openModal} />
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
                <div className="row mt-5">
                  {selectedClient.gallery.map((image, index) => (
                    <div
                      className="col-md-4 mb-3"
                      key={index}
                      onClick={() => openSingleImageModal(index)}
                    >
                      <img
                        src={image}
                        alt={`${selectedClient.name} Image ${index + 1}`}
                        className="img-fluid modal-img"
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

      {/* Single Image Modal */}
      {isSingleImageModalOpen &&
        selectedClient &&
        selectedImageIndex !== null && (
          <ImageModal
            images={selectedClient.gallery}
            currentImageIndex={selectedImageIndex}
            closeModal={closeSingleImageModal}
            showNextImage={showNextImage}
            showPrevImage={showPrevImage}
          />
        )}
    </>
  );
};

export default ClientAlbum;

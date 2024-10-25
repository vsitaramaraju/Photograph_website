import React, { useState, useMemo, lazy, Suspense, useEffect } from "react";
import { CommonHead } from "../Common/CommonComponent";
import { useLocation } from "react-router-dom";
import "./Gallery.css";
import { storage, ref, listAll, getDownloadURL } from "../../FireBaseConfig";

// Dynamically load the Modal component when it's opened
const ImageModal = lazy(() => import("./ImageModal"));

const CommonPortfolio = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [loadingImages, setLoadingImages] = useState(true);
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const albumType = pathSegments[pathSegments.length - 1];
  const title = albumType.charAt(0).toUpperCase() + albumType.slice(1);

  const selectedGallery = useMemo(() => {
    return galleryImages.find(item => item.type === albumType);
  }, [albumType, galleryImages]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleImagesCount, setVisibleImagesCount] = useState(10);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  // Fetch images when component loads
  useEffect(() => {
    fetchImages();
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 100); // Delay to trigger fade-in animation

    return () => clearTimeout(timer);
  }, []);

  // Fetch images from Firebase storage
  const fetchImages = async () => {
    try {
      const albumRef = ref(storage, title); // Title is now dynamic per album type
      const albumList = await listAll(albumRef);

      const urls = await Promise.all(
        albumList.items.map(item => getDownloadURL(item))
      );

      setGalleryImages([{ type: albumType, images: urls }]);
    } catch (error) {
      console.error("Error fetching images from storage:", error);
    } finally {
      setLoadingImages(false); // Update loading state once images are fetched
    }
  };

  const openModal = index => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

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

  const handleSeeMore = () => {
    setVisibleImagesCount(prevCount => prevCount + 10);
  };

  return (
    <>
      {/* Page Header */}
      <div
        style={{ minHeight: "55vh" }}
        className={`fade-in-bright ${isPageLoaded ? "visible" : ""}`}
      >
        <CommonHead title={title} />
      </div>

      {/* Gallery Section */}
      <div style={{ backgroundColor: "rgba(255, 255, 255, 0.33)" }}>
        <div className="container py-5 gallery">
          {loadingImages ? (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ minHeight: "100vh" }}
            >
              <div className="spinner-border text-white" role="status">
                <span className="sr-only"></span>
              </div>
            </div>
          ) : selectedGallery && selectedGallery.images.length > 0 ? (
            <>
              {selectedGallery.images
                .slice(0, visibleImagesCount)
                .map((image, index) => (
                  <div
                    className={`pics fade-in-bright ${
                      isPageLoaded ? "visible" : ""
                    }`}
                    key={index}
                    onClick={() => openModal(index)}
                  >
                    <img
                      src={image}
                      alt={`Gallery Image ${index + 1}`}
                      loading="lazy"
                      style={{
                        width: "100%",
                        display: loadingImages ? "none" : "block"
                      }}
                    />
                  </div>
                ))}
            </>
          ) : (
            <p>No images found for this album.</p>
          )}
        </div>

        {/* See More Button */}
        {selectedGallery &&
          visibleImagesCount < selectedGallery.images.length && (
            <div className="text-center p-3">
              <button className="btn btn-primary" onClick={handleSeeMore}>
                See More
              </button>
            </div>
          )}
      </div>

      {/* Modal for viewing images */}
      {isModalOpen && (
        <Suspense fallback={<div>Loading modal...</div>}>
          <ImageModal
            images={selectedGallery.images}
            currentImageIndex={currentImageIndex}
            closeModal={closeModal}
            showNextImage={showNextImage}
            showPrevImage={showPrevImage}
          />
        </Suspense>
      )}
    </>
  );
};

export default CommonPortfolio;

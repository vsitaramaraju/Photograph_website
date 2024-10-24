import React, { useState, useMemo, lazy, Suspense, useEffect } from "react";
import { CommonHead } from "../Common/CommonComponent";
import { useLocation } from "react-router-dom";
import { GallaryImage } from "../Common/CommonComponent";
import "./Gallery.css";

// Dynamically load the Modal component when it's opened
const ImageModal = lazy(() => import("./ImageModal"));

const CommonPortfolio = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const albumType = pathSegments[pathSegments.length - 1];
  const title = albumType.charAt(0).toUpperCase() + albumType.slice(1);

  const selectedGallery = useMemo(
    () => GallaryImage.find(item => item.type === albumType),
    [albumType]
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleImagesCount, setVisibleImagesCount] = useState(10);
  const [loadingImages, setLoadingImages] = useState(true);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 100); // Delay to trigger fade-in animation

    return () => clearTimeout(timer);
  }, []);

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

  const handleSeeMore = () => {
    setVisibleImagesCount(prevCount => prevCount + 10);
  };

  const handleImageLoad = () => {
    setLoadingImages(false);
  };

  console.log(isModalOpen);

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
      <div style={{ backgroundColor: "rgb(255 255 255 / 33%)" }}>
        <div className="container py-5 gallery">
          {selectedGallery ? (
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
                    {/* Skeleton loader */}
                    {loadingImages && <div className="skeleton-loader"></div>}
                    <img
                      src={image}
                      alt={`Gallery Image ${index + 1}`}
                      loading="lazy"
                      onLoad={handleImageLoad}
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
        {visibleImagesCount < selectedGallery.images.length && (
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

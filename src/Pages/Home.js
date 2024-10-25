import React, { useEffect, useState, useCallback } from "react";
import { useLocation, Link } from "react-router-dom";
import "../Home.css";
import video from "../assets/video.mp4";
import usePageLoadAnimation, {
  CommonHead
} from "../Components/Common/CommonComponent";
import { storage, ref, listAll, getDownloadURL } from "../FireBaseConfig";

const placeholderImage = "https://via.placeholder.com/800x400?text=Loading";
const getCarouselClass = isActive =>
  `carousel-item ${isActive ? "active" : ""}`;

const Home = () => {
  const [imgClass, setImgClass] = useState("w-100");
  const [headerImages, setHeaderImages] = useState([]);
  const [homeImage, setHomeImage] = useState([]);
  const location = useLocation();
  const isPageLoaded = usePageLoadAnimation(100);

  // Resize handler to set image class based on screen width
  const handleResize = useCallback(() => {
    setImgClass(window.innerWidth < 768 ? "w-0" : "w-100");
  }, []);

  useEffect(() => {
    handleResize();

    const resizeListener = () => {
      clearTimeout(window.resizeTimeout);
      window.resizeTimeout = setTimeout(handleResize, 200);
    };

    window.addEventListener("resize", resizeListener);

    // Fetch header and home images
    const fetchImages = async () => {
      try {
        const headerImagesRef = ref(storage, "CarouselImages");
        const homeImagesRef = ref(storage, "HomeImages");

        const [headerList, homeList] = await Promise.all([
          listAll(headerImagesRef),
          listAll(homeImagesRef)
        ]);

        const [headerUrls, homeUrls] = await Promise.all([
          Promise.all(headerList.items.map(item => getDownloadURL(item))),
          Promise.all(homeList.items.map(item => getDownloadURL(item)))
        ]);

        const imagePairs = [
          {
            img1: homeUrls[0] || placeholderImage,
            img2: homeUrls[1] || placeholderImage,
            title: "Model",
            url: "model"
          },
          {
            img1: homeUrls[2] || placeholderImage,
            img2: homeUrls[3] || placeholderImage,
            title: "Wedding",
            url: "wedding"
          },
          {
            img1: homeUrls[4] || placeholderImage,
            img2: homeUrls[5] || placeholderImage,
            title: "Baby",
            url: "baby"
          }
        ];

        setHeaderImages(headerUrls);
        setHomeImage(imagePairs);
      } catch (error) {
        console.error("Error fetching images from storage:", error);
      }
    };

    fetchImages();

    return () => window.removeEventListener("resize", resizeListener);
  }, [handleResize]);

  return (
    <main
      className={`hero-section fade-in-bright ${isPageLoaded ? "visible" : ""}`}
    >
      {/* Carousel */}
      <div className="hero-content-container">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {(headerImages.length ? headerImages : [placeholderImage]).map(
              (item, index) => (
                <div className={getCarouselClass(index === 0)} key={index}>
                  <img
                    className={`d-block ${imgClass}`}
                    src={item}
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              )
            )}
          </div>
          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          ></button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          ></button>
        </div>

        {/* Hero Content */}
        <CommonHead
          title="SAINADH KAMMA"
          miniTitle="Event's Photographer"
          location={location.pathname}
        />
      </div>

      {/* Multi card */}
      <div className="container" style={{ maxWidth: 1060, paddingTop: 30 }}>
        <div className="row row-cols-1 row-cols-md-3 g-3 pt-5 justify-content-center">
          {homeImage.map((item, index) => (
            <div className="col" key={index}>
              <Link
                className="card"
                to={`/portfolio/${item.url}`}
                style={{ textDecoration: "none" }}
              >
                <div className="img-container">
                  <img
                    src={item.img1}
                    className="card-img-top main-img"
                    alt={`img ${index + 1}`}
                  />
                  <img
                    src={item.img2}
                    className="card-img-top hover-img"
                    alt={`img ${index + 1} hover`}
                  />
                </div>
                <div>
                  <h4 className="fontStyle">{item.title}</h4>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Video Page */}
      <div className="container-fluid" style={{ paddingTop: "6rem" }}>
        <div
          className="row justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="col-12">
            <div
              className="card text-center text-black bg-custom"
              style={{ marginBottom: "3rem", border: "none" }}
            >
              <div className="card-body">
                <h1 className="card-title">HELLO THERE!</h1>
                <p className="card-text">
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me to add
                  your own content and make changes to the font. Feel free to
                  drag and drop me anywhere you like on your page. I’m a great
                  place for you to tell a story and let your users know a little
                  more about you.
                </p>
              </div>
              <div className="video-container">
                <Link to="/video">
                  <video className="video-fluid" autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

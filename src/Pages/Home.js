import React, { useEffect, useState } from "react";
import "../Home.css";
import { Link } from "react-router-dom";
import video from "../assets/video.mp4";
import { HeaderImages } from "../Components/CommonComponent";
import { Image } from "../Components/CommonComponent";

const Home = () => {
  const [imgClass, setImgClass] = useState("w-100");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setImgClass("w-0");
      } else {
        setImgClass("w-100");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <main className="hero-section">
        {/* Carousel */}
        <div className="hero-content-container">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {HeaderImages.map((item, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <img
                    className={`d-block ${imgClass}`}
                    src={item}
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              ))}
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
          <div className="hero-content text-center">
            <h1 className="display-4 fw-bold">SAINADH KAMMA</h1>
            <p className="lead">Event's Photographer</p>
          </div>
        </div>
        {/* Multi card */}
        <div className="container" style={{ maxWidth: 1060, paddingTop: 30 }}>
          <div className="row row-cols-1 row-cols-md-3 g-3 pt-5 justify-content-center">
            {Image.map((item, index) => (
              <div className="col" key={index}>
                <Link
                  className="card"
                  to="/portfolio"
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

        {/*Video page*/}
        <div className="container-fluid" style={{ paddingTop: "6rem" }}>
          <div
            className="row justify-content-center align-items-center"
            style={{ minHeight: "100vh" }}
          >
            <div className="col-12">
              {" "}
              {/* Full width for all screen sizes */}
              <div
                className="card text-center text-black bg-custom"
                style={{ marginBottom: "3rem", border: "none" }}
              >
                <div className="card-body">
                  <h1 className="card-title">HELLO THERE!</h1>
                  <p className="card-text">
                    I'm a paragraph. Click here to add your own text and edit
                    me. It’s easy. Just click “Edit Text” or double click me to
                    add your own content and make changes to the font. Feel free
                    to drag and drop me anywhere you like on your page. I’m a
                    great place for you to tell a story and let your users know
                    a little more about you.
                  </p>
                </div>
                <div className="video-container">
                  {/* Video with autoplay and responsive handling */}
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
    </>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import "../Home.css";
import { Link } from "react-router-dom";
import video from "../assets/video.mp4";
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import img4 from "../assets/image4.jpg";
import img5 from "../assets/image5.jpg";
import img6 from "../assets/image6.jpg";
import img7 from "../assets/image7.jpg";
import img8 from "../assets/image8.png";
import img9 from "../assets/image9.jpg";

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
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className={`d-block ${imgClass}`}
                  src={img1}
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className={`d-block ${imgClass}`}
                  src={img2}
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className={`d-block ${imgClass}`}
                  src={img3}
                  alt="Third slide"
                />
              </div>
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
            <div className="col">
              <Link
                className="card"
                to="/portfolio"
                style={{ textDecoration: "none" }}
              >
                <img src={img4} className="card-img-top main-img" alt="img1" />
                <img
                  src={img5}
                  className="card-img-top hover-img"
                  alt="img1 hover"
                />
                <div>
                  <h4 className="fontStyle">Model</h4>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link
                className="card"
                to="/portfolio"
                style={{ textDecoration: "none" }}
              >
                <img src={img6} className="card-img-top main-img" alt="img2" />
                <img
                  src={img7}
                  className="card-img-top hover-img"
                  alt="img1 hover"
                />
                <div>
                  <h4 className="fontStyle">Marriage</h4>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link
                className="card"
                to="/portfolio"
                style={{ textDecoration: "none" }}
              >
                <img src={img8} className="card-img-top main-img" alt="img3" />
                <img
                  src={img9}
                  className="card-img-top hover-img"
                  alt="img1 hover"
                />
                <div>
                  <h4 className="fontStyle">Baby</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
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

import React, { useEffect, useState } from "react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";

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
      </main>
    </>
  );
};

export default Home;

import React from "react";
import { CommonHead } from "../Components/Common/CommonComponent";
import { Link } from "react-router-dom";
import { PortFolioImages } from "../Components/Common/CommonComponent";

const Portfolio = () => {
  return (
    <>
      <div style={{ minHeight: "55vh" }}>
        <CommonHead title="Portfolio" />
      </div>
      <div style={{ backgroundColor: "rgb(255 255 255 / 33%)" }}>
        <div className="container py-5">
          <div className="row">
            {PortFolioImages.map((item, index) => (
              <div className="col-md-12 mb-4" key={index}>
                <Link to={item.url} className="album-link">
                  <div className="album-item-frame">
                    <div className="album-images">
                      <img
                        src={item.img1}
                        className="composite-image"
                        alt={`${item.title} Album`}
                      />
                      <img
                        src={item.img2}
                        className="composite-image"
                        alt={`${item.title} Album`}
                      />
                      <img
                        src={item.img3}
                        className="composite-image"
                        alt={`${item.title} Album`}
                      />
                    </div>
                    {/* Title overlay */}
                    <div className="album-title-overlay">
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;

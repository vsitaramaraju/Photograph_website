import React from "react";
import { AlbumItem, CommonHead } from "../Components/Common/CommonComponent";
import { PortFolioImages } from "../Components/Common/CommonComponent";

const Portfolio = () => {
  return (
    <>
      <div style={{ minHeight: "55vh" }}>
        <CommonHead title="Portfolio" />
      </div>
      <div style={{ backgroundColor: "rgba(255, 255, 255, 0.33)" }}>
        <div className="container py-5">
          <div className="row">
            {PortFolioImages.map((item, index) => (
              <AlbumItem item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;

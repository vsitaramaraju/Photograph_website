import React from "react";
import usePageLoadAnimation, {
  AlbumItem,
  CommonHead
} from "../Components/Common/CommonComponent";
import { PortFolioImages } from "../Components/Common/CommonComponent";

const Portfolio = () => {
  const isPageLoaded = usePageLoadAnimation(100);
  return (
    <>
      <div
        style={{ minHeight: "55vh" }}
        className={`fade-in-bright ${isPageLoaded ? "visible" : ""}`}
      >
        <CommonHead title="Portfolio" />
      </div>
      <div
        style={{ backgroundColor: "rgba(255, 255, 255, 0.33)" }}
        className={`fade-in-bright ${isPageLoaded ? "visible" : ""}`}
      >
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

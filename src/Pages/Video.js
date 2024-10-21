import React from "react";
import { CommonHead, videos } from "../Components/Common/CommonComponent";

const Video = () => {
  return (
    <>
      <div style={{ minHeight: "55vh" }}>
        <CommonHead title="Video" />
      </div>

      <div style={{ backgroundColor: "rgb(255 255 255 / 33%)" }}>
        <div className="container py-5">
          <div className="row justify-content-center">
            {videos.map(video => (
              <div className="col-md-6 col-lg-4 mb-4 video-card" key={video.id}>
                <div className="video-wrapper shadow-lg">
                  <iframe
                    className="video-iframe"
                    src={video.src}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  {/* <h5 className="mt-3 text-center video-title">
                    {video.title}
                  </h5> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;

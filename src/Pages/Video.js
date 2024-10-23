import React from "react";
import {
  CommonHead,
  VideoItem,
  videos
} from "../Components/Common/CommonComponent";

const Video = () => {
  return (
    <>
      <div style={{ minHeight: "55vh" }}>
        <CommonHead title="Video" />
      </div>

      <div style={{ backgroundColor: "rgba(255, 255, 255, 0.33)" }}>
        <div className="container py-5">
          <div className="row justify-content-center">
            {videos.map(video => (
              <VideoItem video={video} key={video.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;

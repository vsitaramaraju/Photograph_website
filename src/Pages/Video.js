import React from "react";
import usePageLoadAnimation, {
  CommonHead,
  VideoItem,
  videos
} from "../Components/Common/CommonComponent";

const Video = () => {
  const isPageLoaded = usePageLoadAnimation(100); // Use the hook with a 100ms delay

  return (
    <>
      {/* Page Header */}
      <div
        style={{ minHeight: "55vh" }}
        className={`fade-in-bright ${isPageLoaded ? "visible" : ""}`}
      >
        <CommonHead title="Video" />
      </div>

      {/* Video Gallery Section */}
      <div
        style={{ backgroundColor: "rgba(255, 255, 255, 0.33)" }}
        className={`fade-in-bright ${isPageLoaded ? "visible" : ""}`}
      >
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

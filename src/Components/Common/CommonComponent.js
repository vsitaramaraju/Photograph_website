import { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";

/*Header Carousel Images*/
export const HeaderImages = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg"
];

/*Home 3 images*/
export const Image = [
  {
    img1: "/images/image4.jpg",
    img2: "/images/image5.jpg",
    title: "Model",
    url: "model"
  },
  {
    img1: "/images/image6.jpg",
    img2: "/images/image7.jpg",
    title: "Wedding",
    url: "wedding"
  },
  {
    img1: "/images/image8.png",
    img2: "/images/image9.jpg",
    title: "Baby",
    url: "baby"
  }
];

/*portfolio image*/
export const PortFolioImages = [
  {
    img1: "/images/image4.jpg",
    img2: "/images/image5.jpg",
    img3: "/images/image14.jpg",
    title: "Model",
    url: "model"
  },
  {
    img1: "/images/image6.jpg",
    img2: "/images/image7.jpg",
    img3: "/images/image16.jpg",
    title: "Wedding",
    url: "wedding"
  },
  {
    img1: "/images/image8.png",
    img2: "/images/image9.jpg",
    img3: "/images/image19.jpg",
    title: "Baby",
    url: "baby"
  }
];

export const Path = ["model", "wedding", "baby"];

export const AlbumItem = memo(({ item }) => (
  <div className="col-md-12 mb-4">
    <Link to={item.url} className="album-link">
      <div className="album-item-frame">
        <div className="album-images">
          <img
            src={item.img1}
            className="composite-image"
            alt={`${item.title} Album`}
            loading="lazy" // Lazy loading
          />
          <img
            src={item.img2}
            className="composite-image"
            alt={`${item.title} Album`}
            loading="lazy" // Lazy loading
          />
          <img
            src={item.img3}
            className="composite-image"
            alt={`${item.title} Album`}
            loading="lazy" // Lazy loading
          />
        </div>
        {/* Title overlay */}
        <div className="album-title-overlay">
          <h3>{item.title}</h3>
        </div>
      </div>
    </Link>
  </div>
));

/*Nav links*/
export const NavLinks = [
  { title: "Home", link: "/" },
  { title: "Portfolio", link: "/portfolio" },
  { title: "Video", link: "/video" },
  { title: " Client Album", link: "/client-album" },
  { title: " Bio", link: "/bio" }
];

/*Common Header*/
export const CommonHead = ({ title, miniTitle, location }) => {
  return (
    <>
      <div
        className={`${
          location === "/" ? "hero-content" : "hero-content-new"
        } text-center`}
      >
        <h1 className="display-4 fw-bold">{title}</h1>
        <p className="lead">{miniTitle}</p>
      </div>
    </>
  );
};

/*Gallary*/

export const GallaryImage = [
  {
    type: "model",
    images: [
      "/images/image4.jpg",
      "/images/image5.jpg",
      "/images/image10.jpg",
      "/images/image11.jpg",
      "/images/image12.jpg",
      "/images/image14.jpg",
      "/images/image25.jpg",
      "/images/image26.jpg",
      "/images/image27.jpg",
      "/images/image34.png",
      "/images/image39.jpg"
    ]
  },
  {
    type: "wedding",
    images: [
      "/images/image6.jpg",
      "/images/image7.jpg",
      "/images/image13.jpg",
      "/images/image15.jpg",
      "/images/image16.jpg",
      "/images/image17.png",
      "/images/image18.jpg",
      "/images/image28.jpg",
      "/images/image29.jpg",
      "/images/image30.jpg",
      "/images/image31.jpg",
      "/images/image32.jpg",
      "/images/image33.jpg",
      "/images/image35.png"
    ]
  },
  {
    type: "baby",
    images: [
      "/images/image8.png",
      "/images/image9.jpg",
      "/images/image19.jpg",
      "/images/image20.jpg",
      "/images/image21.jpg",
      "/images/image22.jpg",
      "/images/image23.png",
      "/images/image24.jpg",
      "/images/image36.jpg",
      "/images/image37.jpg",
      "/images/image38.jpg",
      "/images/image40.jpg"
    ]
  }
];

/*Videos*/

export const videos = [
  {
    id: 1,
    src: "/videos/video1.mp4",
    title: "Video 1"
  },
  { id: 2, src: "/videos/video2.mp4", title: "Video 2" },
  { id: 3, src: "/videos/video3.mp4", title: "Video 3" },
  { id: 4, src: "/videos/video4.mp4", title: "Video 4" }
];

export const VideoItem = memo(({ video }) => (
  <div className="col-md-6 col-lg-4 mb-4 video-card">
    <div className="video-wrapper shadow-lg">
      <iframe
        className="video-iframe"
        src={video.src}
        title={video.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  </div>
));
/*Client ablum*/

export const Clients = [
  {
    id: 1,
    name: "RAJ WEDS SHEELA",
    eventDate: "18/14/2023",
    profileImg: "/images/image6.jpg",
    gallery: [
      "/images/image11.jpg",
      "/images/image13.jpg",
      "/images/image15.jpg",
      "/images/image16.jpg"
    ]
  },
  {
    id: 2,
    name: "VIJAY WEDS LAKSHMI",
    eventDate: "18/14/2023",
    profileImg: "/images/image32.jpg",
    gallery: [
      "/images/image22.jpg",
      "/images/image23.png",
      "/images/image24.jpg",
      "/images/image36.jpg"
    ]
  },
  {
    id: 3,
    name: "ROHITH",
    eventDate: "18/14/2023",
    profileImg: "/images/image24.jpg",
    gallery: [
      "/images/image28.jpg",
      "/images/image29.jpg",
      "/images/image30.jpg",
      "/images/image31.jpg",
      "/images/image32.jpg",
      "/images/image33.jpg"
    ]
  }
];

/*Bio page*/

export const bioData = {
  owner: {
    name: "SAINADH KAMMA",
    description: `
      Brief description about the owner and their work. You can elaborate on the owner's background, 
      expertise, and the purpose of their work. Add any professional highlights, skills, and other 
      relevant information that you'd like to showcase, Brief description about the owner and their work. You can elaborate on the owner's background, 
      expertise, and the purpose of their work. Add any professional highlights, skills, and other 
      relevant information that you'd like to showcase
    `
  },
  workDetails: `
    Some additional information or highlights of your work can be added here. You can elaborate 
    further on your projects, achievements, or services offered. Include any important highlights 
    that showcase your expertise and the quality of your work, Some additional information or highlights of your work can be added here. You can elaborate 
    further on your projects, achievements, or services offered. Include any important highlights 
    that showcase your expertise and the quality of your work.
  `,
  contact: {
    email: "sainadhkamma@gmail.com",
    phone: "+91-9951799508",
    address: `Love Tales Studio, Vishnu Virdhana,
              32-2-19/A12, Vishnu Vardhana Rao St, Labbipet,
              Vijayawada, Andhra Pradesh 520010`
  }
};

/*Client Card*/

export const ClientCard = memo(({ client, onOpen }) => (
  <div className="col-md-4 mb-4">
    <div
      className="client-card"
      onClick={() => onOpen(client)}
      style={{ cursor: "pointer" }}
    >
      <div className="client-info-overlay">
        <div className="client-info">
          <h5 className="client-name">{client.name}</h5>
          <p className="event-date">{client.eventDate}</p>
        </div>
      </div>
      <img
        src={client.profileImg}
        alt={client.name}
        className="img-fluid client-img"
      />
    </div>
  </div>
));

/*Animation page load*/

export const usePageLoadAnimation = (delay = 100) => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isPageLoaded;
};

export default usePageLoadAnimation;

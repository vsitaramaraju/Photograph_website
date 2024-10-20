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
    title: "Marriage",
    url: "marriage"
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
    title: "Marriage",
    url: "marriage"
  },
  {
    img1: "/images/image8.png",
    img2: "/images/image9.jpg",
    img3: "/images/image19.jpg",
    title: "Baby",
    url: "baby"
  }
];

export const Path = ["model", "marriage", "baby"];

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
      "/images/image14.jpg"
    ]
  },
  {
    type: "marriage",
    images: [
      "/images/image6.jpg",
      "/images/image7.jpg",
      "/images/image13.jpg",
      "/images/image15.jpg",
      "/images/image16.jpg",
      "/images/image17.png",
      "/images/image18.jpg"
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
      "/images/image24.jpg"
    ]
  }
];

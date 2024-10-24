import React, { useMemo } from "react";
import { useInView } from "react-intersection-observer";
import usePageLoadAnimation, {
  bioData,
  CommonHead
} from "../Components/Common/CommonComponent";
import ownerImage from "../assets/bio.jpg";
import ContactMe from "../Components/ContactMe";

const Bio = () => {
  const isPageLoaded = usePageLoadAnimation(100);

  const { ref: workRef, inView: workInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const { ref: contactRef, inView: contactInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const ownerDetails = useMemo(
    () => (
      <div className="row align-items-center mb-5">
        <div className="col-md-4 text-center animate-left">
          <img
            src={ownerImage}
            alt="Owner"
            className="img-fluid"
            style={{ maxWidth: "250px" }}
          />
        </div>
        <div className="col-md-8 bio-text animate-right">
          <h2>{bioData.owner.name}</h2>
          <p className="bio">{bioData.owner.description}</p>
        </div>
      </div>
    ),
    []
  );

  const workDetails = useMemo(
    () => (
      <div
        className={`row align-items-center mb-5 fade-in-section ${
          workInView ? "visible" : ""
        }`}
        ref={workRef}
      >
        <div className="col-12 text-start bio-text">
          <h2>WORK DETAILS</h2>
          <p className="bio">{bioData.workDetails}</p>
        </div>
      </div>
    ),
    [workInView]
  );

  const contactSection = useMemo(
    () => (
      <div
        className={`row align-items-center mb-5 fade-in-section ${
          contactInView ? "visible" : ""
        }`}
        ref={contactRef}
      >
        <div className="col-md-4 text-start">
          <h2 className="contact-me">Contact Me</h2>
          <ul className="list-unstyled contact-details">
            <li>
              <strong>Email:</strong> {bioData.contact.email}
            </li>
            <li>
              <strong>Phone:</strong> {bioData.contact.phone}
            </li>
            <li>
              <strong>Address:</strong> {bioData.contact.address}
            </li>
          </ul>
        </div>
        <div className="col-md-8">
          <ContactMe />
        </div>
      </div>
    ),
    [contactInView]
  );

  return (
    <>
      <div
        style={{ minHeight: "55vh" }}
        className={`fade-in-bright ${isPageLoaded ? "visible" : ""}`}
      >
        <CommonHead title="Bio" />
      </div>

      <div style={{ backgroundColor: "#ffffff85", padding: "50px 0" }}>
        <div className="container">
          {ownerDetails}
          <hr className="my-4" />
          {workDetails}
          <hr className="my-4" />
          {contactSection}
        </div>
      </div>
    </>
  );
};

export default Bio;

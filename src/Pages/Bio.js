import React from "react";
import { bioData, CommonHead } from "../Components/Common/CommonComponent";
import ownerImage from "../assets/bio.jpg";
import ContactMe from "../Components/ContactMe";

// Dynamic data for the Bio component

const Bio = () => {
  return (
    <>
      <div style={{ minHeight: "55vh" }}>
        <CommonHead title="Bio" />
      </div>

      <div style={{ backgroundColor: "#ffffff85", padding: "50px 0" }}>
        <div className="container">
          {/* Owner Image and Description */}
          <div className="row align-items-center mb-5">
            <div className="col-md-4 text-center">
              <img
                src={ownerImage}
                alt="Owner"
                className="img-fluid"
                style={{ maxWidth: "250px" }}
              />
            </div>
            <div className="col-md-8 bio-text">
              <h2>{bioData.owner.name}</h2>
              <p className="bio">{bioData.owner.description}</p>
            </div>
          </div>

          {/* Work Details */}
          <div className="row align-items-center mb-5">
            <div className="col-12 text-start bio-text">
              <h2>WORK DETAILS</h2>
              <p className="bio">{bioData.workDetails}</p>
            </div>
          </div>

          <hr className="my-4" />

          {/* Contact Section - Details and Form Side by Side */}
          <div className="row align-items-center mb-5">
            <div className="col-md-4 text-start">
              <h2 className="bio-text">Contact Me</h2>
              <ul className="list-unstyled">
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
        </div>
      </div>
    </>
  );
};

export default Bio;

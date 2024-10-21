import React from "react";
import { CommonHead } from "../Components/Common/CommonComponent";
import ownerImage from "../assets/bio.jpg";
import ContactMe from "../Components/ContactMe";

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
              <h2>SAINADH KAMMA</h2>
              <p className="bio">
                Brief description about the owner and their work. You can
                elaborate on the owner's background, expertise, and the purpose
                of their work. Add any professional highlights, skills, and
                other relevant information that you'd like to showcase. Brief
                description about the owner and their work. You can elaborate on
                the owner's background, expertise, and the purpose of their
                work. Add any professional highlights, skills, and other
                relevant information that you'd like to showcase. Brief
                description about the owner and their work. You can elaborate on
                the owner's background, expertise, and the purpose of their
                work. Add any professional highlights, skills, and other
                relevant information that you'd like to showcase.
              </p>
            </div>
          </div>

          {/* Work Details */}
          <div className="row align-items-center mb-5">
            <div className="col-12 text-start bio-text">
              <h2>WORK DETAILS</h2>
              <p className="bio">
                Some additional information or highlights of your work can be
                added here. You can elaborate further on your projects,
                achievements, or services offered. Include any important
                highlights that showcase your expertise and the quality of your
                work. Some additional information or highlights of your work can
                be added here. You can elaborate further on your projects,
                achievements, or services offered. Include any important
                highlights that showcase your expertise and the quality of your
                work.
              </p>
            </div>
          </div>
          <hr className="my-4" />
          {/* Contact Section - Details and Form Side by Side */}
          <div className="row align-items-center mb-5">
            <div className="col-md-4 text-start ">
              <h3 className="bio-text">Contact Me</h3>
              <ul className="list-unstyled">
                <li>
                  <strong>Email:</strong> sainadhkamma@gmail.com
                </li>
                <li>
                  <strong>Phone:</strong> +91-9951799508
                </li>
                <li>
                  <strong>Address:</strong> Love Tales Studio, Vishnu Virdhana,
                  32-2-19/A12, Vishnu Vardhana Rao St, Labbipet, Vijayawada,
                  Andhra Pradesh 520010
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

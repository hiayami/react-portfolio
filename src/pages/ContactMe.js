import React from "react";
import resume from '../Ayami_Higashi_Resume.pdf'

const ContactMe = () => {
  return (
    <div className="container pt-3 mt-5">
      {/* <!--Contact information--> */}
      <div className="mt-4" id="Contact_Me">
        <h2>Contact Me</h2>
        <ul
          className="nav nav-tabs mt-3 o-auto flex-nowrap"
          id="myTab"
          role="tablist"
          style={{ overflowY: "hidden" }}
        >
          <li className="nav-item">
            <a
              className="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#contact"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Contact Info
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div
            className="tab-pane active"
            id="contact"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <p>
              Phone: (206) 486-2407
              <br />
              Email: ahigashidev@gmail.com
            </p>
          </div>
        </div>



        <ul
          className="nav nav-tabs mt-3 o-auto flex-nowrap"
          id="resume-tab"
          role="tablist"
          style={{ overflowY: "hidden" }}
        >
          <li className="nav-item">
            <a
              className="nav-link active"
              data-toggle="button"
              role="button"
              aria-selected="true"
            >
              Resume
            </a>
          </li>
        </ul>
        <div className="tab-content">
        <div
            className="tab-pane active"
            id="resume"
            role="tabpanel"
            aria-labelledby="messages-tab"
          >
            <p>Click to view my resume</p>
            <a
              href={resume}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm mr-2 btn-primary border-dark"
              type="button"
            >
              <span className="btn-text">My resume</span>
            </a>
          </div>
        </div>



        <ul
          className="nav nav-tabs mt-3 o-auto flex-nowrap"
          id="links-tab"
          role="tablist"
          style={{ overflowY: "hidden" }}
        >
          <li className="nav-item">
            <a
              className="nav-link active"
              data-toggle="button"
              role="button"
              aria-selected="true"
            >
              Links
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane active" id="link" role="tabpanel">
            <p>Links to personal Linked In and GitHub accounts</p>
            <a
              href="https://www.linkedin.com/in/ayami-higashi-6a53b8230/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm mr-2 btn-primary border-dark"
              type="button"
            >
              <span className="btn-text">Linked In</span>
            </a>
            <a
              href="https://github.com/hiayami"
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm mr-2 btn-primary border-dark"
              type="button"
            >
              <span className="btn-text">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

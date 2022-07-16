import React from 'react'

const ContactMe = () => {
    return (
        <div className="container">

        {/* <!--Contact information--> */}
        <div className="mt-4" id="Contact_Me">
          <h2>Contact Me</h2>
          <ul
            className="nav nav-tabs mt-3 o-auto flex-nowrap"
            id="myTab"
            role="tablist"
            style={{ overflowY: 'hidden' }}
          >
            <li className="nav-item">
              <a
                className="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#link"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Links
              </a>
            </li>
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
            <li className="nav-item">
              <a
                className="nav-link"
                id="messages-tab"
                data-toggle="tab"
                href="#resume"
                role="tab"
                aria-controls="messages"
                aria-selected="false"
              >
                Resume
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div
              className="tab-pane active"
              id="link"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
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
            <div
              className="tab-pane"
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
            <div
              className="tab-pane"
              id="resume"
              role="tabpanel"
              aria-labelledby="messages-tab"
            >
              <p>Click to view my resume</p>
              <a
                href="assets/Ayami_Higashi_Resume.pdf"
                rel="noreferrer"
                target="_blank"
                className="btn btn-sm mr-2 btn-primary border-dark"
                type="button"
              >
                <span className="btn-text">My resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ContactMe

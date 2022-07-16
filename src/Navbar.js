import React from 'react'

const Navbar = () => {
    return (
        <div className="fixed-top">
        <nav className="navbar navbar-expand-lg navbar-dark justify-content-between flex-nowrap text-nowrap border-bottom-0">
          <h4>Ayami Higashi</h4>
          <ul className="navbar-nav navbar-nav-hover flex-row align-items-center d-none d-md-flex">
            <li className="nav-item">
              <a href="#About_Me" className="nav-link" role="button">
                <span className="nav-link-inner-text">👩🏻‍⚕️ About Me</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#Projects_and_Work" className="nav-link" role="button">
                <span className="nav-link-inner-text">
                  📕 Projects and Work
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#Contact_Me" className="nav-link" role="button">
                <span className="nav-link-inner-text">✉️ Contact Me</span>
              </a>
            </li>
          </ul>
          <div className="time text-center">
            <span id="time" className="time text-uppercase">
              0:00 PM
            </span>
          </div>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-dark d-md-none flex-nowrap text-nowrap">
          <ul className="navbar-nav navbar-nav-hover flex-row align-items-center o-auto">
            <li className="nav-item">
              <a href="#About_Me" className="nav-link" role="button">
                <span className="nav-link-inner-text">👩🏻‍⚕️ About Me</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#Projects_and_Work" className="nav-link" role="button">
                <span className="nav-link-inner-text">
                  📕 Projects and Work
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#Contact_Me" className="nav-link" role="button">
                <span className="nav-link-inner-text">✉️ Contact Me</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    )
}

export default Navbar

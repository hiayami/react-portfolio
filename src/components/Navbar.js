import React from "react";

setInterval(() => {
  const date = new Date()
  document.querySelector('#time').innerText = date.toLocaleString('en-US', {
      timeZone: "America/Los_Angeles",
      hour: "numeric",
      minute: "2-digit"
  })
}, 1000) 

const Navbar = (props) => {
  return (
    <div className="fixed-top">
      <nav className="navbar navbar-expand-lg navbar-dark justify-content-between flex-nowrap text-nowrap border-bottom-0">
        <h4>Ayami Higashi</h4>
        <ul className="navbar-nav navbar-nav-hover flex-row align-items-center d-none d-md-flex">
          <li className="nav-item">
            <a
              onClick={props.onClick}
              className="nav-link"
              role="button"
              value="AboutMe"
            >
              <span className="nav-link-inner-text">👩🏻‍⚕️ About Me</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              value="ProjectsWork"
              className="nav-link"
              role="button"
              onClick={props.onClick}
            >
              <span className="nav-link-inner-text">📕 Projects and Work</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              value="ContactMe"
              className="nav-link"
              role="button"
              onClick={props.onClick}
            >
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
            <a
              value="AboutMe"
              className="nav-link"
              role="button"
              onClick={props.onClick}
            >
              <span className="nav-link-inner-text">👩🏻‍⚕️ About Me</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              value="ProjectsWork"
              className="nav-link"
              role="button"
              onClick={props.onClick}
            >
              <span className="nav-link-inner-text">📕 Projects and Work</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              value="ContactMe"
              className="nav-link"
              role="button"
              onClick={props.onClick}
            >
              <span className="nav-link-inner-text">✉️ Contact Me</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

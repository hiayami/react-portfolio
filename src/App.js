import React from "react";
import "./styles/pixel.css";
import "./styles/App.css";

import Navbar from './Navbar'

import AboutMe from './pages/AboutMe'
import ProjectsWork from './pages/ProjectsWork'
import ContactMe from './pages/ContactMe'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <AboutMe />
      <ProjectsWork />
      <ContactMe />
      <footer className="mt-4">
        <p className="text-center">Updated June 2022</p>
      </footer>
    </React.Fragment>
  );
}

export default App;

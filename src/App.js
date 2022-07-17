import React from "react";
import "./styles/pixel.css";
import "./styles/App.css";

import Navbar from './components/Navbar'

import AboutMe from './pages/AboutMe'
import ProjectsWork from './pages/ProjectsWork'
import ContactMe from './pages/ContactMe'

const getPageFromHash = () => {
  const hashes = window.location.hash.split('/')
  return hashes.length === 2
    ? hashes[1]
    : null
}

function App() {
  const [page, setPage] = React.useState(getPageFromHash())
  window.onhashchange = () => setPage(getPageFromHash())

  return (
    <React.Fragment>
      <Navbar
        onClick={e => {
          const page = e.target.getAttribute('value')
          window.location.hash = `#/${page}`
          setPage(page)
        }}
      />
      {page === 'ProjectsWork' ? (
        <ProjectsWork />
      ) : page === 'ContactMe' ? (
        <ContactMe />
      ) : (
        <AboutMe />
      )}
      <footer className="mt-4">
        <p className="text-center">Updated July 2022</p>
      </footer>
    </React.Fragment>
  );
}

export default App;

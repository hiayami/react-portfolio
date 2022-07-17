import React from 'react'
import ShootingStarPic from "../images/StarParty.png";
import GreenCarPic from "../images/CarAuction.png";
import CloudsPic from "../images/techBlog.png";
import NotasPic from "../images/noteTaker.png";

const ProjectsWork = () => {
    return (
        <div id="Projects_and_Work" className="container pt-3 mt-5">
        <h2 className="mt-4">Projects and Work</h2>
        <div className="row">
          <div className="col-md-6 mt-3">
            <div className="card card-secondary">
              <div className="card-header text-center">
                <span className="icon icon-xs w95-window-empty"></span>
                "StarParty"
              </div>
              <div className="card-body">
                <img
                  alt="star party"
                  className="mb-1"
                  style={{ height: 150, display: 'block', margin: '0 auto' }}
                  src={ShootingStarPic}
                />
                <p className="card-text">
                  A collaborative project that pulls weather and visible planet
                  API based off of geological location
                </p>
                <div className="d-flex mt-3">
                  <a
                    href="https://millersg47.github.io/StarParty/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm mr-2 btn-primary border-dark"
                    type="button"
                  >
                    <span className="btn-text">Visit Site</span>
                  </a>
                  <a
                    href="https://github.com/millersg47/StarParty.git"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-primary"
                    type="button"
                  >
                    <span className="btn-text">Repo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-3">
            <div className="card card-secondary">
              <div className="card-header text-center">
                <span className="icon icon-xs w95-window-empty"></span>
                "Exotic Car Auctions"
              </div>
              <div className="card-body">
                <img
                  alt="exotic car auction"
                  className="mb-1"
                  style={{ height: 150, display: 'block', margin: '0 auto' }}
                  src={GreenCarPic}
                />
                <p className="card-text">
                  A collaborative project that presents a concept of an online
                  car auction using MySQL, sequelize, Express.js, and
                  Handlebars.js
                </p>
                <div className="d-flex mt-3">
                  <a
                    href="https://exotic-car-auction-abln.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm mr-2 btn-primary border-dark"
                    type="button"
                  >
                    <span className="btn-text">Visit Site</span>
                  </a>
                  <a
                    href="https://github.com/batemanz/exotic-car-auctions.git"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-primary"
                    type="button"
                  >
                    <span className="btn-text">Repo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mt-3">
            <div className="card card-secondary">
              <div className="card-header text-center">
                <span className="icon icon-xs w95-window-empty"></span>
                "Tech Blog"
              </div>
              <div className="card-body">
                <img
                  alt="tech blog"
                  className="mb-1"
                  style={{ height: 150, display: 'block', margin: '0 auto' }}
                  src={CloudsPic}
                />
                <p className="card-text">
                  A CMS-style blog site where users can publish their posts and
                  comment on other posts as well. Deployed to Heroku using the
                  MVC paradigm in its structure; Handlebars.js as the templating
                  language, sequelizeas the ORM, and express-session npm package
                  for authentication.
                </p>
                <div className="d-flex mt-3">
                  <a
                    href="https://tech-blog-hiayami.herokuapp.com/"
                    rel="noreferrer"
                    target="_blank"
                    className="btn btn-sm mr-2 btn-primary border-dark"
                    type="button"
                  >
                    <span className="btn-text">Visit Site</span>
                  </a>
                  <a
                    href="https://github.com/hiayami/tech-blog.git"
                    rel="noreferrer"
                    target="_blank"
                    className="btn btn-sm btn-primary"
                    type="button"
                  >
                    <span className="btn-text">Repo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-3">
            <div className="card card-secondary">
              <div className="card-header text-center">
                <span className="icon icon-xs w95-window-empty"></span>
                "Note Taker"
              </div>
              <div className="card-body">
                <img
                  alt="note taker"
                  className="mb-1"
                  style={{ height: 150, display: 'block', margin: '0 auto' }}
                  src={NotasPic}
                />
                <p className="card-text">
                  An application that can be used to create, save or delete
                  notes. Uses an Express.js back end and saves and retrieves
                  note data from a JSON file.
                </p>
                <div className="d-flex mt-3">
                  <a
                    href="https://protected-fortress-07258.herokuapp.com/"
                    rel="noreferrer"
                    target="_blank"
                    className="btn btn-sm mr-2 btn-primary border-dark"
                    type="button"
                  >
                    <span className="btn-text">Visit Site</span>
                  </a>
                  <a
                    href="https://github.com/hiayami/note-taker.git"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-primary"
                    type="button"
                  >
                    <span className="btn-text">Repo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ProjectsWork

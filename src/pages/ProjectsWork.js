import React from 'react'
import ShootingStarPic from "../images/StarParty.png";
import GreenCarPic from "../images/CarAuction.png";
import CloudsPic from "../images/techBlog.png";
import NotasPic from "../images/noteTaker.png";
import ProjectCard from "../components/ProjectCard"

const ProjectsWork = () => {
    return (
        <div id="Projects_and_Work" className="container pt-3 mt-5">
        <h2 className="mt-4">Projects and Work</h2>
        <div className="row">
          <div className="col-md-6 mt-3">
            <ProjectCard
                title="StarParty"
                imgAlt="star party"
                imgSrc={ShootingStarPic}
                description="A collaborative project that pulls weather and visible planet API based off of geological location"
                siteHref="https://millersg47.github.io/StarParty/"
                githubHref="https://github.com/millersg47/StarParty.git"
            />
          </div>
          <div className="col-md-6 mt-3">
            <ProjectCard
                title="Exotic Car Auctions"
                imgAlt="exotic car auction"
                imgSrc={GreenCarPic}
                description="A collaborative project that presents a concept of an online car auction using MySQL, sequelize, Express.js, and Handlebars.js"
                siteHref="https://exotic-car-auction-abln.herokuapp.com/"
                githubHref="https://github.com/batemanz/exotic-car-auctions.git"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mt-3">
          <ProjectCard
                title="Tech Blog"
                imgAlt="tech blog"
                imgSrc={CloudsPic}
                description="A CMS-style blog site where users can publish their posts and comment on other posts as well. Deployed to Heroku using the MVC paradigm in its structure; Handlebars.js as the templating language, sequelizeas the ORM, and express-session npm package for authentication."
                siteHref="https://tech-blog-hiayami.herokuapp.com/"
                githubHref="https://github.com/hiayami/tech-blog.git"
            />
          </div>
          <div className="col-md-6 mt-3">
          <ProjectCard
                title="Note Taker"
                imgAlt="note taker"
                imgSrc={NotasPic}
                description="An application that can be used to create, save or delete notes. Uses an Express.js back end and saves and retrieves note data from a JSON file."
                siteHref="https://protected-fortress-07258.herokuapp.com/"
                githubHref="https://github.com/hiayami/note-taker.git"
            />
          </div>
        </div>
      </div>
    )
}

export default ProjectsWork

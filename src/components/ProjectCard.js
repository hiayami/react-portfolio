import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="card card-secondary">
      <div className="card-header text-center">
        <span className="icon icon-xs w95-window-empty"></span>
        {`"${props.title}"`}
      </div>
      <div className="card-body">
        <img
          alt={props.imgAlt}
          className="mb-1"
          style={{ height: 150, display: "block", margin: "0 auto" }}
          src={props.imgSrc}
        />
        <p className="card-text">
            {props.description}
        </p>
        <div className="d-flex mt-3">
          <a
            href={props.siteHref}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm mr-2 btn-primary border-dark"
            type="button"
          >
            <span className="btn-text">Visit Site</span>
          </a>
          <a
            href={props.githubHref}
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
  );
};

export default ProjectCard;

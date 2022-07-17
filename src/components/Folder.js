import React from "react";

const Folder = (props) => {
  return (
    <React.Fragment>
      <ul
        className="nav nav-tabs mt-3 o-auto flex-nowrap"
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
            {props.tabName}
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div
          className="tab-pane active"
          role="tabpanel"
        >
          {props.children}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Folder;

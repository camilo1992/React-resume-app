import React from "react";
import classes from "./ProjectCard.module.css";

function ProjectCard(props) {
  return (
    <div className={classes.projectContainer}>
      <div className={classes.intro}>
        <h3>{props.title}</h3>
        <div
          className={classes.projectImage}
          style={{ backgroundImage: `url(${props.src})` }}
          onClick={props.onClick}
        ></div>
      </div>
      <div className={classes.projectDescription}>{props.description}</div>
    </div>
  );
}

export default ProjectCard;

import React from "react";
import { Link } from "react-scroll/modules";
import classes from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <div id="navBar ">
      <ul className={classes.NavBar}>
        <Link className={classes.NavBarItem} to="intro" smooth={true}>
          <FontAwesomeIcon icon={faAddressCard} color="blue" />
          home
        </Link>
        <Link className={classes.NavBarItem} to="projects" smooth={true}>
          Projects
        </Link>
        <Link className={classes.NavBarItem} to="hobbies" smooth={true}>
          hobbies
        </Link>
        <Link className={classes.NavBarItem} to="social" smooth={true}>
          Social
        </Link>
      </ul>
    </div>
  );
}

export default NavBar;

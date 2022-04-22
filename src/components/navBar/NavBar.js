import React from "react";
import { Link } from "react-scroll/modules";
import classes from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <div id="navBar ">
      <ul className={classes.NavBar}>
        <Link
          style={{ backgroundColor: "rgb(219, 200, 174)" }}
          className={classes.NavBarItem}
          to="intro"
          smooth={true}
        ></Link>
        <Link
          className={classes.NavBarItem}
          to="projects"
          style={{ backgroundColor: "white" }}
          smooth={true}
        ></Link>
        <Link
          className={classes.NavBarItem}
          to="hobbies"
          style={{ backgroundColor: "black" }}
          smooth={true}
        ></Link>
        <Link
          className={classes.NavBarItem}
          to="social"
          style={{ backgroundColor: "rgb(219, 200, 174)" }}
          smooth={true}
        ></Link>
      </ul>
    </div>
  );
}

export default NavBar;

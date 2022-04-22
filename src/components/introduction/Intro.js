import React from "react";
import classes from "./Intro.module.css";
import coffee from "../../assets/coffee.jpg";
import tiny from "../../assets/tiny.jpg";
import working from "../../assets/working.jpg";
function Intro() {
  return (
    <div id="intro">
      <div className={classes.intro}>
        <div
          className={classes.image}
          style={{ backgroundImage: `url(${coffee})` }}
        ></div>
        <div className={classes.content}>
          <p>
            I'm a self thaught programmer. Passionate about music, coding and
            learning. I'm constantly looking for new growing knowledge. Whether
            professional or personal.
          </p>
        </div>
      </div>
      <div className={classes.intro}>
        <div
          className={classes.image}
          style={{ backgroundImage: `url(${tiny})` }}
        ></div>
        <div className={classes.content}>
          <p>
            After finish engineering. I moved to Australia for over 3 and half
            years.This experience helped me push my limits and taught me much
            about life, love and friendship!
          </p>
        </div>
      </div>
      <div className={classes.intro}>
        <div
          className={classes.image}
          style={{ backgroundImage: `url(${working})` }}
        ></div>
        <div className={classes.content}>
          <p>“Not all those who wander are lost” I like dogs, this is Mia !</p>
          <p id="p-text">
            I conisder my self a resilient curious person. Down to earth and off
            course Humble
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intro;

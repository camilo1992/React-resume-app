import React from "react";
import classes from "./Projects.module.css";
import ProjectCard from "./ProjectCard";

import comida from "../../assets/comida.png";
import recipe from "../../assets/recipe.png";
import quotes from "../../assets/quotes.png";
import bank from "../../assets/bank.png";
import game from "../../assets/game.png";
import map from "../../assets/map.png";
import redux from "../../assets/newRedux.png";

const urls = [
  "https://61d8794d803b610008dea258--inspiring-mirzakhani-0903bb.netlify.app/",
  "https://610050dcdab9e200083f6121--youthful-euler-f0d9b4.netlify.app/#5ed6604591c37cdc054bcd1f",
  "https://620fb70aa496573962b17b3e--upbeat-bassi-5c439a.netlify.app",
  "https://6111789277acf000085b0018--practical-mccarthy-be2f71.netlify.app/",
  "https://610d7b7d1ff82000081321b4--elastic-lichterman-761ac3.netlify.app/",
  "https://612043795607e800077437e2--awesome-kepler-192b24.netlify.app/",
  "https://621166cb16fb8c7092ac3327--wonderful-brown-dea1b2.netlify.app/",
];

const info = [
  {
    link: "https://61d8794d803b610008dea258--inspiring-mirzakhani-0903bb.netlify.app/",

    src: comida,
    title: "-order-app-",
    description:
      "Through http request, the menu is fetched from Firebase as a rest api.The user can adjust, delete or add anything on the menu and order it once it's completed.Sending a post request back to Firebase where customer's data is stored.",
  },
  {
    link: "https://610050dcdab9e200083f6121--youthful-euler-f0d9b4.netlify.app/#5ed6604591c37cdc054bcd1f",

    src: recipe,
    title: "-OOP-",
    description:
      "The search field displays retrieved recipies from a rest API. It is also possible to send a post request with a new recipe filling up a form. This app's structure is done through  MVC architecture and its functionality comes from OPP and Classes",
  },

  {
    link: "https://620fb70aa496573962b17b3e--upbeat-bassi-5c439a.netlify.app",

    src: quotes,
    title: "React-routing-quotes",
    description:
      " React quotes allows users to post quotes that are stored and retrieved from a rest API It uses react-rotuer-dom@5. It adds dynamic routs using params and implements programmatic navigation and query parameters when quotes are sorted.",
  },
  {
    link: "https://6111789277acf000085b0018--practical-mccarthy-be2f71.netlify.app/",

    src: bank,
    title: "JavaScript-Bank-app",
    description:
      "Bank app is programmed in plane spaghetti code. It's part of my first projects and to see it, reminds me of thinking, something was very complicated. And it is not anynmore.",
  },
  {
    link: "https://610d7b7d1ff82000081321b4--elastic-lichterman-761ac3.netlify.app/",

    src: game,
    title: "Guess the number",
    description:
      "This is my very first project and is code with basic css, html and Js. I really like it. It's amazing to see what just some ccs can do. Now i can see that there is so much we can do with it. ",
  },

  {
    link: "https://612043795607e800077437e2--awesome-kepler-192b24.netlify.app/",

    src: map,
    title: "leaflet library and geolocation",
    description:
      "This project interacts with the location server's web Api. By abstracting  coodrinates in order to use them as inputs into the leaflet library.It gave me a great understanding of the use of classes, the this key word and external libraries.",
  },
  {
    link: "https://621166cb16fb8c7092ac3327--wonderful-brown-dea1b2.netlify.app/",

    src: redux,
    title: "React-Redux-toolkit",
    description:
      "  This app uses react-redux as a state manager. I belive it adds an inmense advantage to a project. Since, Redux makes the code more readable and splits the global state into different files.",
  },
];

function Projects() {
  return (
    <div id="projects">
      <div className={classes.project}>
        {info.map((project) => {
          return (
            <ProjectCard
              key={project.title}
              src={project.src}
              description={project.description}
              title={project.title}
              onClick={() => window.open(project.link)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;

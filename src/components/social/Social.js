import classes from "./Social.module.css";
import insta from "../../assets/Instagram.png";
import git from "../../assets/gitHubb.png";
import link from "../../assets/linkedin.png";

const surl = [
  "https://github.com/camilo1992",
  "https://www.instagram.com/camilo_1108_/",
  "https://www.linkedin.com/in/cristian-g-12808039/",
];

function Social() {
  const openSocial = (e) => {
    // console.log(e.target.className);

    if (e.target.className === "Social_insta__YMReo") {
      window.open("https://www.instagram.com/camilo_1108_/");
    }
    if (e.target.className === "Social_link__ptAIO") {
      window.open("https://www.linkedin.com/in/cristian-g-12808039/");
    }
    if (e.target.className === "Social_git__OJHBa") {
      console.log("git");
      window.open("https://github.com/camilo1992");
    }
  };
  return (
    <div id="social">
      <div className={classes.socialContainer}>
        <div
          onClick={openSocial}
          className={classes.insta}
          style={{ backgroundImage: `url(${insta})` }}
        ></div>
        <div
          onClick={openSocial}
          className={classes.link}
          style={{ backgroundImage: `url(${link})` }}
        ></div>
        <div
          onClick={openSocial}
          className={classes.git}
          style={{ backgroundImage: `url(${git})` }}
        ></div>
      </div>
    </div>
  );
}

export default Social;

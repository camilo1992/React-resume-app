import classes from "./Hobbies.module.css";
import island from "../../assets/island.jpg";
import insta from "../../assets/Instagram.png";

function Hobbies() {
  const handleClick = () => {
    window.open("https://www.instagram.com/zoning_out._/");
  };
  return (
    <div id="hobbies">
      <div className={classes.hobbiesContainer}>
        <div
          className={classes.insta}
          style={{ backgroundImage: `url(${insta})` }}
          onClick={handleClick}
        ></div>
        <div className={classes.instaFrame}>
          <div
            className={classes.instaPhoto}
            style={{ backgroundImage: `url(${island})` }}
          ></div>
        </div>
      </div>
      <div className={classes.hobbiesDescription}>
        I have practiced a few sport along my life. I enojoy sports... playing
        soccer, or may be riding my bicycle with my friends on the weekend. I
        like art and can find beauty in almost anything. I like listening to
        people but talking too. I like coffee and I also enjoy developping
      </div>
    </div>
  );
}

export default Hobbies;

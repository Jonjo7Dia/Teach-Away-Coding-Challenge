import classes from "./MediaScore.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp, faStar } from "@fortawesome/free-solid-svg-icons";
function MediaScore(props) {
  console.log(props);
  return (
    <div className={classes.mediaScore}>
      <div className={classes.stat}>
        <FontAwesomeIcon icon={faThumbsUp} />
        {props.ups}
      </div>
      <div className={classes.stat}>
        <FontAwesomeIcon icon={faThumbsDown} />
        {props.downs}
      </div>
      <div className={classes.stat}>
        <FontAwesomeIcon icon={faStar} />
        {props.score}
      </div>
    </div>
  );
}

export default MediaScore;

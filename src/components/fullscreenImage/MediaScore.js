import classes from "./MediaScore.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp, faStar } from "@fortawesome/free-solid-svg-icons";
function MediaScore(props) {

  return (
    <div className={classes.mediaScore}>
      <div className={classes.stat}>
        <FontAwesomeIcon icon={faThumbsUp} />
        {props.ups}
        <span className={classes.tooltip}>Upvotes</span>

      </div>
      <div className={classes.stat}>
        <FontAwesomeIcon icon={faThumbsDown} />
        {props.downs}
        <span className={classes.tooltip}>Downvotes</span>
      </div>
      <div className={classes.stat}>
        <FontAwesomeIcon icon={faStar} />
        {props.score}
        <span className={classes.tooltip}>Score</span>

      </div>
    </div>
  );
}

export default MediaScore;

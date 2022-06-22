import classes from "./PostBody.module.css";
import MediaDisplay from "./MediaDisplay";
import MediaScore from "./MediaScore";
import MediaDescription from "./MediaDescription";
function PostBody(props) {
  //details: big image, title, description, upvotes, downvotes and score
  const { ups, downs, score, title, description } = props.info;
  return (
    <div className={classes.post}>
      <div className={classes.imageScore}>
        <div className={classes.media}>
          <MediaDisplay type={props.type} link={props.link} />
        </div>
        <div className={classes.score}>
          <MediaScore ups={ups} downs={downs} score={score} />
        </div>
      </div>
      <div className={classes.descriptionTitle}>
        <MediaDescription title={title} description={description} />
      </div>
    </div>
  );
}

export default PostBody;

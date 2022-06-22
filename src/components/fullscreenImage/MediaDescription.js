import classes from "./MediaDescription.module.css";

function MediaDescription(props) {
  return (
    <div className={classes.description}>
      <div className={classes.mediaInfo}>{props.title}</div>
      <div className={classes.mediaInfo}>
       {props.description}
       </div>
    </div>
  );
}
export default MediaDescription;

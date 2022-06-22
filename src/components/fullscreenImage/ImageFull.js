import classes from "./ImageFull.module.css";
import PostBody from "./PostBody";
function ImageFull(props) {
  return (
    <div className={classes.overlay} onClick={()=>{
        props.close(false);
    }}>
      <PostBody info={props.info} type={props.type} link={props.link}  />
    </div>
  );
}

export default ImageFull;

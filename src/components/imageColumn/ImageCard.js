import { useSelector } from "react-redux";
import classes from "./ImageCard.module.css";

const ImageCard = (props) => {
  const mediaInfo = useSelector((state) => state.media);
  const content = props.content;
  let link;
  let type;
  if (!mediaInfo.loading) {
    if ("images" in content) {
      type = content.images[0].type;
      link = content.images[0].link;
    } else {
      type = content.type;
      link = content.link;
    }
    console.log(content.images);
  }
  return (
    <div
      className={classes.imageCard}
      onClick={() => {
        console.log(content);
      }}
    >
      {mediaInfo.loading && <div className={classes.loadingMedia}></div>}
      {!mediaInfo.loading && (
        <div className={classes.media}>
          {type.includes("video") && (
            <video playsInline autoPlay muted loop>
              <source src={link} type="video/mp4" />
            </video>
          )}
          {type.includes("image") && <img src={link} />}
        </div>
      )}
      {!mediaInfo.loading && (
        <div className={classes.description}>
          <h4>{content.title}</h4>
        </div>
      )}
    </div>
  );
};

export default ImageCard;

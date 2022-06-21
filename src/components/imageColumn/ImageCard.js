import { useSelector } from "react-redux";
import classes from "./ImageCard.module.css";

const ImageCard = () => {
  const mediaInfo = useSelector((state) => state.media);
  console.log(mediaInfo);
  return (
    <div className={classes.imageCard}>
      <div className={classes.media}></div>
      <div className={classes.description}>
        <h4>Discription</h4>
      </div>
    </div>
  );
};

export default ImageCard;

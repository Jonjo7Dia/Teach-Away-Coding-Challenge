import { useSelector } from "react-redux";
import classes from "./ImageCard.module.css";

const ImageCard = () => {
  const mediaInfo = useSelector((state) => state.media);
  return (
    <div className={classes.imageCard}>
        {mediaInfo.loading && <div className={classes.loadingMedia}></div>}
     { !mediaInfo.loading && <div className={classes.media}></div>}
      {!mediaInfo.loading && <div className={classes.description}>
        <h4>Discription</h4>
      </div>}
    </div>
  );
};

export default ImageCard;

import { useSelector } from "react-redux";
import classes from "./ImageCard.module.css";

const ImageCard = (props) => {
  const mediaInfo = useSelector((state) => state.media);
  const content = props.content;

  return (
    <div className={classes.imageCard} onClick={()=>{
        console.log(content);
    }}>
        {mediaInfo.loading && <div className={classes.loadingMedia}></div>}
     { !mediaInfo.loading && <div className={classes.media}>
         {'type' in content && <video><source src={content.link} type="video/mp4"/></video>}
         {'images' in content && <img src={content.images[0].link}/>}
       </div>}
      {!mediaInfo.loading && <div className={classes.description}>
        <h4>{content.title}</h4>
      </div>}
    </div>
  );
};

export default ImageCard;

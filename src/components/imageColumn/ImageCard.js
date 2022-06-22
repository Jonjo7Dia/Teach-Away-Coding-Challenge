import { useSelector } from "react-redux";
import classes from "./ImageCard.module.css";
import ImageFull from "../fullscreenImage/ImageFull";
import { useState } from "react";
const ImageCard = (props) => {
  const [showImage, setShowImage] = useState(false);
  const [loading, setLoading] = useState(true);
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
  }
  return (
    <div className={classes.imageCard}>
      {mediaInfo.loading && <div className={classes.loadingMedia}></div>}
      {!mediaInfo.loading && (
        <div
          className={classes.media}
          onClick={() => {
            setShowImage(true);
          }}
        >
          {type.includes("video") && (
            <video playsInline autoPlay muted loop>
              <source
                src={link}
                type="video/mp4"
                onLoad={() => {
                  setLoading(false);
                }}
              />
              {loading && <div className={classes.loadingMedia}> </div>}
            </video>
          )}
          {type.includes("image") && (
            <img
              src={link}
              alt={content.title}
              onLoad={() => {
                setLoading(false);
              }}
            />
          )}
          {loading && <div className={classes.loadingMedia}> </div>}
        </div>
      )}
      {!mediaInfo.loading && (
        <div
          className={classes.description}
          onClick={() => {
            setShowImage(true);
          }}
        >
          <h4>{content.title}</h4>
        </div>
      )}
      {showImage && (
        <ImageFull
          info={content}
          type={type}
          link={link}
          close={(value) => {
            setShowImage(value);
          }}
        />
      )}
    </div>
  );
};

export default ImageCard;

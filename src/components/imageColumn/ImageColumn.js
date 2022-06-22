import ImageCard from "./ImageCard";
import { useSelector } from "react-redux";
import Masonry from "react-masonry-css";
import classes from "./ImageColumn.module.css";
const ImageColumn = (props) => {
  const media = useSelector((state) => state.media);
  const breakpoints = {
    default: 5,
    1500: 4,
    1200: 3,
    1100: 2,
    700: 1,
  };
  if (!media.loading) {
    return (
      <Masonry
        breakpointCols={breakpoints}
        className={classes.myMasonryGrid}
        columnClassName={classes.myMasonryGridColumn}
      >
        {media.data.map((index) => {
          return <ImageCard key={index.id} content={index}></ImageCard>;
        })}
      </Masonry>
    );
  } else {
    return (
      <Masonry
        breakpointCols={breakpoints}
        className={classes.myMasonryGrid}
        columnClassName={classes.myMasonryGridColumn}
      >
        {props.data.map((content, index) => {
          return <ImageCard key={index} content={content}></ImageCard>;
        })}
      </Masonry>
    );
  }
};

export default ImageColumn;

import classes from "./ViewResults.module.css";
import ImageColumn from "../imageColumn/ImageColumn";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback } from "react";
import { mediaActions } from "../../store/media-slice";
import { httpGetMedia } from "../../hooks/requests";

const ViewResults = () => {
  const dispatch = useDispatch();
  const arr = [1,2,3,4,5,6];
  const filter = useSelector((state) => state.filter);
  const getMedia = useCallback(async () => {
    const fetchedMedia = await httpGetMedia(
      filter.section,
      filter.sort,
      filter.window,
      filter.page,
      filter.showViral
    );
    dispatch(mediaActions.setData(fetchedMedia.data));
    dispatch(mediaActions.setLoading(false));
  }, [filter]);
  useEffect(() => {
    getMedia();
  }, [getMedia]);

  return (
    <div className={classes.results}>
      <div className={classes.imageColumn}>
        <ImageColumn data={arr} position={0}/>
      </div>
      <div className={classes.imageColumn}>
        <ImageColumn data={arr} position={1}/>

      </div>
      <div className={classes.imageColumn}>
        <ImageColumn data={arr} position={2}/>

      </div>
      <div className={classes.imageColumn}>
        <ImageColumn data={arr} position={3}/>

      </div>
    </div>
  );
};

export default ViewResults;

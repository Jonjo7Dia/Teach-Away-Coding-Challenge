import classes from "./ViewResults.module.css";
import ImageColumn from "../imageColumn/ImageColumn";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback } from "react";
import { mediaActions } from "../../store/media-slice";
import { httpGetMedia } from "../../hooks/requests";

const ViewResults = () => {
  const dispatch = useDispatch();
  const arr = new Array(60).fill('random');
  const filter = useSelector((state) => state.filter);
  const getMedia = useCallback(async () => {
    const fetchedMedia = await httpGetMedia(
      filter.section,
      filter.sort,
      filter.window,
      filter.page,
      filter.showViral
    );
    if(fetchedMedia.success){
      dispatch(mediaActions.setData(fetchedMedia.data));
      dispatch(mediaActions.setLoading(false));
    }
    else {
      dispatch(mediaActions.setError(fetchedMedia));
    }
    
  }, [filter,dispatch]);
  useEffect(() => {
    getMedia();
  }, [getMedia]);

  return (
    <div className={classes.results}>
      <div className={classes.imageColumn}>
        <ImageColumn data={arr}/>
      </div>
    </div>
  );
};

export default ViewResults;

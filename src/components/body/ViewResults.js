import classes from "./ViewResults.module.css";
import ImageColumn from '../imageColumn/ImageColumn';
import {useSelector} from  "react-redux";
const ViewResults = () => {
    const arr = [1,2,3,4,5,6,8];
    const data = useSelector((state) => state.media);
    console.log(data);
  return (
    <div className={classes.results}>
      <div className={classes.imageColumn}><ImageColumn data={arr}/></div>
      <div className={classes.imageColumn}></div>
      <div className={classes.imageColumn}></div>
      <div className={classes.imageColumn}></div>
    </div>
  );
};

export default ViewResults;
